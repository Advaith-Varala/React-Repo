import { useRef, useState } from "react"




const UncontrolledInput = () => {
    const email = useRef("")
    const password = useRef("")
    const [error, seterror] = useState(false)
    const [val, setVal] = useState([])


    const handlesubmit = (event) => {
        event.preventDefault()
        console.log("submited")
        const userName = email.current.value
        const pswd = password.current.value


        console.log({ userName, pswd });
        if (userName.length == 0 || pswd.length == 0) {

            seterror(true)

        }
        else {
            const values = {
                uname: userName,
                pwd: pswd
            }

            console.log(values)
            if(!val.includes(values.uname)){
                setVal([...val, values])
            }
            
            // email.current.value=""
            // password.current.value=""


            seterror(false)
        }
    }

    return (
        <>

            <form onSubmit={handlesubmit} action="/action_page.php">
                <div className="form">
                    <div class="form-group">
                        <label htmlFor="email"><b>Email:</b></label>
                        <section>
                            <input type="email" class="form-control" id="email" placeholder="Email" name="email" ref={email} />
                        </section>

                    </div>
                    <div class="form-group">
                        <label htmlFor="pwd"><b>Password:</b></label>
                        <section>
                            <input type="password" class="form-control" id="pwd" placeholder="Password" name="pwd" ref={password} />
                        </section>

                    </div>
                    {error && <span style={{ color: "red" }}>user name and password must be filled</span>}
                    <div class="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>
                    {

                    }
                    <button type="submit" class="btn btn-default">Submit</button>
                </div>

            </form>
            <div className="table">
                <table >
                    <tr>
                        <th>SI.NO</th>
                        <th>Email</th>
                        <th>Password</th>

                    </tr>
                    {console.log("this is val console",val)}
                    {
                        
                        val.length != 0 && val.map((a, index) => (
                            


                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{a.uname}</td>
                                <td>{a.pwd}</td>
                            </tr>
                        ))
                        

                    }

                </table>
            </div>

        </>

    )
}

export { UncontrolledInput }