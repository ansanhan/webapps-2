using System;
using gruppeoppgave_1.Models;
using Microsoft.EntityFrameworkCore;

namespace gruppeoppgave_1.DAL
{
    public class UfoDB : DbContext
    {
        public UfoDB(DbContextOptions<UfoDB> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Ufo> Resultat { get; set; }
    }
}

