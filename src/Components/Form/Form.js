import React, { Component } from 'react'
import axios from 'axios'



export default class Form extends Component{
    constructor(){
        super()


        this.state={
            img:"",
            name: '',
            price: ''
        }
        
    }

    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    resetText(event) {
        this.setState({
            name: '',
            price: '',
            img: ''
            
        })
    }

    createNew(name, price, img){
        const body = {name, price, img}
        console.log(body)
        axios.post('/api/inventory', body).then((res)=> {
            this.resetText()
            this.props.getProducts()
        
        })
        
    }

    render(){
        return(
            <div>
                <input value = {this.state.img} onChange = {(event) => this.handleChange(event)} placeholder="Photo url" name= "img"/>
                <input value = {this.state.name} onChange = {(event) => this.handleChange(event)} placeholder="Name" name= "name"/>
                <input value = {this.state.price} onChange = {(event) => this.handleChange(event)} placeholder="Price" name= "price"/>
                <button onClick = {(event) => this.resetText(event)} >Cancel</button>
                <button onClick = {() => this.createNew(this.state.name, this.state.price, this.state.img)}>Add to Inventory</button>
            </div>
        )
    }
}

