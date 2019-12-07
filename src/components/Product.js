import React from 'react';



class Product extends React.Component{
    render(){
        const {products} = this.props;
        const prodList = products.map(product => {
            return(
            <div className="row my-3 text-center" key={product.id}> 
                <div className="col-10 mx-auto col-lg-2 title">
                    <img src={product.img} className="pic"/>
                 </div>
                 <div className="col-10 mx-auto col-lg-2 title">
                     {product.name}
                 </div>      
                 <div className="col-10 mx-auto col-lg-2 title">
                     <span> ₹</span>{product.cost}
                 </div> 
                 <div className=" col-10 mx-auto col-lg-2 ">
                     <div className="d-flex justify-content-center">
                         <div>
                             <span className="btn btn-danger mx-1 " onClick={()=>this.props.decrement(product.id)} >
                                 -
                             </span>
                             <span> {product.count} </span>
                             <span className="btn btn-primary mx-1" onClick={()=>this.props.increment(product.id)} >
                                 +
                             </span>
                         </div>
                      </div>
                  </div>  
                  <div className=" col-10 mx-auto col-lg-2 ">
                      <React.Fragment>
                          <span className="btn btn-light mx-1" onClick={()=>this.props.remove(product.id)}>
                              <i className="fa fa-trash"></i>
                              </span>
                     </React.Fragment>
                  </div>
                  <div className=" col-10 mx-auto col-lg-2 title">
                     ₹{product.total}
                  </div>


            </div>     

            )
        })
        return(
            <React.Fragment>
            <h1>Shopping Cart</h1>
            <div className="row my-3 text-center">
            <div className="col-10 mx-auto col-lg-2 "><h2>Product</h2></div>
            <div className="col-10 mx-auto col-lg-2 "><h2>Name </h2></div>
            <div className="col-10 mx-auto col-lg-2 "><h2>Price</h2></div>
            <div className="col-10 mx-auto col-lg-2 "><h2>Quantity</h2></div>
            <div className="col-10 mx-auto col-lg-2 "><h2>Delete</h2></div>
            <div className="col-10 mx-auto col-lg-2 "><h2>Total</h2></div>
            </div>
            <div className="products-list">
                {prodList}
            </div> 
            </React.Fragment>     
        )
    }
}

export default Product;