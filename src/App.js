import React from "react";
import Header from "./Components/Header.tsx";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer.tsx";
import Main from "./Components/Main.tsx";
// https://keansburgamusementpark.com/
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Buytickets from "./pages/Buytickets.js";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes />
        {/* <Main/>
        <Events/> */}
        <Footer />
      </Router>
    </div>
  );
};

// let products =null;
// fetch ('product.json')
// .then(response=>response.json())
// .then(data=>{
//   products=data;
//   addCartToBuytickets();

//   })
//   function addCartToBuytickets(){
//     let listProductBuytickets=document.querySelector('.listProduct')
//     listProductBuytickets.innerBuytickets='';
//     if(products !=null){
//       products.forEach(product => {
//         let newProduct=document.createElement('div');
//         newProduct.classList.add('item');
//         newProduct.innerBuytickets=
//         ` <img src="${product.image}"></img>
//         <h2>${product.name}</h2>
//         <div className="price">${product.price}</div>
//         <button onclick="addCart(${product.id})">Add To Cart</button>`;
//         listProductBuytickets.appendChild(newProduct);
//       });
//     }
//   }
// let listCart=[];
// function checkCart(){
//   var cookieValue=document.cookie
//   .split(';')
//   .find(row=>row.startsWith('listCart='));
//   if(cookieValue){
//     listCart=JSON.parse(cookieValue.split('=')[1]);
//   }
// }
// checkCart();
// function addCart($idProduct) {
//   let productCopy=JSON.parse(JSON.stringify(products));
//   if(!listCart[$idProduct]){
//     let dataProduct=productCopy.filter(
//       product=>product.id==$idProduct
//     )[0];
//     listCart[$idProduct]=dataProduct;
//     listCart[$idProduct].quantity=1;
//   }else{
//     listCart[$idProduct].quantity++;
//   }
//   let timeSave="expires=Thu,31 Dec 2025 23:59:59 UTC";
//   document.cookie="listCart="+JSON.stringify(listCart)+";"+timeSave+";path=/;";
//  addCartToBuytickets();
// }

// function addCartToBuytickets() {
//   let listcartBuytickets=document.querySelector('.listCart');
//   listCart.innerBuytickets='';
//   let totalBuytickets=document.querySelector('.totalQuantity');
//   let totalQuantity=0;
// }

export default App;
