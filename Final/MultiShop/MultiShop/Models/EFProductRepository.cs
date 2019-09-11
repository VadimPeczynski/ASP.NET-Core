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

        public Product AddProduct(Product product)
        {
            using (context)
            {
                context.Products.Add(product);
                context.SaveChanges();
                return product;
            }
        }

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

        public Product UpdateProduct(int id, Product product)
        {
            using (context)
            {
                context.Products.Update(product);
                context.SaveChanges();
                return product;
            }
        }
    }
}
