using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace MultiShop.Models
{
    public static class SeedData
    {
        public static void EnsurePopulated(IApplicationBuilder app)
        {
            ApplicationDbContext context = app.ApplicationServices.GetRequiredService<ApplicationDbContext>();
            context.Database.Migrate();
            if (!context.Products.Any())
            {
                context.Products.AddRange(new Product
                {
                    ProductName = "Grabie",
                    ProductCode = "GDN-0011",
                    ReleaseDate = "19.03.2016",
                    Description = "Grabie ogrodowe z drewnanym trzonkiem.",
                    Price = 19.95M,
                    StarRating = 3.2,
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                new Product
                {
                    ProductName = "Wózek ogrodowy",
                    ProductCode = "GDN-0023",
                    ReleaseDate = "18.03.2016",
                    Description = "Wózek ogrodowy o pojemności 50 litrów",
                    Price = 32.99M,
                    StarRating = 4.2,
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                new Product
                {
                    ProductName = "Młot",
                    ProductCode = "TBX-0048",
                    ReleaseDate = "21.05.2016",
                    Description = "Stalowy młot",
                    Price = 8.9M,
                    StarRating = 4.8,
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                });
                context.SaveChanges();
            }
        }
    }
}
