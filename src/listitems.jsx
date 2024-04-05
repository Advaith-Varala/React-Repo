import Listcomponents from "./listcomponent"

const Listitems=()=>{
    
        const components=[{
        name:"apple",
        type:"fruit1"
    },
    {
        name:"banana",
        type:"fruit2"
    },
    {
        name:"mango",
        type:"fruit3"
    },
    {
        name:"grapes",
        type:"fruit4"
    }] 
    
    return(
           <>
           {
            components.map((val)=>{
                return (<Listcomponents name={val.name}/>)
            })
           }
           </>
           
    )
    
    
}

export default Listitems