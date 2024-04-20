
import { useState } from "react"
import axios from "axios"




const Axiosfetch = () => {
    
    const [form, setForm] = useState(
        {
            username: "",
            Password: "",
            
           
        }
    )
    // const [Error, setError] = useState(
    //     {
    //         NameError: null,
    //         EmailError: null,
    //         PasswordError: null,
    //         CpasswordError: null

    //     }
    // )



    const onChangeHandler =  (event) => {
        event.preventDefault()
        const { value, name } = event.target

        // console.log(value,name)

        setForm(prevState => ({
            ...prevState, [name]: value
        }))

        // switch (name) {
        //     case "Name":
        //         if (value.length > 5) {
        //             console.log(value)
        //             setError(pError => ({
        //                 ...pError, NameError: "User name is lengthy"
        //             }))
        //         }
        //         else {
        //             setError(prevError => ({
        //                 ...prevError, NameError: null
        //             }))
        //         }
        //         break;

        //     case "Password":
        //         if (value.length < 8) {
        //             setError(pError => ({
        //                 ...pError, PasswordError: "Password length is short"
        //             }))
        //         }
        //         else{
        //             setError(pError => ({
        //                 ...pError, PasswordError: null
        //             }))
        //         }
        //         break
        //         default:
        //             break
        // }
       



    }

    const submit=(e)=>{
        e.preventDefault()
        ApiHit()
        console.log(form);
    }

    const ApiHit= async()=>{
        
        const data={
            username:form.username,
            password:form.Password,
            expiresInMins: 30,
        }
        const  response= await axios.post("https://dummyjson.com/auth/login",data);
        const users=response.data
        console.log(users,response);
    }




    return (


        <>
            <h1>Axios fetch login</h1>
            <form onSubmit={submit} method="post">

                <div className="form">
                     
                    <div className="form-group">
                        <label htmlFor="" name>User Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="username" name="username" value={form.username} onChange={onChangeHandler} />
                    </div>
                    {/* <div><span style={{ color: "red" }}>{Error.NameError}</span></div> */}
                    
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Password" name="Password" value={form.Password} onChange={onChangeHandler} />                     
                    </div>
                    {/* <div><span style={{ color: "red" }}>{Error.PasswordError}</span></div> */}
                   


                    <div className="checkbox">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                    </div>

                    <button type="submit" className="btn btn-default">
                        Submit
                    </button>

                </div>

            </form>
        </>
    )
}

export { Axiosfetch }