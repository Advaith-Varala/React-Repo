import { Component } from "react";
import axios from "axios"

class Products extends Component{
    componentDidMount(){
        this.Data()
    }
   
    Data=async ()=>
    {
        const result=await axios.get('https://dummyjson.com/products')
        console.log(result)
    }
   
    
    render(){
         
        return(
           <h1>{this.fetchdata}</h1>
        )
    }
}

export {Products}