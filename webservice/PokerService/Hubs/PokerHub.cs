using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using PokerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PokerService.Hubs
{
    [AllowAnonymous]
    public class PokerHub : Hub
    {
        private ILogger<PokerHub> _logger;
        private IMemoryCache _cache;

        public PokerHub(ILogger<PokerHub> logger, IMemoryCache cache)
        {
            _logger = logger;
            _cache = cache;
        }


        public async Task GetTwoCards(string name)
        {
            var currentCards = _cache.Get<List<Card>>("currentCards") ?? Helper.GetAllCards();
            var players = _cache.Get<List<Player>>("players") ?? new List<Player>();

            if (currentCards.Count == 0)
            {
                await Clients.All.SendAsync("deckEmpty");
                _cache.Set("currentCards", Helper.GetAllCards());
                return;
            }

            var random = new Random();
            var nextCards = new List<Card>();
            var firstCardPosition = random.Next(0, currentCards.Count);
            nextCards.Add(currentCards.ElementAt(firstCardPosition));
            currentCards.RemoveAt(firstCardPosition);

            var secondCardPosition = random.Next(0, currentCards.Count);
            nextCards.Add(currentCards.ElementAt(secondCardPosition));
            currentCards.RemoveAt(secondCardPosition);

            var currentPlayer = players.FirstOrDefault(x => x.Name == name);
            if (currentPlayer != null)
            {
                currentPlayer.Cards = nextCards;
            }
            else
            {
                players.Add(new Player
                {
                    Name = name,
                    Cards = nextCards
                });
            }

            _logger.LogInformation($"player {name} has cards {nextCards.ElementAt(0).Value} {nextCards.ElementAt(0).Type} AND {nextCards.ElementAt(1).Value} {nextCards.ElementAt(1).Type}");

            _cache.Set("currentCards", currentCards);
            _cache.Set("players", players);

            // tell all the players about the new cards
            await Clients.All.SendAsync("cardsTakenOut", players);
        }

        public async Task DestroyGame()
        {
            var currentCards =  Helper.GetAllCards();
            var players =  new List<Player>();
            
            _cache.Set("currentCards", currentCards);
            _cache.Set("players", players);

            // tell all the players about the new cards
            await Clients.All.SendAsync("destroy");
            await Clients.All.SendAsync("cardsTakenOut", players);
        }
    }
}
