import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();

        axios.post("https://apitest.reachstar.io/signup", {
            name: name,
            email: email,
            password: password

        }).then(function (response) {

            navigate("/");

        }).catch(function (error) {
            setError("Registration failed. Please try again.");
        });

    }

    return (

        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-3 mt-5">
                        <form onSubmit={(event) => login(event)}>

                            <label htmlFor="name" style={{ display: "block" }}>სახელი</label>
                            <input type="text" className="mt-2 border border-rounded" placeholder="სახელი" onChange={(event) => setName(event.target.value)}></input><br /><br />
                            <label htmlFor="email" style={{ display: "block" }}>ელ ფოსტა</label>
                            <input type="email" className="mt-2" placeholder="ელ ფოსტა" onChange={(event) => setEmail(event.target.value)}></input><br /><br />

                            <label htmlFor="password" style={{ display: "block" }}>პაროლი</label>
                            <input type="password" className="mt-2" placeholder="პაროლი" onChange={(event) => setPassword(event.target.value)}></input><br /><br />

                            <div className="form-group">
                                <input type="submit" className="btn btn primary bg-success " value="რეგისტრაცია"></input>
                            </div>
                            {error && <div className="alert alert-danger">{error}</div>}
                        </form>
                    </div>
                    <p className="mt-5 pt-5 text-center">2024</p>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Registration;
