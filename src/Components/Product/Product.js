import React, { Component } from 'react'
import './product.css'
import {withRouter} from 'react-router-dom'
class Product extends Component{
    constructor(){
        super()


    }





    render(){
        const{id, name, price, img} = this.props.element
        // console.log(this.props)
        return(
            <div className = 'list'>
            <p className="txt">{name}</p>
            <p className="txt">{price}</p>
            <p className="txt">{img}</p>
           
           <button className = "delete buttonEdit" onClick ={() =>this.props.deleteList(this.props.element.id)}>Delete</button>
            <button className = "edit buttonEdit" onClick = {()=> this.props.history.push(`/edit/${id}`)
            /*updateSelectedProduct({id, name, price, img})*/}>Edit</button>
            </div>
        )

    }
}

export default withRouter(Product)