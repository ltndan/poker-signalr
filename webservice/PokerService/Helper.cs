using PokerService.Models;
using System.Collections.Generic;

namespace PokerService
{
    public static class Helper
    {
        public static List<Card> GetAllCards()
        {
            return new List<Card>
            {
                new Card {Type = "Clubs", Value = "2"},
                new Card {Type = "Clubs", Value = "3"},
                new Card {Type = "Clubs", Value = "4"},
                new Card {Type = "Clubs", Value = "5"},
                new Card {Type = "Clubs", Value = "6"},
                new Card {Type = "Clubs", Value = "7"},
                new Card {Type = "Clubs", Value = "8"},
                new Card {Type = "Clubs", Value = "9"},
                new Card {Type = "Clubs", Value = "10"},
                new Card {Type = "Clubs", Value = "A"},
                new Card {Type = "Clubs", Value = "J"},
                new Card {Type = "Clubs", Value = "K"},
                new Card {Type = "Clubs", Value = "Q"},

                new Card {Type = "Diamonds", Value = "2"},
                new Card {Type = "Diamonds", Value = "3"},
                new Card {Type = "Diamonds", Value = "4"},
                new Card {Type = "Diamonds", Value = "5"},
                new Card {Type = "Diamonds", Value = "6"},
                new Card {Type = "Diamonds", Value = "7"},
                new Card {Type = "Diamonds", Value = "8"},
                new Card {Type = "Diamonds", Value = "9"},
                new Card {Type = "Diamonds", Value = "10"},
                new Card {Type = "Diamonds", Value = "A"},
                new Card {Type = "Diamonds", Value = "J"},
                new Card {Type = "Diamonds", Value = "K"},
                new Card {Type = "Diamonds", Value = "Q"},

                new Card {Type = "Hearts", Value = "2"},
                new Card {Type = "Hearts", Value = "3"},
                new Card {Type = "Hearts", Value = "4"},
                new Card {Type = "Hearts", Value = "5"},
                new Card {Type = "Hearts", Value = "6"},
                new Card {Type = "Hearts", Value = "7"},
                new Card {Type = "Hearts", Value = "8"},
                new Card {Type = "Hearts", Value = "9"},
                new Card {Type = "Hearts", Value = "10"},
                new Card {Type = "Hearts", Value = "A"},
                new Card {Type = "Hearts", Value = "J"},
                new Card {Type = "Hearts", Value = "K"},
                new Card {Type = "Hearts", Value = "Q"},

                new Card {Type = "Spades", Value = "2"},
                new Card {Type = "Spades", Value = "3"},
                new Card {Type = "Spades", Value = "4"},
                new Card {Type = "Spades", Value = "5"},
                new Card {Type = "Spades", Value = "6"},
                new Card {Type = "Spades", Value = "7"},
                new Card {Type = "Spades", Value = "8"},
                new Card {Type = "Spades", Value = "9"},
                new Card {Type = "Spades", Value = "10"},
                new Card {Type = "Spades", Value = "A"},
                new Card {Type = "Spades", Value = "J"},
                new Card {Type = "Spades", Value = "K"},
                new Card {Type = "Spades", Value = "Q"}
            };
        }
    }
}
