import { Checkbox } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { registerSchema } from '../../validation';
import Button from '../../Components/Button/Button';
import CountryCode from '../../Components/Country code select/CountryCode';
import './style.scss';

export default function SubscriptionOpen() {
  const [email, setEmail] = useState('');
  const [passward, setPassward] = useState('');
  const [referal, setReferal] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <div className="container">
      <div className="open-header mt-header">
        <h1 className="fs-95">Awesome!</h1>
        <p className="fs-30">You are making the right choice. </p>
      </div>

      <div className="">
        <h2 className="fs-30 mt-section">Please fill in the form below</h2>

        <Formik
          initialValues={{
            email: '',
            password: '',
            referal: '',
            mobile: '',
          }}
          validationSchema={registerSchema()}
        >
          {({ handleSubmit, setFieldValue, errors, touched }) => (
            <Form className="form-wrapper " onSubmit={handleSubmit}>
              <div className="d-flex  input-wrapper">
                <Field
                  name="email"
                  type="text"
                  className="input-form"
                  placeholder="Your email"
                  onChange={(e) => {
                    setFieldValue(e.target.value);
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                {errors.email && touched.email ? <span className="error">{errors.email}</span> : null}
              </div>
              <div className="d-flex input-wrapper">
                <Field
                  name="password"
                  type="text"
                  className="input-form"
                  placeholder="Password"
                  onChange={(e) => {
                    setFieldValue(e.target.value);
                    setPassward(e.target.value);
                  }}
                  value={passward}
                />
                {errors.email && touched.email ? <span className="error">{errors.email}</span> : null}
              </div>

              <div className="d-flex input-wrapper">
                <div className="d-flex     justify-content-between ">
                  {' '}
                  <CountryCode />
                  <Field
                    name="mobile"
                    type="text"
                    className="input-form input-form-mobile"
                    placeholder="Your Mobile"
                    onChange={(e) => {
                      setFieldValue(e.target.value);
                      setMobile(e.target.value);
                    }}
                    value={mobile}
                  />
                </div>
                {errors.mobile && touched.mobile ? <span className="error">{errors.mobile}</span> : null}
              </div>
              <div className="d-flex input-wrapper">
                <div className="d-flex align-items-end">
                  <Field
                    name="referal"
                    type="text"
                    className="input-form input-form-referal"
                    placeholder="Referal Code"
                    onChange={(e) => {
                      setFieldValue(e.target.value);
                      setReferal(e.target.value);
                    }}
                    value={referal}
                  />
                  <Button text="Verify Now" />
                </div>
                {errors.referal && touched.referal ? <span className="error">{errors.referal}</span> : null}
              </div>

              <div className="d-flex justify-content-between check-wrapper amount-wrapper">
                <div className="fw-bold">
                  <p className="fs-55">Amount</p>
                  <p className="fs-20 tax-text  ">For 1 year (Inclusive of all taxes)</p>
                </div>
                <p className="fs-55 fw-bold"> Rs 10,000</p>
              </div>

              <div className="d-flex check-wrapper">
                <Checkbox color="success" />
                <p>Agree to terms & conditions.</p>
              </div>

              <div className="pay-btn ">
                <Button text="Pay now" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
