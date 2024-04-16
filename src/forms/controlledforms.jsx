import { useState } from "react"




const ControlledForms = () => {

    const [Name, setname] = useState("")
    const [email, setemail] = useState("")
    const [pswd, setpswd] = useState("")
    const [cpswd, setcpswd] = useState("")
    const [error, seterror] = useState(false)
    const [users,setUsers]=useState([])

    var pd = null
    const NameSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value);
        const name = event.target.value
        setname(name)
        

    }

    const MailSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value);
        const mail = event.target.value
        setemail(mail)
    }

    const PasswordSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value);
        const password = event.target.value
        
        setpswd(password)

    }

    const CpasswordSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value);
        const cpassword = event.target.value

        setcpswd(cpassword)

    }

    const onsubmit=(event)=>{
        event.preventDefault()

        if(cpswd!=pswd){
            seterror(true)
        }
        else{
            seterror(false)
            const userData={
                name:Name,
                email:email,
                password:pswd,
            }
            setUsers([...users,userData])
            
        }

    }


    return (

        <>
            <h1>Controlled forms</h1>
            <form onSubmit={onsubmit}>

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="" name>Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={Name} onChange={NameSubmit} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" name="email" value={email} onChange={MailSubmit} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Password" name="pwd" value={pswd} onChange={PasswordSubmit} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpwd">confirm Password:</label>
                        
                        <input type="password" className="form-control" id="cpwd" placeholder="confirm Password"  name="cpwd" value={cpswd} onChange={CpasswordSubmit} />
                        {error && <div><span style={{ color: "red" }}>password  do not match</span></div>}
                    </div>


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


            <table>
                <thead>
                <tr>
                    <th>SI.NO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                </thead>
              <tbody>
                    
                {
                    users && users.map((user,index)=>(
                        
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    )

                       
                    
                        
                    )
                }
              </tbody>




            </table>

        </>
    )
}


export { ControlledForms }