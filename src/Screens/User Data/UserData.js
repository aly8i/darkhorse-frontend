import React from 'react';
import CustomAccordion from '../../Components/Accordion/CustomAccordion';
import Button from '../../Components/Button/Button';
import './style.scss';

export default function UserData() {
  const referralCard = () => (
    <div>
      <p className="fs-30">You can earn referrals by referring the person and you will get the amount when someone subscribes using your referral code. Your referral code would be your 10 digit mobile number.</p>
      <div className="d-flex justify-content-between fs-30 user-card mt-3">
        <p>Referal code:</p>
        <p className="fw-bold">7600002636</p>
      </div>

      <div className="d-flex justify-content-between w-50 fs-30  mt-3">
        <p>Users Joined:</p>
        <ol className="">
          <li>Niyam Vora</li>
          <li>Niyam Vora</li>
          <li>Niyam Vora</li>
        </ol>
      </div>
    </div>
  );

  return (
    <div className="container Accordion-wrapper">
      <div className="mt-header">
        <CustomAccordion
          right="Subscription"
          left=""
          card={
            <div className="d-flex justify-content-between fs-30 user-card">
              <p>Subscription Status :</p>
              <p className="fw-bold">Active</p>
            </div>
          }
        />
        <CustomAccordion
          right="Account"
          left=""
          card={
            <div className="d-flex justify-content-between fs-30 user-card">
              <p className="fw-bold">Name</p>
              <p>Niyam Vora</p>
            </div>
          }
        />
        <CustomAccordion right="Referral" left="" card={referralCard()} />

        <div className="d-flex justify-content-between btn-wrapper flex-column-mobile btn-wrapper">
          <Button text="LogOut" />
        </div>
      </div>
    </div>
  );
}
