import React from "react";

const today = new Date();
const year = today.getFullYear();
let cssss = {
    textDecoration:"none"

};
const Footer =()=> {
    return (
        <footer>
            <p>copyright {year}</p>
            
            <p><a href="https://www.timeanddate.com/moon/phases/" style={cssss}>🌙</a></p>
        </footer>
    );
    
}

export default Footer ;