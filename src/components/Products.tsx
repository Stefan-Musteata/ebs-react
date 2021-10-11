import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/products')
      .then((res) => {
        console.log(res.data);

        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sortPrice = () => {
    const sortProducts = [...products];
    setProducts(sortProducts.sort((a: any, b: any) => b.price - a.price));
  };

  const sortCategory = () => {
    const sortProducts = [...products];
    setProducts(sortProducts.sort((a: any, b: any) => b.category.name.localeCompare(a.category.name)));
  };

  const onAdd = (product: any) => {};

  return (
    <div className="container mt-5">
      <h1 className="text-center">Products</h1>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col" onClick={sortCategory}>
              Category &#x2191;
            </th>
            <th scope="col">Name</th>
            <th scope="col" onClick={sortPrice}>
              Price &#x2191;
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.id}>
              <th>{product.category.name}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button type="button" className="btn btn-sm btn-danger">
                  -
                </button>
                <span className="px-2">select</span>
                <button type="button" className="btn btn-sm btn-success" onClick={onAdd}>
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
