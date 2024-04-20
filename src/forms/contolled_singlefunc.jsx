import { useState } from "react"




const ControlledState = () => {

    const [form, setForm] = useState(
        {
            Name: null,
            Email: null,
            Password: null,
            Cpassword: null
        }
    )
    const [Error, setError] = useState(
        {
            NameError: null,
            EmailError: null,
            PasswordError: null,
            CpasswordError: null

        }
    )



    const onChangeHandler = (event) => {

        const { value, name } = event.target

        // console.log(value,name)

        setForm(prevState => ({
            ...prevState, [name]: value
        }))

        switch (name) {
            case "Name":
                if (value.length > 5) {
                    console.log(value)
                    setError(pError => ({
                        ...pError, NameError: "User name is lengthy"
                    }))
                }
                else {
                    setError(prevError => ({
                        ...prevError, NameError: null
                    }))
                }
                break;

            case "Password":
                if (value.length < 8) {
                    setError(pError => ({
                        ...pError, PasswordError: "Password length is short"
                    }))
                }
                else{
                    setError(pError => ({
                        ...pError, PasswordError: null
                    }))
                }
                break
                default:
                    break
        }



    }




    return (


        <>
            <h1>Controlled forms Single function</h1>
            <form>

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="" name>User Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" name="Name" value={form.Name} onChange={onChangeHandler} />
                    </div>
                    <div><span style={{ color: "red" }}>{Error.NameError}</span></div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" name="Email" value={form.Email} onChange={onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Password" name="Password" value={form.Password} onChange={onChangeHandler} />                     
                    </div>
                    <div><span style={{ color: "red" }}>{Error.PasswordError}</span></div>
                    <div className="form-group">
                        <label htmlFor="cpwd">confirm Password:</label>

                        <input type="password" className="form-control" id="cpwd" placeholder="confirm Password" name="Cpassword" value={form.Cpassword} onChange={onChangeHandler} />

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
        </>
    )
}

export { ControlledState }