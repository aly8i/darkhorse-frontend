import React from 'react';
import Button from '../../Components/Button/Button';
import '../Philosophy Page/style.scss';
import './style.scss';

export default function Subscriptions() {
  return (
    <div className="container">
      <div >
        <h1 className="  mt-header font-Averta">Subscriptions</h1>
      </div>

      <div className=" ">
        <h2 className="subscribePage  sub-header-title font-Averta">
          <span>Currently</span>
          <span>closed.</span>
            
        </h2>
      </div>

      <div className="d-flex  overview-wrapper mt-section ">
        <p className="overview-title subscribepage font-Averta w-600 size-30">Overview</p>
        <div className="overview-text overview-content subscribe-page">
          <p className="text-slide-up-animation-3 font-Averta w-300 size-28">Darkhorsestocks was started with a simple aim of bringing amazing fundamentally strong comapnies to users attention with in depth information about the company.</p>

          <p className="text-slide-up-animation-3 mt-1 font-Averta w-300 size-28">
            Unlike other advisories, we are not in this for money and that is why we
             open for subscriptions 
            only twice a year and that to for 
            a  limited period 
            of a month only.
          </p>

          <p className="text-slide-up-animation-3 mt-1 font-Averta w-300 size-28">
            Keeping subscritiptions open all round the year increases a lot of work. Instead of that
            <strong> we want to focus on providing quality research</strong>
            and amazing companies. Hope you understand.
          </p>
        </div>
      </div>

      <div className=" mt-section text-center fw-bol">
        <p className="size-26 font-Averta w-600 reopentxt">Subscriptions will reopen for this period.</p>

        <p className="font-Averta size-85 subscribe-date w-700">
          <span>01-Nov-2022 </span>
          <span>to</span>
          <span>31-Nov-2022</span>
          
          
         
        </p>
      </div>
      <div className=" mt-section">
        <div className="">
          <h2 className="font-Averta size-85 what-happens w-700">
            What happens when you subscribe?
          </h2>
          <p className="font-Averta w-300 size-28 text-slide-up-animation-3 mt-1">When you subscribe you not only get amazing fundamentally strong company every week but you support darkhorsestocks in our future endavours, helping us to carry out quality research and devlop more amazing tools like Fundalysis.</p>
        </div>
      </div>
      <div className=" mt-section">
        <div className=" ">
          <h2 className="font-Averta size-85 what-to-do w-700">
            What to do 
            now?
          </h2>
          <p className="font-Averta w-300 size-28 text-slide-up-animation-3">Subscribe to our free plan for all small users where we suggest one company every month or around 10-12 companies every year and one infographic every week.</p>
        </div>
        <div className="d-flex flex-direction-column align-items-center mt-6">
          <a href="https://api.whatsapp.com/send?phone=917874999975">
            <Button text="WhatsApp" className={"whatsAppBtn"}></Button>
          </a>
          <p className="gray-color mt-1 text-slide-up-animation-3 no-spam-txt">No spam - No advertisement</p>
        </div>
      </div>
    </div>
  );
}
