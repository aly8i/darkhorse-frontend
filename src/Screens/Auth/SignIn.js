import { useEffect } from 'react';
import { Checkbox } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { loginSchema } from '../../validation';
import Button from '../../Components/Button/Button';
import './style.scss';
import { useHistory } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
// import FacebookButton from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

export default function SignIn() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (scriptLoaded) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://otpless.com/auth.js';
      document.body.appendChild(script);
    }
  }, [scriptLoaded]);

  useEffect(() => {
    const setupWhatsApp = () => {
      // Define the 'otpless' function
      window.otpless = async (otplessUser) => {
        alert(JSON.stringify(otplessUser));
        console.log('otplessUser: ' + otplessUser);
        const res = await axios.post('http://localhost:8000/auth/whatsapp/sign-up', {
          phone: otplessUser?.mobile?.number,
          name: otplessUser?.mobile?.name,
        });
        console.log('res: ', res.data.tokens.token);
        localStorage.setItem('code', res.data.tokens.token);
      };
    };
    setupWhatsApp();
  }, []);

  const handleWhatsappLogin = () => {
    setScriptLoaded(true);
  };

  const handleSignIn = async () => {
    console.log('email: ' + email);
    console.log('password: ' + password);
    const res = await axios.post('http://localhost:8000/auth/login', {
      email: email,
      password: password,
    });
    console.log('res: ', res.data.tokens.token);
    localStorage.setItem('code', res.data.tokens.token);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      // const access_token = code;
      const res = await axios.post('http://localhost:8000/auth/google', {
        // /auth/google backend that will exchange the code
        access_token: code,
      });

      console.log(res);
      localStorage.setItem('code', res.data.tokens.token);
    },
    flow: 'auth-code',
  });

  const responseFacebook = async (response) => {
    const access_token = response.accessToken;
    const res = await axios.post('http://localhost:8000/auth/facebook', {
      // http://localhost:3001/auth/google backend that will exchange the code
      access_token,
    });

    console.log(res);
    localStorage.setItem('code', res.data.tokens.token);
  };

  function getTwitterOauthUrl() {
    const rootUrl = 'https://twitter.com/i/oauth2/authorize';
    const options = {
      // redirect_uri: 'http://www.localhost:3001/oauth/twitter', // client url cannot be http://localhost:3000/ or http://127.0.0.1:3000/
      redirect_uri: 'https://1de6-206-84-144-42.ngrok-free.app/oauth/twitter', // client url cannot be http://localhost:3000/ or http://127.0.0.1:3000/
      client_id: 'MlhacTEtWTA2aFMwcG56UktQLVQ6MTpjaQ',
      state: 'state',
      response_type: 'code',
      code_challenge: 'challenge',
      code_challenge_method: 'plain',
      scope: ['users.read', 'tweet.read', 'follows.read', 'follows.write'].join(' '), // add/remove scopes as needed
    };
    const qs = new URLSearchParams(options).toString();
    window.location.href = `${rootUrl}?${qs}`;
    // return `${rootUrl}?${qs}`;
  }

  const url = window.location.href;
  console.log('url: ' + url);

  url.includes('code') &&
    axios
      .post('http://localhost:8000/auth/twitter', {
        code: url.split('code=')[1],
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem('code', res.data.tokens.token);
      });

  return (
    <div className="container auth-container">
      <div className="d-flex fs-95 auth-wrapper">
        <div
          onClick={() => {
            history.push(`/login`);
          }}
          className="border-bottom"
        >
          Sign in
        </div>

        <div style={{ margin: '0 10px' }}>/</div>
        <div
          onClick={() => {
            history.push(`/register`);
          }}
        >
          Sign up
        </div>
      </div>{' '}
      <div style={{ margin: '50px 0' }} className="d-flex justify-content-between flex-column-mobile align-items-center">
        <Button text="Google" onClick={googleLogin} />
        <FacebookLogin appId="1597830120694009" callback={responseFacebook} render={(renderProps) => <Button text="Facebook" onClick={renderProps.onClick}></Button>} />
        <Button text="Twitter" onClick={getTwitterOauthUrl} />
        <Button text="Whatsapp" onClick={handleWhatsappLogin} />
      </div>
      <div className="d-flex align-items-center justify-content-center" style={{ width: '80vw' }}>
        <hr />
        <div className="fs-30" style={{ margin: '0 10px' }}>
          OR
        </div>{' '}
        <hr />
      </div>
      <Formik
        initialValues={{
          email: email,
          password: password,
        }}
        validationSchema={loginSchema}
      >
        {({ handleSubmit, setFieldValue, errors, touched, values }) => (
          <Form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="d-flex input-wrapper">
              <div className="input-line-animation__wrapper">
                <Field
                  name="email"
                  type="text"
                  className="input-form input-line-animation__ip"
                  placeholder="Your email"
                  onChange={(e) => {
                    setFieldValue('email', e.target.value);
                    setEmail(e.target.value);
                  }}
                  value={values.email}
                />
                <div class="input-line-animation__line"></div>
              </div>

              {errors.email && touched.email ? <span className="error">{errors.email}</span> : null}
            </div>
            <div className="d-flex input-wrapper">
              <div className="input-line-animation__wrapper">
                <Field
                  name="password"
                  type="password"
                  className="input-form input-line-animation__ip"
                  placeholder="Password"
                  onChange={(e) => {
                    setFieldValue('password', e.target.value);
                    setPassword(e.target.value);
                  }}
                  value={values.passward}
                />
                <div class="input-line-animation__line"></div>
              </div>
              {errors.password && touched.password ? <span className="error">{errors.password}</span> : null}
            </div>
            <div className="d-flex check-wrapper">
              <Checkbox color="success" />
              <p>Agree to terms & conditions.</p>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-column-mobile">
              <Button onClick={handleSignIn} text="Log in" />
              <p
                onClick={() => {
                  localStorage.setItem('bb', 'nes');
                }}
                className="forget-pass"
              >
                Forgot Password?
              </p>
            </div>
          </Form>
        )}
      </Formik>{' '}
    </div>
  );
}
