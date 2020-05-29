import React, { Component } from 'react'
import Product from '../Product/Product'


export default class Dashboard extends Component{
    constructor(){
        super()



    }


render(){
    let mainList = this.props.list.map((element) => <div><Product element={element} list ={this.props.list}/></div>)
    return(
        <div>Header

            {mainList}
        </div>
    )
}
}