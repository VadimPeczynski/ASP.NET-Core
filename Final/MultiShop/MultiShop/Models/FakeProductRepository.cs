using System;
using System.Collections.Generic;
using System.Linq;

namespace MultiShop.Models
{
    public class FakeProductRepository : IProductRepository
    {
        public IQueryable<Product> Products => new List<Product> {
            new Product{ProductName = "Grabie",
        ProductCode = "GDN-0011",
        ReleaseDate = "19.03.2016",
        Description = "Grabie ogrodowe z drewnanym trzonkiem.",
        Price = 19.95M,
        StarRating = 3.2,
        ImageUrl = "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"}
        }.AsQueryable();

        public Product AddProduct(Product product)
        {
            throw new NotImplementedException();
        }

        public void DeleteProduct(int id)
        {
        }

        public Product UpdateProduct(int id, Product product)
        {
            throw new NotImplementedException();
        }
    }
}
