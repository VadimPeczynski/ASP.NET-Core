using System.Linq;

namespace MultiShop.Models
{
    public interface IProductRepository
    {
        IQueryable<Product> Products { get; }
        void DeleteProduct(int id);
        Product AddProduct(Product product);
        Product UpdateProduct(int id, Product product);
    }
}
