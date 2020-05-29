import React, { Component } from 'react'

export default class Product extends Component{
    constructor(){
        super()


    }





    render(){
        return(
            <div>
            <p>{this.props.element.name}</p>
            
            <p>{this.props.element.price}</p>
            <p>{this.props.element.img}</p>
           
            
            </div>
        )
    }
}