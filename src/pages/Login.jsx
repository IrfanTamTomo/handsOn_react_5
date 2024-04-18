import axios from "axios"
import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [notif, setNotif] = useState("")
    const navigate = useNavigate()

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
        console.log("Username: ",username)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        console.log("Password: ",password)
    }

    const handleLogin = () =>{
        const payload = {
            username: username,
            password: password
        }

        axios
        .post("https://api.mudoapi.tech/login", payload)
        .then((res) => {
            console.log(res.data)
            const token = res?.data?.data?.token
            localStorage.setItem("access_token", token)
            if(token){
                setNotif(res.data.message)
                // setTimeout(
                //     () => {
                //         navigate("/menu")
                //     }, 800
                // )
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleBack = () => {
        navigate("/")
    }
    return (
        <div>
            <header>
            <h1>Login</h1>
            </header>
            <button onClick={handleBack}>Back</button>
          {
                !!notif.length && <p>{notif}</p>
            }
            <div className="login-form">
                <input 
                    type="text" 
                    placeholder="Username" 
                    onChange={handleUsernameChange}
                    value={username}/>
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={handlePasswordChange}
                    value={password}/>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login