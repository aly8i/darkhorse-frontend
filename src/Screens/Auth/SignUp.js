import { Checkbox } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { registerSchema } from '../../validation';
import Button from '../../Components/Button/Button';
import './style.scss';
import CountryCode from '../../Components/Country code select/CountryCode';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassward, setConfirmPassward] = useState('');
  const [mobile, setMobile] = useState('');
  const history = useHistory();

  const handleSignUp = async () => {
    console.log('email: ' + email);
    console.log('password: ' + password);
    const res = await axios.post('http://localhost:8000/auth/sign-up', {
      email: email,
      password: password,
      phone: mobile,
    });
    console.log(res);
    localStorage.setItem('code', res.data.tokens.token);
  };

  return (
    <div className="container auth-container">
      <div className="d-flex fs-95 auth-wrapper">
        <div
          onClick={() => {
            history.push(`/login`);
          }}
        >
          Sign in
        </div>

        <div style={{ margin: '0 10px' }}>/</div>
        <div
          onClick={() => {
            history.push(`/register`);
          }}
          className="border-bottom"
        >
          Sign up
        </div>
      </div>{' '}
      <div className="d-flex justify-content-between btn-wrapper flex-column-mobile align-items-center">
        <Button text="Google" onClick={() => console.log('google login clicked')} />
        <Button text="Facebook" />
        <Button text="Twitter" />
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
          confirmPassward: confirmPassward,
          mobile: mobile,
        }}
        validationSchema={registerSchema}
      >
        {({ handleSubmit, setFieldValue, errors, touched, values }) => (
          <Form className="form-wrapper " onSubmit={handleSubmit}>
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
                  value={values.password}
                />
                <div class="input-line-animation__line"></div>
              </div>
              {errors.password && touched.password ? <span className="error">{errors.password}</span> : null}
            </div>
            <div className="d-flex input-wrapper">
              <div className="input-line-animation__wrapper">
                <Field
                  name="confirmPassward"
                  type="password"
                  className="input-form input-line-animation__ip"
                  placeholder="Confirm Passward"
                  onChange={(e) => {
                    setFieldValue('confirmPassward', e.target.value);
                    setConfirmPassward(e.target.value);
                  }}
                  value={values.confirmPassward}
                />
                <div class="input-line-animation__line"></div>
              </div>
              {errors.confirmPassward && touched.confirmPassward ? <span className="error">{errors.confirmPassward}</span> : null}
            </div>
            <div className="d-flex input-wrapper">
              <div className="d-flex input-line-animation__wrapper">
                <CountryCode />
                <div className="input-line-animation__wrapper">
                  <Field
                    name="mobile"
                    type="text"
                    className="input-form input-form-mobile input-line-animation__ip"
                    placeholder="Mobile"
                    onChange={(e) => {
                      setFieldValue('mobile', e.target.value);
                      setMobile(e.target.value);
                    }}
                    value={values.mobile}
                  />
                  <div class="input-line-animation__line"></div>
                </div>
              </div>
              {errors.mobile && touched.mobile ? <span className="error">{errors.mobile}</span> : null}
            </div>
            <div className="d-flex check-wrapper">
              <Checkbox color="success" />
              <p>Agree to terms & conditions.</p>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-column-mobile">
              <Button onClick={handleSignUp} text="Sign Up" />
              <p className="forget-pass">Forgot Password?</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
