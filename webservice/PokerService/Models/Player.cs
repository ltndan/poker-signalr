using System.Collections.Generic;

namespace PokerService.Models
{
    public class Player
    {
        public string Name { get; set; }

        public IEnumerable<Card> Cards { get; set; }
    }
}
