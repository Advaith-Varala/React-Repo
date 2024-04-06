import { Component } from "react";
import axios from "axios"
import BorderExample from "./loader";
import './Axios.css'



class Products extends Component {
    state = {
        products: [],
        count:0
    }
    componentDidMount() {
        this.Data()
    }

    Data = async () => {
        const result = await axios.get('https://dummyjson.com/products')
        // console.log(result)

        const result1=result.data.products.map((val)=>{
            const data={...val, count:1}
            return data
        })
        this.setState(
            {
                products: result1
            }
        )

    }

    delete = (id) => {
        const a = this.state.products.filter((val) => {
            return val.id != id

        })
        this.setState({
            products: a
        })
    }

    update = (id) => {
        const a = this.state.products.map((val) => {
            if (val.id == id) {
                return ({
                    "id": 1,
                    "title": "iPhone 9",
                    "description": "An apple mobile which is nothing like apple",
                    "price": 549,
                    "discountPercentage": 12.96,
                    "rating": 4.69,
                    "stock": 94,
                    "brand": "Apple",
                    "category": "smartphones",
                    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                    "images": [
                        "https://cdn.dummyjson.com/product-images/1/1.jpg",
                        "https://cdn.dummyjson.com/product-images/1/2.jpg",
                        "https://cdn.dummyjson.com/product-images/1/3.jpg",
                        "https://cdn.dummyjson.com/product-images/1/4.jpg",
                        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
                    ]
                })
            }
            else {
                return val
            }

        })


        this.setState({
            products: a
        })
    }

    plus=(id)=>{
        let a=this.state.products.map((val)=>{
                if(val.id==id){
                    val.count+=1
                    return val
                }
                else{
                    return val
                }
        })
        this.setState({
            products:a
        })
        
    
    }

    minus=(id)=>{
        let a=this.state.products.map((val)=>{
                if(val.id==id){
                    if(val.count>0){
                        val.count-=1
                        
                        return val
                    }
                    else{
                        
                        return val
                    }
                    
                }
                else{
                    return val
                }
        })
        this.setState({
            products:a
        })
        
    
    }


    render() {
        console.log(this.state.products)
        return (
            <>
                <h4 style={{ textAlign: "center" }}>Product Listing</h4>
                {
                    this.state.products.length > 0
                        ?
                        <div className="products">
                            {
                                this.state.products.map((eachobject, index) => {
                                    const { id, title, description, thumbnail, price } = eachobject
                                    return (
                                        <>

                                            <div className="cards">
                                                <img src={thumbnail} width={200} height={200} alt={title} />
                                                <h4>{title}</h4>

                                                <p>Price : ${price}</p>
                                                <div className="btns">
                                                    <button onClick={() => this.update(eachobject.id)}>UPDATE</button>
                                                    <button onClick={() => this.delete(eachobject.id)}>DELETE</button>
                                                    <div style={{display:"flex",justifyContent:"space-around"}}>
                                                    <button onClick={()=>this.plus(eachobject.id)}><i class="fa-solid fa-plus"></i></button>

                                                    <p>{eachobject.count}</p>

                                                    <button onClick={()=>this.minus(eachobject.id)}><i class="fa-solid fa-minus"></i></button>
                                                    <p></p>
                                                </div>


                                                </div>
                                               

                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        :
                        <h1>CART IS EMPTY </h1>
                }

            </>
        )
    }
}

export { Products }