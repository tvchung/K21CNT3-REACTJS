import React, { Component } from 'react'
import Control from './components/Control';
import ListProduct from './components/ListProduct';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products:[
        {productId:"P001",productName:"Nguyễn thanh tùng",price:1234,quantity:10},
        {productId:"P002",productName:"Nguyễn thanh thanh",price:234,quantity:5},
        {productId:"P003",productName:"Trần thanh tùng",price:3214,quantity:15},
      ],
      keyword:"",
    }
  }
  handleSubmit = (keyword)=>{
    // console.log("keyword:",keyword);
    // let {products} = this.state;
    // products.filter(x=>x.productName.includes(keyword));
    this.setState({
      keyword:keyword
    })
  }
  render() {
    let {products,keyword}=this.state;
    console.log(products);
    console.log(keyword);
    let dataSearch = products.filter(x=>x.productName.toLowerCase().includes(keyword.toLowerCase()));
    console.log(dataSearch);
    return (
      <div>
        <Control onSubmit = {this.handleSubmit}/>
        <hr/>
        <ListProduct renderList = {dataSearch} />
      </div>
    )
  }
}
