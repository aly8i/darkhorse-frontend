import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MenuLabel = styled.label`
  position: fixed;
  top: 24px;
  right: 1.1rem;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  z-index: 1000;
  text-align: center;

  @media screen and (max-width: 992px) {
    right: 0.1rem;
  }

  @media screen and (max-width: 700px) {
    width: 3rem;
    top: 17px;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;

  height: 6rem;
  /* width: 6rem; */
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? 'scale(80)' : 'scale(0)')};
  transition: transform 3s;
`;

const Icon = styled.div`
  position: relative;
  background-color: ${(props) => (props.clicked ? 'transparent' : 'transparent')};
  width: 2rem;
  /* height: 3px; */
  display: inline-block;
  /* margin-top: 3.5rem; */
  transition: all 0.3s;

  &::before,
  &::after {
    content: '';
    background-color: #fff;
    width: 30px;
    height: 3px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? '0' : '0.2rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }

  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.8rem')};

    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }

  ${MenuLabel}:hover &::before {
    /* top: ${(props) => (props.clicked ? '0' : '-1rem')}; */
  }
  ${MenuLabel}:hover &::after {
    /* top: ${(props) => (props.clicked ? '0' : '1rem')}; */
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? '50%' : '0')};
  opacity: ${(props) => (props.clicked ? '1' : '0')};
  display: flex;
  flex-direction: column;
  transition: width 0.8s, opacity 0.8s;
  background-color: #fff;
  transition: all 1s;

  @media screen and (max-width: 992px) {
    width: ${(props) => (props.clicked ? '80%' : '0')};
  }

  @media screen and (max-width: 700px) {
    width: ${(props) => (props.clicked ? '100%' : '0')};
  }
`;

const List = styled.ul`
  height: 1%;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  @media screen and (max-width: 700px) {
    text-align: left;
  }
`;

function HamburgerMenuFooter() {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  useEffect(() => {
    // const cursor = document.querySelector(".cursor");
    // document.addEventListener("mousemove", (e) => {
    //   // cursor.style.left = e.clientX + "px";
    //   // cursor.style.top = e.clientY + "px";
    // });
  }, []);

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon className={click ? 'menu-lable-transparent' : 'menu-lable'} clicked={click}>
          {' '}
        </Icon>
      </MenuLabel>
      <NavBackground clicked={click}></NavBackground>

      <Navigation clicked={click} className="x">
        <div className="d-flex list-nav">
          <List className="first-list">
            <div className="menu-color">Social</div>
            <li class="content__item Social-item">
              {' '}
              <a href="https://api.whatsapp.com/send?phone=917874999975">Whatsapp</a>
            </li>
            <li class="content__item Social-item">
              {' '}
              <a class="content__item Social-item" href="https://telegram.me/darkhorsestocks">
                Telegram
              </a>{' '}
            </li>
            <li class="content__item Social-item">
              {' '}
              <a href="https://www.instagram.com/darkhorse_stocks/">Instagram</a>{' '}
            </li>
            <li class="content__item Social-item">
              {' '}
              <a href="https://twitter.com/DARKHORSESTOCKS">Twitter</a>{' '}
            </li>
            <li class="content__item Social-item">
              {' '}
              <a href="https://www.getrevue.co/profile/darkhorsestocks/?ltclid=">Revue</a>{' '}
            </li>
            <li class="content__item Social-item">
              {' '}
              <a href="https://www.youtube.com/channel/UCKNoxoowoWYZEfKk8zIe8vQ/featured">Youtube</a>{' '}
            </li>
            <li class="content__item Social-item">
              {' '}
              <a href="">Quora</a>{' '}
            </li>
          </List>
          <List className="second-list">
            <div className="menu-color">Menu</div>
            <li
              class="content__item fw-bold menu-item"
              onClick={() => {
                history.push('/');
              }}
            >
              Home
            </li>
            <li
              class="content__item fw-bold menu-item"
              onClick={() => {
                history.push('/pricing');
              }}
            >
              Pricing
            </li>
            <li
              class="content__item fw-bold menu-item"
              onClick={() => {
                history.push('/subscriptions');
              }}
            >
              Subscribe
            </li>
            <li
              class="content__item fw-bold menu-item"
              onClick={() => {
                history.push('/philosophy-Page');
              }}
            >
              Philosophy
            </li>
            <li
              class="content__item fw-bold menu-item"
              onClick={() => {
                history.push('/categories');
              }}
            >
              Categories
            </li>
            <li
              class="content__item fw-bold menu-item"
              onClick={() => {
                history.push('/faq');
              }}
            >
              Faq’s
            </li>
          </List>
        </div>
        <div className="contact-menu">
          <h6 className="menu-color">Get in touch</h6>
          <p>support@darkhorsestocks.in</p>
        </div>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
