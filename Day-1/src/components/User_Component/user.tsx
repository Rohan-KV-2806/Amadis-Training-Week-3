import { useState } from "react";

function User(){
    const [Uname, setUname] = useState("");
    let [LoggedUname, setLoggedUname] = useState("Enter a user");
    function Login(){
        if(Uname == "ROhan"){
            setLoggedUname("Welcome " + Uname)
        }else{
            setLoggedUname("wrong user")
        }
    }
    return (
        <div>
        <input
            type="text"
            value={Uname}
            onChange={(e) => setUname(e.target.value)}
        />

        <button onClick={Login}>
            Login
        </button>

        <h1>{LoggedUname}</h1>

        </div>
    );
}

export default User;