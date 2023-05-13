import React, { useState } from 'react'
import "./AnimationsStyles.css"
import Animation1 from "./Animation1/Animation1"
import Animation2 from "./Animation2/Animation2"
import Animation3 from "./Animation3/Animation3"
import Animation4 from "./Animation4/Animation4"
import Animation5 from "./Animation5/Animation5"
import Animation6 from "./Animation6/Animation6"
import Animation7 from "./Animation7/Animation7"
import Animation8 from "./Animation8/Animation8"
const AnimationsComponent = () => {
  const [component,setComponent] = useState(1);
  const renderAnimation = () =>{
    switch (component) {
      case 1:
        return <Animation1/>;
      case 2:
        return <Animation2/>;
      case 3:
        return <Animation3/>;
      case 4:
        return <Animation4/>;
      case 5:
        return <Animation5/>;
      case 6:
        return <Animation6/>;
      case 7:
        return <Animation7/>;
      case 8:
        return <Animation8/>;
      default:
        return <Animation1/>;
    }
  }
  return (
    <div class="wrapper">
        <div class="dropdown">
          <button class="dropdown-btn">Select an Animation</button>
          <ul class="dropdown-menu">
            <li onClick={()=>setComponent(1)}><p>1</p></li>
            <li onClick={()=>setComponent(2)}><p>2</p></li>
            <li onClick={()=>setComponent(3)}><p>3</p></li>
            <li onClick={()=>setComponent(4)}><p>4</p></li>
            <li onClick={()=>setComponent(5)}><p>5</p></li>
            <li onClick={()=>setComponent(6)}><p>6</p></li>
            <li onClick={()=>setComponent(7)}><p>7</p></li>
            <li onClick={()=>setComponent(8)}><p>8</p></li>
          </ul>
        </div>
        {renderAnimation()}
        
    </div>
  )
}

export default AnimationsComponent