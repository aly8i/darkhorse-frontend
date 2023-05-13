import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import HamburgerBar from "./HamburgerBar";

const MenuLabelWrapper = styled.div`

  width: 1.3rem;
  height: 2rem;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  top: 60px ;
  right:4% ;

  & > .magnetic-area {
    top: -1.5rem;
    left: -1.5rem;
    right: -1.5rem;
    bottom: -1.5rem;
  }

  .dark-mode &:hover > label > div::before,
  .dark-mode &:hover > label > div::after {
    background-color: black !important;
  }
  .light-mode &:hover > label > div::before,
  .light-mode &:hover > label > div::after {
    background-color: white !important;
  }

  @media screen and (max-width: 1200px) {
    
  }

  @media screen and (max-width: 700px) {
  
  }
`;

const MenuLabel = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: center;
`;

const NavBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;
  height: 100vh;
  opacity: ${(props) => (props.clicked ? 1 : 0)};
  pointer-events: ${(props) => (props.clicked ? "auto" : "none")};
  transition: opacity 650ms cubic-bezier(0.4, 0, 0.2, 1);

  .dark-mode & {
    background-color: rgba(255, 255, 255, 0.2);
  }
  .light-mode & {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;

  &::before,
  &::after {
    position: absolute;
    content: "";
    background-color: #fff;
    left: 0;
    width: 100%;
    height: 2.5px;
    transition: transform 0.3s;
  }

  .light-mode &::before,
  .light-mode &::after {
    background-color: #000;
  }

  &::before {
    top: 30%;
    transform: ${(props) =>
      props.clicked ? "translateY(6px) rotate(135deg)" : "rotate(0)"};
  }

  &::after {
    bottom: 30%;
    transform: ${(props) =>
      props.clicked ? "translateY(-6px) rotate(-135deg)" : "rotate(0)"};
  }

  @media screen and (max-width: 700px) {
    &::before,
    &::after {
      height: 2px;
    }
    &::before {
      transform: ${(props) =>
        props.clicked ? "translateY(5px) rotate(135deg)" : "rotate(0)"};
    }

    &::after {
      transform: ${(props) =>
        props.clicked ? "translateY(-5px) rotate(-135deg)" : "rotate(0)"};
    }
  }
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 100%;
  height: 100vh;
  z-index: 10;
  display: none;
  // visibility: hidden;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
  padding: 3rem 12rem 3rem 8rem;
  

  transform: translateX(0%);

  &.nav-open {
    --startTranslateX: 0%;
    --endTranslateX: -100%;
    animation: nav-open 650ms cubic-bezier(0.4, 0, 0.2, 1) forwards;

    & > * {
      --startTranslateX: -100%;
      --endTranslateX: 0%;
      animation: nav-open 650ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  }

  &.nav-close {
    --startTranslateX: -100%;
    --endTranslateX: 0%;
    animation: nav-close 650ms cubic-bezier(0.4, 0, 0.2, 1) forwards;

    & > * {
      --startTranslateX: 0%;
      --endTranslateX: -100%;
      animation: nav-close 650ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  }

  & > * {
    opacity: 0;
    transition: transform 650ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 650ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-100%);
  }

  & .vertical-center {
    flex: 1;
    display: flex;
    align-items: center;
    margin-top : 120px;
  }

  @media screen and (min-width: 1400px) {
    padding: 5rem 15rem 5rem 6rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 5rem 15rem 5rem 6rem;
  }
  @media screen and (max-width: 992px) {
    padding: 4rem 10rem 4rem 10rem;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 5rem 5rem 5rem 2.8rem;
    justify-content: center;

    & .vertical-center {
      flex: unset;
    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;

  & > .menu-color {
    margin-bottom: 1rem;
    font-size:24px;
    font-weight : 500;
  }

  @media screen and (max-width: 500px) {
    & > .menu-color {
      margin-bottom: 0.5rem;
    }
  }
`;

function HamburgerMenu() {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const navStickyRef = useRef(null);

  // 1st method
  // useEffect(() => {
  //   let timeoutId = null;

  //   if (click === true) {
  //     navStickyRef.current.style.display = "flex";
  //   } else if (click === false) {
  //     navStickyRef.current.style.display = "flex";
  //     timeoutId = setTimeout(() => {
  //       navStickyRef.current.style.display = "none";
  //     }, 400);
  //   }

  //   return () => clearTimeout(timeoutId);
  // }, [click]);

  // 2nd method
  // useEffect(() => {
  //   let timeoutId = null;

  //   if (click === true) {
  //     navStickyRef.current.style.display = "flex";
  //   } else if (click === false) {
  //     timeoutId = setTimeout(() => {
  //       navStickyRef.current.style.display = "none";
  //     }, 400);
  //   }

  //   return () => clearTimeout(timeoutId);
  // }, [click]);

  // 3rd method
  const [isNavStickyVisible, setNavStickyVisible] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    if (click) setNavStickyVisible(true);
    else timeoutId = setTimeout(() => setNavStickyVisible(false), 400);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [click]);

  return (
    <>
      <MenuLabelWrapper
        data-cursor="-menu"
        id="menuLabelWrapper"
        className={classNames('menuLabelWrapper', {'menuOpen': click, 'magnetic-wrap menuClose': !click, })}
        clicked={click}
        onClick={handleClick}
      >
        <div className="magnetic-area"></div>
        <MenuLabel
          id="stickyElem"
          className="magnetic-content"
          htmlFor="navi-toggle"
          data-movement="0.3"
        >
          <HamburgerBar clicked={click}></HamburgerBar>
        </MenuLabel>
      </MenuLabelWrapper>

      <NavBackdrop
        id="navBackdropSticky"
        clicked={click}
        onClick={()=>handleClick(false)}
      ></NavBackdrop>

      <Navigation
        id="navSticky"
        clicked={click}
        className={click ? "x nav-open" : "x nav-close"}
        // ref={navStickyRef}
        style={{ display: isNavStickyVisible ? "flex" : "none" }}
      >
        <div className="vertical-center">
          <div className="d-flex list-nav">
            <List className="first-list">
              <div className="menu-color">Social</div>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <a href="https://api.whatsapp.com/send?phone=917874999975">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Whatsapp"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Whatsapp
                      </span>
                    </em>
                  </span>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <a href="https://telegram.me/darkhorsestocks">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Telegram"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Telegram
                      </span>
                    </em>
                  </span>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <a href="https://www.instagram.com/darkhorse_stocks/">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Instagram"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Instagram
                      </span>
                    </em>
                  </span>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <a href="https://twitter.com/DARKHORSESTOCKS">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Twitter"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Twitter
                      </span>
                    </em>
                  </span>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <a href="https://www.getrevue.co/profile/darkhorsestocks/?ltclid=">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Revue"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Revue
                      </span>
                    </em>
                  </span>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <a href="https://www.youtube.com/channel/UCKNoxoowoWYZEfKk8zIe8vQ/featured">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Youtube"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Youtube
                      </span>
                    </em>
                  </span>
                </a>
              </li>
              <li
                className="content__item Social-item magnetic-wrap nav-link-wrapper"
                data-cursor="-opaque"
              >
                <a href="https://www.youtube.com/channel/UCKNoxoowoWYZEfKk8zIe8vQ/featured">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Quora"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Quora
                      </span>
                    </em>
                  </span>
                </a>
              </li>
            </List>
            <List className="second-list">
              <div className="menu-color">Menu</div>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <Link to="/">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Home"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Home
                      </span>
                    </em>
                  </span>
                </Link>
              </li>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <Link to="/pricing">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Pricing"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Pricing
                      </span>
                    </em>
                  </span>
                </Link>
              </li>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <Link to="/subscriptions">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Subscribe"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Subscribe
                      </span>
                    </em>
                  </span>
                </Link>
              </li>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <Link to="/philosophy-Page">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Philosophy"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Philosophy
                      </span>
                    </em>
                  </span>
                </Link>
              </li>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <Link to="/categories">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Categories"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Categories
                      </span>
                    </em>
                  </span>
                </Link>
              </li>
              <li
                className="content__item fw-bold magnetic-wrap menu-item nav-link-wrapper"
                data-cursor="-opaque"
              >
                <Link to="/faq">
                  <div className="magnetic-area"></div>
                  <span
                    className="nav-link magnetic-content"
                  >
                    <em className="nav-link-hover-wrapper">
                      <span
                        data-text="Faq's"
                        className="nav-link-hover"
                        data-movement="0.2"
                      >
                        Faq's
                      </span>
                    </em>
                  </span>
                </Link>
              </li>
            </List>
          </div>
        </div>
        <div className="contact-menu">
          <h6 className="menu-color">Get in touch</h6>
          <p className="line-animation-1">support@darkhorsestocks.in</p>
        </div>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
