import React, { Fragment } from "react";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
     
  

     return(

    
      
      <React.Fragment>

         <header className="position-relative">
           <navbar className="navbar navbar-expand-lg navbari">
                <Link to = {"/"} className="Navbar-brand a p-5">Login</Link>
                <Link to = {"/Registration"} className="a p-5">Registration </Link>
                <Link to = {"/Main"} className="a p-5">Home</Link>
                <Link to = {"/addblog"} className="a p-5">AddBlog</Link>
            </navbar >

         </header>
           
        </React.Fragment>

    )

}
 export default Navbar;