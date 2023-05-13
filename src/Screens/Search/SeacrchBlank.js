import React from 'react'
import { useHistory } from 'react-router-dom';

export default function SearchBlank() {
    const history = useHistory();
  return (
  
    <div className='container' onClick={()=> {
        history.push("/search-something");
        window.location.reload();
    }}>
          <div className='mt-header fs-95 outlined'>Search</div>
    </div>
  )
}
