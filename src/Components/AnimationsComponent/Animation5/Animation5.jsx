import React from 'react'
import "./Animation5.css"
import { useState } from 'react';
const Animation5 = () => {
    const [open,setOpen] = useState(false);
  return (
    <div class="wrapper">
        {
            !open&&
            <div class="search" onClick={()=>setOpen(true)}>
                <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="white"></path> </svg> 
            </div>   
        }
        <div class={open?"dropOpen":"drop"}>
            {open&&
                <>
                    <div class="back" onClick={()=>{setOpen(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg>
                    </div>
                    <input class={open?"search-input":"search-input"}/>
                </>
            }
        </div>
        
    </div>
  )
}

export default Animation5