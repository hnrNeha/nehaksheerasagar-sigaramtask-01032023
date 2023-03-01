// import React, { useState, useEffect } from "react";
// import "./App.css";

// const gitHubUrl = "https://fakestoreapi.com/products";

// function App() {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     getGitHubUserWithFetch();
//   }, []);

//   const getGitHubUserWithFetch = async () => {
//     const response = await fetch(gitHubUrl);
//     const jsonData = await response.json();
//     setUserData(jsonData);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>GitHub User Data</h2>
//       </header>
//       <div className="user-container">
//         <h5 className="info-item">{userData[0].id}</h5>
//         <h5 className="info-item">{userData[0].title}</h5>
//         <h5 className="info-item">{userData[0].description}</h5>
//         <h5 className="info-item">{userData[0].price}</h5>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [products, setProducts, setCart] = useState([]);

 

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await Axios.get(
        "https://fakestoreapi.com/products"
      );
      const products = data;
      setProducts(products);
      console.log(products);
    };
    fetchProducts();
  }, [setProducts]);

 const addToCart = (p) => setCart((currentCart) => [...currentCart, p]);
//  const cartItems = cart.map((p) => (
//   <div key={p.id}>
//     {`${p.name}: $${p.price}`}
//     <input type="submit" value="remove" onClick={() => removeFromCart(p)} />
//   </div>
// ));
// const removeFromCart = (p) => {
//   let hardCopy = [...cart];
//   hardCopy = hardCopy.filter((cartItem) => cartItem.id !== p.id);
//   setCart(hardCopy);
// };

  return (
    
    <div>
      <button type="submit">Go to cart</button>
      {/* <div>{cartItems}</div> */}
      {products.map((product) => (
        <tr key={product.id}>
         <td> {product.title}</td>
        <td> {product.price}</td>
        <td>{product.description}</td>
        <td>{product.category}</td>
        {/* <td>{product.rating}</td> */}
        <td>{<img src={product.image} alt="" height="100" width="100" />}</td>
        <button type="submit" onClick={() => addToCart(product)}>Add to cart</button>
        
        </tr>
      ))}
    </div>
  );
}

export default App;