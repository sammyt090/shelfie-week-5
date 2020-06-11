import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'



export default class Form extends Component{
    constructor(){
        super()


        this.state={
          name: '',
          price: 0,
          img: '',
            editProductId: null
        }

        this.updateProduct= this.updateProduct.bind(this)
        this.createNew= this.createNew.bind(this)
        
    }

    // componentDidUpdate(prevProps){
    //     // console.log(`Old product id is ${prevProps.selectedProduct.id} and new id is ${this.props.selectedProduct.id}`)
    //     if (prevProps.selectedProduct.id !== this.props.selectedProduct.id) {
    //         // console.log("new product selected")
    //         this.setState({
    //             editProductId: this.props.selectedProduct.id,
    //             name: this.props.selectedProduct.name,
    //             price: this.props.selectedProduct.price,
    //             img: this.props.selectedProduct.img
               
                
    //         })
    //     }
    // }

    
    componentDidMount() {
       if( this.props.location.pathname.includes(`/edit`)){
        axios.get(`/api/inventory/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({
                name: res.data[0].name,
                price: res.data[0].price,
                img: res.data[0].img,
                editProductId : res.data[0].id

            })
        })}
    }
    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    resetText(event) {
           this.props.history.push('/')
        this.setState({
            name: '',
            price: 0,
            img: '',
            editProductId: null
            
        })
    }

    createNew(){
        const {name, price, img} = this.state
        // console.log(body)
        axios.post('/api/inventory', {name, price, img}).then(()=> {
            
            
            this.resetText()
            this.props.history.push('/')
        
        })
        
    }

    updateProduct(){
        const {name, price, img, editProductId} =this.state
        axios.put(`/api/inventory/${editProductId}`, {name, price, img})
        .then(()=> {
            // this.props.getProducts()
            this.resetText()
         
        })
        .catch(err => console.log(err))
    }

    // componentDidUpdate(prevProps, prevState){
    //     if (prevProps.)
    // }

    render(){
        return(
            <div className = 'input-box'>
                <div className = "inside">
                <input value = {this.state.name} onChange = {(event) => this.handleChange(event)} placeholder="Name" name= "name"/>
                <input value = {this.state.price} onChange = {(event) => this.handleChange(event)} placeholder="Price" name= "price"/>
                <input value = {this.state.img} onChange = {(event) => this.handleChange(event)} placeholder="Image" name= "img"/>
                <button onClick = {(event) => this.resetText(event)} >Cancel</button>
                {/* <button onClick ={this.state.editProductId ? this.updateProduct : this.createNew()}>
                    {this.state.editProductId ? 'Save Changes' : 'Add to Inventory'}</button> */}

                {this.props.location.pathname.includes(`/edit`) ? (
                    <button onClick={this.updateProduct}>Save Changes</button>
                ) : (
                    <button onClick={this.createNew}>Add to Inventory</button>
                )}
                </div>
            </div>
        )
    }
}

