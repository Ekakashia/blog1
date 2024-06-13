import React, {useState} from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";


function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signup = () => {
        navigate('/registration');
    }

    function login(event){
        event.preventDefault();

        axios.post("https://apitest.reachstar.io/signin", {
            email: email,
            password : password
        }).then(function(response) {

            navigate("/Main");

        }).catch(function(error) {
            window.alert("შეცდომა");
        });
       
    }

    return(

        <React.Fragment>
             <body>
           <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 mt-5">
                  <form method="POST"  onSubmit={(event => login(event))}>
                    <label htmlFor ="email" style={{display: "block"}}>ელ ფოსტა</label>
                    <input type="email" className="mt-2" placeholder="ელ ფოსტა" onChange={(event) => setEmail(event.target.value)}></input><br /><br />

                    <label htmlFor ="password" style={{display: "block"}}>პაროლი</label>
                    <input type="password" className="mt-2" placeholder="პაროლი" onChange={(event) => setPassword(event.target.value)}></input><br /><br />

                    
                   <div className="form-group">
                    <input type="submit" className="btn btn primary bg-success " value="ავტორიზაცია"></input>
                   </div>
                   </form>
                </div>
             </div>
             <div className="row justify-content-center">
                    <div className="col-2">
                   
                   <p className="mt-4">არ გაქვთ ანგარიში?</p>
                  
                  </div>
                  <div className="col-3 mt-3">
                  <input type="submit" className="btn btn primary bg-danger" onClick={signup} value="დააჭირეთ აქ"></input>
                  </div>
                </div>
           </div>
           </body>
        </React.Fragment> 
    
    
       )
}

export default Login;
