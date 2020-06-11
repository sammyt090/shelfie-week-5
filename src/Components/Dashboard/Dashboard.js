import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import "./Dashboard.css"


export default class Dashboard extends Component{
    constructor(){
        super()

        this.state= {
            list : []
        }

        this.deleteList=this.deleteList.bind(this)

    }

    componentDidMount(){
        this.getProducts()
       }

    getProducts(){
        axios.get('/api/inventory').then((res) => {
          this.setState({
            list: res.data
          })
        })
      }

    deleteList(id){
        console.log(id)
        axios.delete(`/api/inventory/${id}`).then((res) =>{
            // this.setState({
            //     list: res.data
            // })
            this.getProducts()
    })

    }

render(){
    let mainList = this.state.list.map((element) => <div><Product element={element} list ={this.state.list} deleteList ={this.deleteList} /*updateSelectedProduct = {this.props.updateSelectedProduct}*//></div>)
    return(
        <div className = 'products'>
           
            {mainList}
        </div>
    )
}
}