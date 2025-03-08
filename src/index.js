import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];




function Menu() {
  return (
    <main>
      <h2>Our menu</h2>
      <Pizza/>
    </main>
  );
}


function Pizza (){
  return (
    <div>
     <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
     <h3>Pizza Spinaci</h3>
     <p>tomato, mozarella, spinaci, and ricotta cheese</p>
    </div>
  );
}



function Footer() {
  const hour = new Date().getHours();
  const openHours =12;
  const closedHour = 22;
  const isOpen = hour >= openHours && hour < closedHour;
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
