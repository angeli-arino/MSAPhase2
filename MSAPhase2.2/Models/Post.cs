using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MSAPhase2._2.Models
{
    public class Post
    {
        public int ID { get; set; }
        public string user { get; set; }
        public string question { get; set; }
        public DateTime date { get; set; }
        public string answer { get; set; }
    }
}