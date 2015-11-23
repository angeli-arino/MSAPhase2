using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;


namespace MSAPhase2._2.Models
{
    public class MSAPhase2_2Context : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public class MyConfiguration : DbMigrationsConfiguration<MSAPhase2_2Context>
        {

            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
            }

            protected override void Seed(MSAPhase2_2Context context)
            {

                context.Specials.AddOrUpdate(x => x.ID,
                    new Special()
                    {
                        ID = 1,
                        name= "special1",
                        price = 6.66f,
                        start = DateTime.Parse("2015-10-12"),
                        end = DateTime.Parse(("2015-11-12"))


                    },
                    new Special()
                    {
                        ID = 2,
                        name = "special2",
                        price = 6.66f,
                        start = DateTime.Parse("2015-10-12"),
                        end = DateTime.Parse(("2015-11-12"))


                    },
                    new Special()
                    {
                        ID = 3,
                        name = "special3",
                        price = 6.66f,
                        start = DateTime.Parse("2015-10-12"),
                        end = DateTime.Parse(("2015-11-12"))


                    },
                    new Special()
                    {
                        ID = 4,
                        name = "special4",
                        price = 6.66f,
                        start = DateTime.Parse("2015-10-12"),
                        end = DateTime.Parse(("2015-11-12"))
                    });
                context.SaveChanges();
            }

        }




        public MSAPhase2_2Context() : base("name=MSAPhase2_2Context")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<MSAPhase2_2Context, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<MSAPhase2._2.Models.Special> Specials { get; set; }
    }
}
