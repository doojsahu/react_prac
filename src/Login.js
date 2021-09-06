import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/Dashboard";

function App() {
    let history = useHistory();

    // const redirect = () => {
    //   history.push('/dashboard')
    // }

    const [inputs, setInputs] = useState({
        uid: "",
        pw: "",
    });
    const changeHandle = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const submitHanlder = (e) => {
        e.preventDefault();
        if (inputs.uid && inputs.pw != "") {
            console.log(inputs);
            history.push("/dashboard");
        }
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center mb-5 mt-5">Login</h3>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="username/id"
                            name="uid"
                            // value={loginId}
                            // onChange={(e) => {setLoginId(e.target.value)}}
                            value={inputs.name}
                            onChange={changeHandle}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password" name="pw" value={inputs.pw} onChange={changeHandle} />
                    </div>
                </div>
                {/* <button type="button" className="btn btn-primary" onClick={redirect}>Login</button> */}
                <button type="button" className="btn btn-primary" onClick={submitHanlder}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default App;
