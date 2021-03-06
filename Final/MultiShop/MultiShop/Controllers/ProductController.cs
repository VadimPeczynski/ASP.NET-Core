﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MultiShop.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MultiShop.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private IProductRepository repository;
        public ProductController(IProductRepository repo)
        {
            repository = repo;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return repository.Products;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            return repository.Products.SingleOrDefault(product => product.ProductId == id);
        }

        // POST api/<controller>
        [HttpPost]
        public Product Post([FromBody]Product product)
        {
            return repository.AddProduct(product);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public Product Put(int id, [FromBody]Product value)
        {
            return repository.UpdateProduct(id, value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            repository.DeleteProduct(id);
            return id;
        }
    }
}
