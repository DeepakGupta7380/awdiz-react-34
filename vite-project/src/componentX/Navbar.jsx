import React from "react";
import "../App.css";

function Navbar(){

return(

<div className="navbar">

<div className="logo">Deepak</div>

<div className="menu">
<a href="#">Men</a>
<a href="#">Women</a>
<a href="#">Kids</a>
<a href="#">Home</a>
</div>

<div className="auth">
<a href="#">Login</a>
<a href="#">Register</a>
<a href="#">Logout</a>
</div>

</div>

)

}

export default Navbar;