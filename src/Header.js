import React from "react"
import { LuListTodo } from "react-icons/lu";


const Header = ({title}) => {
    
    return (        
        <header><h3><LuListTodo /> {title}</h3></header>      
    )
}


export default Header
