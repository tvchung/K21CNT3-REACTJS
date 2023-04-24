import React, { Component } from 'react'

export default class ListProduct extends Component {
  render() {
    let {renderList} = this.props;
    let elementProduct = renderList.map((product,index)=>{
        return(
            <>
                <tr>
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                </tr>
            </>
        )
    })
    return (
      <div>
            <h2>List Product</h2>
            <table border={"1px"} width="500px">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </thead>
                <tbody>
                    {elementProduct}
                </tbody>
            </table>
      </div>
    )
  }
}
