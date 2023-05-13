import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import './style.scss';
import "./search.css"
import Button2 from "../Button/Button2";

export default function NavBar() {
  const history = useHistory();
  const [open,setOpen] = useState(false);
  return (
        <div className="d-flex justify-content-between container-nav align-items-center">
          <div class={open?"dropOpen1":"drop1"}>
              {open&&
                  <>
                    <div class="backwrapper" onClick={()=>{setOpen(false)}}>
                      <Button2 onClick={()=>{setOpen(false)}}/>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg> */}
                    </div>
                    <div className="search-container">
                      <div className="d-flex input-wrapper">
                        <div className="input-line-animation__wrapper">
                          <input placeholder='Search' class="input-form input-line-animation__ip xxplaceholder"/>
                          <div class="input-line-animation__line"></div>
                        </div>
                      </div>
                    </div>
                  
                  </>
              }
        </div>
      <div className="logo" onClick={() => history.push('/')}>
        DARKHORSESTOCKS
      </div>
      
      <div className="icons d-flex justify-content-between align-items-center">
        <div className="icon search-icon content__item Social-item nav-link-wrapper" data-cursor="-menu -icon-blend">
          <div className="nav-link">
            <em className="nav-link-hover-wrapper">
              <span data-text="search" className="nav-link-hover" data-movement="0.2" onClick={()=>setOpen(true)}>
                Search
              </span>
              <div className="magnetic-wrap mobile-icon-menu">
            <div className="magnetic-area"></div>
              <span  className="nav-link-hover magnetic-content" data-movement="0.2">
  <span className='spanSvg'>
  </span>

              </span>
              </div>
            </em>
     
          </div>
        </div>
        <div className="icon user-icon content__item Social-item nav-link-wrapper" data-cursor="-menu -icon-blend">
          <Link to="/login" className="nav-link">
            <em className="nav-link-hover-wrapper">
              <span data-text="login" className="nav-link-hover" data-movement="0.2">
                login
              </span>
              <div className="magnetic-wrap mobile-icon-menu">
<div className="magnetic-area"></div>
  <span  className="nav-link-hover magnetic-content" data-movement="0.2">
<span className='spanSvg'>


</span>

  </span>
  </div>
            </em>
   
          </Link>
        </div>
        <div>
          <div className="icon user-icon content__item Social-item nav-link-wrapper" id="hamburgerMenuLabel" data-cursor="-menu -icon-blend">
            <div className="nav-link">
              <em className="nav-link-hover-wrapper">
                <span data-text="menu" className="nav-link-hover" data-movement="0.2">
                  menu
                </span>
              </em>
            </div>
          </div>
          <div></div>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}