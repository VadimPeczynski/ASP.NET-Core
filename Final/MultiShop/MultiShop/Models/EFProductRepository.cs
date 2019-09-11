using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultiShop.Models
{
    public class EFProductRepository : IProductRepository
    {
        private ApplicationDbContext context;
        public EFProductRepository(ApplicationDbContext ctx)
        {
            context = ctx;
        }

        public IQueryable<Product> Products => context.Products;

        public void DeleteProduct(int id)
        {
            using (context)
            {
                var product = context.Products
                    .Where(s => s.ProductId == id)
                    .FirstOrDefault();

                context.Products.Remove(product);
                context.SaveChanges();
            }
        }
    }
}
