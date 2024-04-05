import Data from "./prop_data"
import { Tablerow } from "./tr"


const Tablecomponenet=()=>{

    return(
        <table style={{border:"1px solid black"}}>
            <tr style={{border:"1px solid black"}}>
                <th style={{border:"1px solid black"}}>Name</th>
                <th style={{border:"1px solid black"}}>Country</th>
                <th style={{border:"1px solid black"}}>State</th>
            </tr >
            <tr style={{border:"1px solid black"}}>
                {
                    Data.map((val)=>{
                        return(
                           <Tablerow items={val}/>
                        )
                    })
                }
            </tr>
        </table>
    )
}

export default Tablecomponenet