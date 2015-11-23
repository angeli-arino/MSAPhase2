using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace MSAPhase2.Models
{
    //[DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]

    public class MSAPhase2Context : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public class MyConfiguration: DbMigrationsConfiguration<MSAPhase2Context>
        {
            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
            }

            protected override void Seed(MSAPhase2Context context)
            {
                context.Specials.AddOrUpdate(x => x.ID,
                    new Special()
                    {
                        ID = 1,
                        Firstname = "special1",
                        Lastname = "ulul",
                        Country = "Sweden"

                    },
                    new Special()
                    {
                        ID = 2,
                        Firstname = "special2",
                        Lastname = "ulul",
                        Country = "Sweden"

                    },
                    new Special()
                    {
                        ID = 3,
                        Firstname = "special3",
                        Lastname = "ulul",
                        Country = "Sweden"

                    },
                    new Special()
                    {
                        ID = 4,
                        Firstname = "special4",
                        Lastname = "ulul",
                        Country = "Sweden"

                    });
                context.SaveChanges();

            }

        }
    
        public MSAPhase2Context() : base("name=MSAPhase2Context")
        {
            if (!Database.Exists("MSAPhase2Context"))
            {
                Database.SetInitializer(new MigrateDatabaseToLatestVersion<MSAPhase2Context, MyConfiguration>());
            }
        }

        public System.Data.Entity.DbSet<MSAPhase2.Models.Special> Specials { get; set; }
    }
}
