using System;
using System.ComponentModel.DataAnnotations;

namespace gruppeoppgave_1.Models
{
    public class Ufo
    {
        public int id { get; set; }
        public string navn { get; set; }
        public string sted { get; set; }
        public string dato { get; set; }
        public string tid { get; set; }
        public string beskrivelse { get; set; }
    }
}
