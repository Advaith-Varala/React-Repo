import { Component } from "react";
import Image1 from "../Image1.jpg"
import Image2 from "../Image2.jpg"
import Image3 from "../Image3.jpg"
import ferrari from "./ffrr.webp"
let a=[Image1,Image2,Image3]
class FruitsState extends Component{
     

    state={
       
        source:[Image1,Image2,Image3]
      
        
    }
    addimage=()=>{

        this.setState(
            {
                source:[...this.state.source,ferrari]
            }
        )
        
        
    }
    deleteimage=()=>{

        const image=[...this.state.source]
        image.pop()
        this.setState(
            {
                source:image
            }
        )
    }
    resetimage=()=>{
        this.setState(
            {
                source:a
            }
        )
    }
    
     
    render(){
        return(
            <>
            {
                this.state.source.map((image)=>{
                  
                    return(
                    <img src={image} alt="image" width={200} heigth={200}/>)
                })
            }
            
          
            <button onClick={this.addimage}>Add IMAGE</button>
            <button onClick={this.deleteimage}>DELETE IMAGE</button>   
            <button onClick={this.resetimage}>RESET</button>

            

            

          
            </>
            
        )
    }
}

class Fruits extends Component{
    state={
        fruits:["banana","apple","cherry"]
    }
    addfruit=()=>{
       const newfruit= [...this.state.fruits,"Mango"]
       this.setState({
            fruits:newfruit
       })
    }
    deletefruit=(index)=>{
        const newfruits=this.state.fruits.filter((eachfruit,i)=>i!==index)
        this.setState(
        {
            fruits:newfruits
        }
        )
        console.log(newfruits);
    }
    updatefruit=(index)=>{
        const newfruits=this.state.fruits.map((eachfruit,i)=>{
            if(i==index){
                return "Grapes"
            }
            else{
                return eachfruit
            }
        })
        this.setState(
            {
                fruits:newfruits 
            }
        )
        console.log(newfruits);
        
    }
    render(){
            
            return(
            <ol>
                
                <button onClick={this.addfruit}>Add Fruit</button>
                
                    {
                        this.state.fruits.map((item,index)=>{
                            return(
                                <>
                                    <li>{item}</li>
                                    <button onClick={()=>this.deletefruit(index)}>Delete</button>
                                    
                                    <button onClick={()=>this.updatefruit(index)}>Update</button>
                                </>
                            )
                        })
                    }
                
                
                
                
            </ol>
        )
        
        
    }
}


export  {FruitsState,Fruits}