import './App.scss';
import "../src/Components/AnimationsComponent/Animation8/Animation8.css";
import { useRef } from "react";
import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Subscriptions from './Screens/Subscriptions Page/Subscriptions';
import ListPage from './Screens/List Page/ListPage';
import Thank from './Screens/Thanks Page/Thank';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './Screens/Home Page/HomePage';
import SectorPage from './Screens/Sector Page/SectorPage';
import Categories from './Screens/Categories/Categories';
import CompaniesSuggested from './Screens/Companies_suggested/CompaniesSuggested';
import CategoriesIndividual from './Screens/Categories Individual/CategoriesIndividual';
import PhilosophyPage from './Screens/Philosophy Page/PhilosophyPage';
import NewBlog from './Screens/New Blog Page/NewBlog';
import Dashboard from './Screens/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import SignIn from './Screens/Auth/SignIn';
import SignUp from './Screens/Auth/SignUp';
import SubscriptionOpen from './Screens/Subscription Open/SubscriptionOpen';
import TeamPage from './Screens/Team Page/TeamPage';
import Blog from './Screens/Blog/Blog';
import Fundalysis from './Screens/Fundalysis/Fundalysis';
import AgencyHome from './Screens/Agency Home/AgencyHome';
import Pricing from './Screens/Pricing/Pricing';
import AnimationsComponent from './Components/AnimationsComponent/AnimationsComponent';
import Info from './Components/Info/Info';
import SearchBlank from './Screens/Search/SeacrchBlank';
import SearchPage from './Screens/Search/SearchPage';
import BlogFooter from './Components/Blog Footer/BlogFooter';
import Faq from './Screens/Faq/Faq';
import Button from './Components/Button/Button';
import axios from 'axios';
// Importing footer-animation
import FooterAnimation from './Components/FooterAnimation/FooterAnimation';

// GSAP & Cuberto mousefollower imports
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChatTest from './Components/Chart/ChatTest';
import UserData from './Screens/User Data/UserData';
import CustomTable from './Components/NewComponents/CustomTable';
import Alert from './Components/NewComponents/Alert';
import YouTubeVideo from './Components/NewComponents/YouTubeVideo';
import Video from './Components/NewComponents/Video';
import ViewMorePage from './ViewMore';
import Admin from './Screens/Admin/Admin';
import Admin1 from './Screens/Admin/Admin1';
import Admin2 from './Screens/Admin/Admin2';
import Admin3 from './Screens/Admin/Admin3';
import Admin4 from './Screens/Admin/Admin4';
import Admin5 from './Screens/Admin/Admin5';
import { useDispatch } from 'react-redux';
import { setThemeDarkMode } from './redux/Theme';
import {
  adminPanel,
  adminPanel1,
  adminPanel2,
  adminPanel4,
  adminPanel5,
  info,
  animations,
  agencyHome,
  alert,
  blog,
  blogFooter,
  companyWithId,
  categories,
  categoriesIndividual,
  companiesSuggested,
  dashboard,
  defaultRoute,
  faq,
  fundalysis,
  listPage,
  login,
  newBlog,
  philosophyPage,
  pricing,
  register,
  search,
  searchSomething,
  sectorPage,
  subscriptionOpen,
  subscriptions,
  table,
  team,
  thankYou,
  userData,
  video,
  videoYoutube,
  viewMore,
  viewMoreId,
  blogWithId,
} from './utils/routingConstants';
import Company from './Screens/Company/Company';
import BlogDetails from './Screens/New Blog Page/BlogDetails';
import { HelmetProvider } from 'react-helmet-async';

// Registering ScrollTrigger for smooth scrolling
//gsap.registerPlugin(ScrollTrigger);

function App(props) {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const dispatch = useDispatch();
  const checkboxRef = useRef(null);
  const [checked,setChecked] = useState(getInitialMode());
  const animate = gsap.timeline({ paused: true });
  const animate2 = gsap.timeline({ paused: true });
  const [temp, setTemp] = useState(0);


animate2
  .to(".toggle-button", { duration: 0.2, scale: 0.8 })
  .set(".toggle", { backgroundColor: "#fdb813" })
  .set(".circle", { display: "flex" })
  .to(".moon-mask", { duration: 0.2, translateY: 0, translateX: 0 })
  .to(".toggle-button", { duration: 0.2, translateY: 9 })
  .to(".toggle-button", { duration: 0.2, scale: 0.8 })
animate
    .to(".toggle-button", { duration: 0.2, scale: 0.7 })
    .set(".toggle", { backgroundColor: "#FFF" })
    .set(".circle", { display: "none" })
    .to(".moon-mask", { duration: 0.2, translateY: 20, translateX: -10 })
    .to(".toggle-button", { duration: 0.2, translateY: 79 })
    .to(".toggle-button", { duration: 0.2, scale: 0.9 })
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'a1') {
        renderanimate();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [animate]);


  document.body.addEventListener('click', (e) => {
    console.log(e.target.id);
    if (e.target.id === 'navBackdropSticky' || e.target.id === 'stickyElem') {
      magneticButtonFunc();

      /*Animation */
    }
  });

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    magneticButtonFunc();

    const txtAnimate1 = document.querySelectorAll('.text-slide-up-animation-1');
    const txtAnimate2 = document.querySelectorAll('.text-slide-up-animation-2');
    const txtAnimate3 = document.querySelectorAll('.text-slide-up-animation-3');
    txtAnimate1?.forEach((txt) => {
      const splitWordsArr = txt.innerText.match(/\S+/g);
      txt.innerHTML = '';
      splitWordsArr.forEach((word) => {
        const txtAnimateTemplate1 = `
        <div class="text-slide-up-animation-wrapper-1">
          <div class="text-slide-up-animation-content-1">
            <span class="text-slide-up-animation-text-1">${word}</span>
          </div>
        </div>
        `;

        txt.innerHTML += txtAnimateTemplate1;
      });
    });
    txtAnimate2?.forEach((txt) => {
      const splitWordsArr = txt.innerText.match(/\S+/g);
      txt.innerHTML = '';
      splitWordsArr.forEach((word) => {
        const txtAnimateTemplate2 = `
        <div class="text-slide-up-animation-wrapper-2">
          <div class="text-slide-up-animation-content-2">
            <span class="text-slide-up-animation-text-2">${word}</span>
          </div>
        </div>
        `;

        txt.innerHTML += txtAnimateTemplate2;
      });
    });
    txtAnimate3?.forEach((txt) => {
      const splitWordsArr = txt.innerText.match(/\S+/g);
      txt.innerHTML = '';
      splitWordsArr?.forEach((word) => {
        const txtAnimateTemplate3 = `
        <span class="text-slide-up-animation-wrapper-3">
          <span class="text-slide-up-animation-content-3">
            <span class="text-slide-up-animation-text-3">${word}</span>
          </span>
        </span>
        `;

        txt.innerHTML += txtAnimateTemplate3;
      });
    });

    window.addEventListener('load', () => {
      // Text animation 1
      if (txtAnimate1.length) {
        gsap.fromTo(
          '.text-slide-up-animation-text-1',
          { skewY: '20deg' },
          {
            translateY: '-200%',
            skewY: '0deg',
            duration: 1,
            ease: 'power4.out',
            stagger: 0.2,
          },
        );
      }

      // Text animation 2
      if (txtAnimate2.length) {
        gsap.fromTo(
          '.text-slide-up-animation-text-2',
          { rotateX: '-40deg', opacity: 0 },
          {
            translateY: '-130%',
            rotateX: '0deg',
            opacity: 1,
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.1,
          },
        );
      }

      // Text animation 3
      if (txtAnimate3.length > 0) {
        gsap.utils.toArray('.text-slide-up-animation-3').forEach((elem) => {
          const txtAnimate3Wrappers = elem.querySelectorAll('.text-slide-up-animation-wrapper-3');
          const txtAnimate3Text = elem.querySelectorAll('.text-slide-up-animation-text-3');
          const tl = gsap
            .timeline({
              scrollTrigger: {
                trigger: txtAnimate3Wrappers,
                start: 'top 80%',
              },
            })
            .fromTo(
              txtAnimate3Text,
              { skewY: '2deg' },
              {
                translateY: '-200%',
                skewY: '0deg',
                duration: 1.5,
                ease: 'power4.out',
              },
            );
        });
      }

      // Footer slide up animation
      gsap.fromTo(
        '.footer-animation-slide-up',
        { translateY: '100%', opacity: 0 },
        {
          translateY: '0%',
          opacity: 1,
          duration: 2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
          },
        },
      );

      // Footer mountains slide up animation
      gsap.to('.slideUp', {
        translateY: '50px',
        duration: 3,
        ease: 'power4.easeOut',
        scrollTrigger: {
          trigger: '.mountains',
          start: 'top 80%',
          scrub: 1,
        },
        stagger: 0.05,
      });

      // Footer sun & moon slide up animation
      if (darkMode) {
        gsap.to('.moon', {
          rotate: '0deg',
          duration: 4,
          ease: 'power4.easeOut',
          scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
          },
        });
      } else {
        gsap.to('.sun', {
          rotate: '0deg',
          duration: 4,
          ease: 'power4.easeOut',
          scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
          },
        });
      }
      const toggleThemeBtn = document.querySelector('#checkbox');
      toggleThemeBtn?.addEventListener('change', () => {
        if (document.body.classList.contains('dark-mode')) {
          gsap.to('.moon', {
            rotate: '0deg',
            duration: 4,
            ease: 'power4.easeOut',
          });
          gsap.to('.sun', {
            rotate: '90deg',
            duration: 4,
            ease: 'power4.easeOut',
          });
        } else if (document.body.classList.contains('light-mode')) {
          gsap.to('.sun', {
            rotate: '0deg',
            duration: 4,
            ease: 'power4.easeOut',
          });
          gsap.to('.moon', {
            rotate: '90deg',
            duration: 4,
            ease: 'power4.easeOut',
          });
        }
      });

    });
  }, []);

  function parallaxIt(e, wrap) {
    const movement = wrap.mContent.dataset.movement || 0.2;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const boundingRect = wrap.mArea.getBoundingClientRect();
    const halfDiff = Math.abs(boundingRect.width - boundingRect.height) / 2;
    const relX = e.pageX - boundingRect.left - halfDiff;
    const relY = e.pageY - boundingRect.top;

    gsap.to(wrap.mContent, {
      x: (relX - boundingRect.width / 2) * movement,
      y: (relY - boundingRect.height / 2 - scrollTop) * movement,
      ease: 'power1',
      duration: 0.6,
    });
  }

  function magneticButtonFunc() {
    // Magnetic button js
    const mWrap = document.querySelectorAll('.magnetic-wrap');

    mWrap.forEach(function (wrap) {
      wrap.mContent = wrap.querySelector('.magnetic-content');
      wrap.mArea = wrap.querySelector('.magnetic-area');

      wrap.mArea.addEventListener('mousemove', function (e) {
        parallaxIt(e, wrap);
      });
      wrap.mArea.addEventListener('mouseleave', function (e) {
        gsap.to(wrap.mContent, {
          scale: 1,
          x: 0,
          y: 0,
          ease: 'power3',
          duration: 0.6,
        });
      });
    });
  }
  // ===============================

  // code of what the user prefefers

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  if (darkMode) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }

  const location = useLocation();
  const { pathname } = location;

  const renderanimate = async() =>{
    if(animate)
      if(darkMode)
        await animate.restart();
    else
      setTimeout(() => {
        renderanimate();
      }, 100);
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      const event = new KeyboardEvent('keydown', { key: 'a1' });
      window.dispatchEvent(event);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(()=>{

    if(temp==0) {
      setTemp(1);
      return;
    }
    
    document.getElementById('checkbox').click();
    document.getElementById('checkbox').dispatchEvent(new Event("change"));
    const a2 = document.querySelector('.checkbox');
    if(a2){
      a2.click();
      a2.dispatchEvent(new Event("change"));
    }
    if (document.body.classList.contains('light-mode')) {
      gsap.to('.moon', {
        rotate: '0deg',
        duration: 4,
        ease: 'power4.easeOut',
      });
      gsap.to('.sun', {
        rotate: '90deg',
        duration: 4,
        ease: 'power4.easeOut',
      });
      animate.restart();
    }else{
      gsap.to('.sun', {
        rotate: '0deg',
        duration: 4,
        ease: 'power4.easeOut',
      });
      gsap.to('.moon', {
        rotate: '90deg',
        duration: 4,
        ease: 'power4.easeOut',
      });
      animate2.restart();
    }

  },[checked])
  useEffect(() => {
    const containerWrapper = document.querySelector('#nightModeContainer');
    if (!containerWrapper) return;

    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'toggle-container mt-section align-items-center';
    toggleContainer.style.zIndex = 1;
    toggleContainer.innerHTML = `
    <span>Night Mode</span>
    <span class="toggle">
      <input
        id="checkbox"
        class="checkbox"
        type="checkbox"
      />
      <label for="checkbox"></label>
    </span>
  `;

    const checkbox = toggleContainer.querySelector('.checkbox');
      checkbox.checked = darkMode;
      checkbox.addEventListener('change', () => {
        const isChecked = checkbox.checked;
        setDarkMode(isChecked);
        dispatch(setThemeDarkMode(!isChecked));
        window.localStorage.setItem('dark', isChecked);
        window.dispatchEvent(new Event('storage'));
    });

    containerWrapper.appendChild(toggleContainer);
    return () => {
      containerWrapper.removeChild(toggleContainer);
    };
  }, [darkMode]);

  const url = window.location.href;
  console.log('url: ' + url);

  useEffect(() => {
    console.log(url);

    url.includes('code') &&
      axios
        .post('http://localhost:8000/auth/twitter', {
          code: url.split('code=')[1],
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem('code', res.data.tokens.token);
        });
  }, [url]);

  return pathname === '/new-blog' ? (
    <HelmetProvider>
      <div id="app" className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Switch>
          <Route exact={true} key={6} path={newBlog}>
            <NewBlog />
          </Route>
        </Switch>
      </div>
    </HelmetProvider>
  ) : (
    <HelmetProvider>
      <div id="app" className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div id="scroll-container">
          <div id="container-wrapper">
            <NavBar />
            <Switch>
              <Route exact={true} key={1} path={defaultRoute} component={HomePage} />
              <Route exact={true} key={12} path={team} component={TeamPage} />
              <Route exact={true} key={13} path={login} component={SignIn} />
              <Route exact={true} key={14} path={register} component={SignUp} />
              <Route exact={true} key={15} path={thankYou} component={Thank} />
              <Route exact={true} key={16} path={subscriptionOpen} component={SubscriptionOpen} />
              <Route exact={true} key={17} path={subscriptions} component={Subscriptions} />
              <Route exact={true} key={18} path={listPage} component={ListPage} />
              <Route exact={true} key={19} path={sectorPage} component={SectorPage} />
              <Route exact={true} key={28} path={faq} component={Faq} />
              <Route exact={true} key={2} path={categories} component={Categories} />
              <Route exact={true} key={3} path={categoriesIndividual} component={CategoriesIndividual} />
              <Route exact={true} key={4} path={philosophyPage} component={PhilosophyPage} />
              <Route exact={true} key={5} path={companiesSuggested} component={CompaniesSuggested} />
              <Route exact={true} key={7} path={dashboard} component={Dashboard} />
              <Route exact={true} key={8} path={blog} component={Blog} />
              <Route exact={true} key={8} path={blogWithId} component={BlogDetails} />
              <Route exact={true} key={6} path={companyWithId} component={Company} />
              <Route exact={true} key={9} path={fundalysis} component={Fundalysis} />
              <Route exact={true} key={20} path={agencyHome} component={AgencyHome} />
              <Route exact={true} key={21} path={pricing} component={Pricing} />
              <Route exact={true} key={22} path={search} component={SearchPage} />
              <Route exact={true} key={24} path={blogFooter} component={BlogFooter} />
              <Route exact={true} key={26} path={userData} component={UserData} />
              <Route exact={true} key={26} path={viewMore} component={ViewMorePage} />
              <Route exact={true} key={26} path={viewMoreId} component={ViewMorePage} />
              <Route exact={true} key={28} path={table} component={CustomTable} />
              <Route exact={true} key={28} path={alert} component={Alert} />
              <Route exact={true} key={28} path={videoYoutube} component={YouTubeVideo} />
              <Route exact={true} key={28} path={video} component={Video} />
              <Route exact={true} key={29} path={adminPanel} component={Admin} />
              <Route exact={true} key={29} path={adminPanel1} component={Admin1} />
              <Route exact={true} key={29} path={adminPanel2} component={Admin2} />
              <Route exact={true} key={29} path={adminPanel4} component={Admin4} />
              <Route exact={true} key={29} path={adminPanel5} component={Admin5} />
              <Route exact={true} key={30} path={info} component={Info} />
              <Route exact={true} key={31} path={animations} component={AnimationsComponent} />
            </Switch>
            <div className="dummy"></div>
            <div className="footer mt-section">
              <div className="footer-animation-slide-up-wrapper">
                <div className="footer-animation-slide-up">
                  <div className="d-flex flex-column-tablet justify-content-between">
                    <h2 className="fs-95 fw-bold footer-text">
                      Suggesting only <br /> fundamentally
                      <br /> <span>strong company</span> <br /> every week
                    </h2>
                    <div>
                      <h3 className="fs-30">
                        Join us for weekly <br />
                        updates
                      </h3>
                      <div className="mt-1">
                        <Button text="Whatsapp" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <FooterAnimation />
              <div className="d-flex">
                <Footer />

                <div className="toggle-container mt-section align-items-center xxbt" style={{ zIndex: 1 }}>
                  <span>Night Mode</span>


                  <div className="wrapper8">
                    <div className="xxcontainer">
                      <div className="switch" onClick={()=>{
                        // if (checked) {
                        //   animate.restart();
                        // } else {
                        //   animate2.restart();
                        // }
                        setChecked(!checked);
                      }}>
                        <div className="toggle-button">
                          <div className="toggle"></div>
                          <div className="moon-mask"></div>
                          <div className="circles-wrapper">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <span className="toggle"> */}
                    <input
                      ref={checkboxRef}
                      checked={darkMode}
                      onChange={() => {
                        setDarkMode(!darkMode);
                        dispatch(setThemeDarkMode(!darkMode));
                        window.localStorage.setItem('dark', !darkMode);
                        window.dispatchEvent(new Event('storage'));
                      }}
                      id="checkbox"
                      className="checkbox hidden"
                      type="checkbox"
                    />
                    {/* <label htmlFor="checkbox" /> */}
                  {/* </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
