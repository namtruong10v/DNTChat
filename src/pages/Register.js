
function Register() {
    return ( 
       <div className="container">
          <div className="form-register">
              <h2 className="title-form">Register</h2>
              <form>
                  <input type="text" placeholder="Display Name"/>
                  <input type="email" placeholder="Email"/>
                  <input type="passworld" placeholder="Passworld"/>
                  <button type="subimt">Register</button>
                  <p>Do you already have an account? Log in now</p>
                  

              </form>
          </div>
       </div>
     );
}

export default Register;