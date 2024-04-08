import { useState } from "react"




const Fruits=()=>{
    const a=["BANANA","APPLE","MANGO"]
    const [fruitcount,setfruit]=useState(["BANANA","APPLE","MANGO"])
   const originalarry=fruitcount
    const addfruit=()=>{
        const newarr=[...fruitcount,"GRAPES"]
        setfruit(newarr)
    }
    const deletefruit=()=>{
        const newarr=[...fruitcount]

        newarr.pop()
        setfruit(newarr)
        

    }
    const updatefruit = (index) => {
        let newarr = [...fruitcount];
        newarr = newarr.map((val, i) => {
            if (index === i) {
                return "kiwi";
            } else {
                return val;
            }
        });
        setfruit(newarr);
    };
    
    const reset = () => {
        // const newarr=[...fruitcount]
        console.log(originalarry)
        setfruit(a);
    };

    return(
        <>
            <button onClick={addfruit}>ADD FRUIT</button>
            <button onClick={deletefruit}>DELETE LAST FRUIT</button>
            <button onClick={reset}>RESET</button>
            {
                    fruitcount.map((val,index)=>{

                        return <>
                                   <h3 key={index}>{val}</h3>
                                    <button onClick={()=>updatefruit(index)}>UPDATE FRUIS</button>
                                    {/* it will go into infinite loop if we wont pass this function ()=>updatefruit(index) , 
                                    because it will call
                                    every time for every index , but by putting this function it will call that 
                                    function when it is clicked only*/}
                        </>
                     
                    })

                    
                }
        </>
        
    )
}


export {Fruits}