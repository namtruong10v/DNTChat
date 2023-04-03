import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db} from "../firebase";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc, setDoc } from "firebase/firestore";

import Add from '../assets/images/addAvart.png';
import {useNavigate, Link } from 'react-router-dom';



function Register() {
    const [err, setErr] = useState(false);
    const navigate = useNavigate()
   
    const hanndelSumbit = async (e) =>{
        e.preventDefault();

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


        try{
            const res =  await createUserWithEmailAndPassword(auth, email, password);
            console.log(res,'sdasdasdadsdas')
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
            
            (error) => {
                setErr(true)
            }, 
            () => {
               
                getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                    await updateProfile(res.user,{
                        displayName,
                        photoURL:downloadURL
                    });
                    await setDoc(doc(db,"users", res.user.uid),{
                        uid: res.user.uid,
                        displayName,
                        email,
                        photoURL:downloadURL,
                    });
                    await setDoc(doc(db,"userChats", res.user.uid),{});
                    navigate('/')
                });
            }
            );

          
            
        }
        catch(err){
            console.log(err, 'lỗi ở catch')
            setErr(true)
        }




    }

    return ( 
       <div className="container_section">
          <div className="form-register">
              <h2 className="title-form">Register</h2>
              <form onSubmit={hanndelSumbit}>
                  <input required type="text" placeholder="Display Name"/>
                  <input required  type="email" placeholder="Email"/>
                  <input required  type="password" placeholder="Password"/>
                  <label htmlFor='avartar_change'>
                      <img src={Add}  />
                      <span>Add an Avartar</span>
                  </label>
                  <input  style={{display:"none"}} id='avartar_change' type="file"/>

                  <button type="submit" >Register</button>
                  {/* <p className='text-center'>or</p>
                  <button type='button' >Login with Google</button> */}
                  {err && <span>Somthing went wrong</span>}

                  <p>Do you already have an account? <Link to='/login' >Log in now</Link></p>
                  

              </form>
          </div>
       </div>
     );
}

export default Register;