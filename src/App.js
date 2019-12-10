import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';

function CartTotal(props){
  return <h2>Grand Total: ₹{props.totalCost}</h2>
}
function CartItems(props){
return<h2>Total Number of Items: {props.totalNumber}</h2>
}
class App extends React.Component{

  state ={
    products : [
      {
          id:1,
          name:"Omega Marine",
          cost:15000,
          img:"./one.jpg",
          added:false,
          count:0,
          total:0
        
      },
      {
          id:2,
          name:"Rolex Gold",
          cost:50000,
          img:"two.jpg",
          added:false,
          count:0,
          total:0
        
      },
      {
          id:3,
          name:"Armani",
          cost:20000,
          img:"three.jpg",
          added:false,
          count:0,
          total:0
        
      },
      {
          id:4,
          name:"Rado Topaz",
          cost:70000,
          img:"four.jpg",
          added:false,
          count:0,
          total:0
        
      },
      {
          id:5,
          name:" Casio G-Shock",
          cost:25000,
          img:"five.jpg",
          added:false,
          count:0,
          total:0
        
      },
      {
          id:6,
          name:"Daniel Wellington",
          cost:30000,
          img:"six.jpg",
          added:false,
          count:0,
          total:0
        
      },
    ],
   
}
increment=(id) =>{
  let Cart = [...this.state.products];
    const selectedProduct = Cart.find(item => {
      return item.id === id;
    });
    const index = Cart.indexOf(selectedProduct);
    const product = Cart[index];
    product.count = product.count + 1;
    product.total = product.count * product.cost;
    this.setState(() => {
      return {
        products: [...Cart]
      };
    });
  };
  decrement=(id) =>{
    let Cart = [...this.state.products];
      const selectedProduct = Cart.find(item => {
        return item.id === id;
      });
      const index = Cart.indexOf(selectedProduct);
      const product = Cart[index];
      if(product.count===0)
      {
        return;
      }
      product.count = product.count - 1;
      product.total = product.count * product.cost;
      this.setState(() => {
        return {
          products: [...Cart]
        };
      });
    };

remove=(id)=>{
     let Cart = [...this.state.products];
     const selectedProduct = Cart.find(item => {
        return item.id === id;
      });
      const index = Cart.indexOf(selectedProduct);
      Cart.splice(index,1);
      this.setState(()=>{
        return{
          products:[...Cart]
        };
      });
};
 
render(){
  return (
    <div className="App">
       <div className="App-header">
        <Product products={this.state.products} increment={this.increment} decrement={this.decrement} remove={this.remove} />
        <CartItems totalNumber={this.state.products.reduce((a,c)=>(a+c.count),0)} />
        <CartTotal totalCost={this.state.products.reduce((a,c)=>(a+c.cost*c.count),0)} />
        </div>
    </div>
  );
}
}
export default App;
