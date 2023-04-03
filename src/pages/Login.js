import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {

    const [err, setErr] = useState(false);
    const navigate = useNavigate()
   
    const hanndelSumbit = async (e) =>{
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;
        


        try{

            await signInWithEmailAndPassword(auth, email, password);
            navigate('/')
        }
        catch(err){
            console.log(err, 'lỗi ở catch')
            setErr(true)
        }




    }

    return ( 
        <div className="container_section">
            <div className="form-register">
                <h2 className="title-form">Login</h2>
                <form onSubmit={hanndelSumbit}>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>

                    <button type="subimt">Sign in</button>
                    <p className='text-center'>or</p>
                    <button type="subimt">Login with Google</button>

                    <p className="text-center">You don't have an account? <Link to='/register'>Register</Link></p>
                    

                </form>
            </div>
     </div>
     );
}

export default Login;
