import React, { useState } from 'react';

function Simplelogin() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleName(event) {
        setName(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        alert("Login Successful\nEmail: " + email);
    }


    function clearName() {
        setName("");
    }


    return (
        <div>
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name:</label><br />
                    <input type="name" placeholder="Enter Name" value={name}
                        onChange={handleName} />



                </div>

                <div>
                    <label>Email:</label><br />
                    <input type="email" placeholder="Enter Email" value={email}
                        onChange={handleEmail} />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <input type="password" placeholder='Enter Password' value={password}
                        onChange={handlePassword} />
                </div>

                <br />

                <button type="submit">
                    Login
                </button>

                <button onClick={clearName}>Clear Name</button>
            </form>
        </div>
    );
}

export default Simplelogin;