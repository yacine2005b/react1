import React from "react"
export default function Star() {

    const[yacine,yacinoo]=React.useState(true)
    function changeColor() {
      yacinoo((prev)=>(!prev))
    } 

    return <span>
 <i style={{color : yacine ? '' :'gold'} } className ="fa-solid fa-star"  onClick={changeColor}></i>
    </span>
     
    
}