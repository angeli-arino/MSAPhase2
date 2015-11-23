using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;


namespace MSAPhase2._2.Models
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
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

                context.Posts.AddOrUpdate(x => x.ID,
                    new Post()
                    {
                        user= "User1",
                        question = "hallo",
                        date = DateTime.Parse("2015-10-12"),
                        answer = "---"


                    },
                    new Post()
                    {
                        user = "User2",
                        question = "wasup",
                        date = DateTime.Parse("2015-10-12"),
                        answer = "---"


                    });
                context.SaveChanges();
            }

        }




        public MSAPhase2_2Context() : base("name=MSAPhase2_2Context")
        {
            if (!Database.Exists("MSAUniAppContext"))
            {
                // Need to initialize database with configuration 
                Database.SetInitializer(new MigrateDatabaseToLatestVersion<MSAPhase2_2Context, MyConfiguration>());
            }
            
        }

        public System.Data.Entity.DbSet<MSAPhase2._2.Models.Special> Specials { get; set; }

        public System.Data.Entity.DbSet<MSAPhase2._2.Models.Post> Posts { get; set; }
    }
}
