import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import Loading from "./Components/Loading/Loading"
import MouseFollower from 'mouse-follower';
import gsap from 'gsap';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Provider } from 'react-redux';
import store from './store/index';
import 'antd/dist/antd.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Registering ScrollTrigger for smooth scrolling
gsap.registerPlugin(ScrollTrigger);

// Plugin to stop scrolling when the modal is open

class ModalPlugin extends ScrollbarPlugin {
  static pluginName = 'modal';

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

Scrollbar.use(ModalPlugin /* OverscrollPlugin */);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Registering GSAP for MouseFollower & initializing it
MouseFollower.registerGSAP(gsap);
window.addEventListener('load', () => {
  const cubertoCursor = new MouseFollower({
    container: '#container-wrapper',
    stickDelta: 0,
  });

  // Smooth-scrollbar initialization
  // 3rd party library setup:
  const scrollbar = Scrollbar.init(document.querySelector('.dummy'), {
    damping: 0.25,
    delegateTo: document,
  });

  // when the smooth scroller updates, tell ScrollTrigger to update() too:
  scrollbar?.addListener(ScrollTrigger.update);

  const fixedElem1 = document.querySelector('#navSticky');
  const fixedElem2 = document.querySelector('.mf-cursor');
  const fixedElem3 = document.querySelector('.menuLabelWrapper');
  const fixedElem4 = document.querySelector('#navBackdropSticky');

  scrollbar?.addListener(function (status) {
    const offset = status.offset;

    fixedElem1.style.top = offset.y + 'px';
    fixedElem2.style.top = offset.y + 'px';
    fixedElem2.style.left = offset.x + 'px';
    fixedElem3.style.top = `${offset.y + 60}px`;
    fixedElem4.style.top = offset.y + 'px';
  });

  // Button hover animation

  /*
  const buttonAnimationElems = document.querySelectorAll('.button-animation-1');
  buttonAnimationElems.forEach((buttonAnimation) => {
    const magneticArea = buttonAnimation.querySelector('.magnetic-area');
    const btnAnimate = buttonAnimation.querySelector('.btn-animate');
    magneticArea.addEventListener('mouseenter', () => {
      btnAnimate.classList.add('active');
      btnAnimate.classList.remove('not-active');
    });
    magneticArea.addEventListener('mouseleave', () => {
      btnAnimate.classList.remove('active');
      btnAnimate.classList.add('not-active');
    });
  });
  */
  /*
  document.getElementById('navBackdropSticky').addEventListener('click',()=>{
    const buttonAnimationElems = document.querySelectorAll('.button-animation-1');
    buttonAnimationElems.forEach((buttonAnimation) => {
      const magneticArea = buttonAnimation.querySelector('.magnetic-area');
      const btnAnimate = buttonAnimation.querySelector('.btn-animate');
      magneticArea.addEventListener('mouseenter', () => {
        btnAnimate.classList.add('active');
        btnAnimate.classList.remove('not-active');
      });
      magneticArea.addEventListener('mouseleave', () => {
        btnAnimate.classList.remove('active');
        btnAnimate.classList.add('not-active');
      });
    });
  })
  */

  // Don't let the user be able to scroll when the navbar is open
  const menuLabelWrapper = document.querySelector('#menuLabelWrapper');
  const hamburgerMenuLabel = document.querySelector('#hamburgerMenuLabel');
  const navBackdropSticky = document.querySelector('#navBackdropSticky');

  hamburgerMenuLabel.addEventListener('click', () => {
    menuLabelWrapper.click();
  });

  menuLabelWrapper.addEventListener('click', (e) => {
    if (menuLabelWrapper.classList.contains('menuOpen')) {
      scrollbar.updatePluginOptions('modal', { open: false });
    } else {
      scrollbar.updatePluginOptions('modal', { open: true });
    }
  });
  navBackdropSticky.addEventListener('click', () => {
    if (menuLabelWrapper.classList.contains('menuOpen')) {
      scrollbar.updatePluginOptions('modal', { open: false });
    } else {
      scrollbar.updatePluginOptions('modal', { open: true });
    }
  });
});

root.render(
  <Suspense>
    <React.StrictMode>
      <GoogleOAuthProvider clientId="49031261299-08i48s14dutls1lbtkgumq66uftbkk0c.apps.googleusercontent.com">
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </React.StrictMode>
  </Suspense>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
