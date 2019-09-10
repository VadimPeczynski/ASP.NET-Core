using System.Linq;

namespace MultiShop.Models
{
    public interface IProductRepository
    {
        IQueryable<Product> Products { get; }
    }
}
