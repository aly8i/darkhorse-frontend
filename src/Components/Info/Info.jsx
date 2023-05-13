import React from 'react'
import "./infoStyles.css"
import { useState } from 'react'
const Info = () => {
  const [emailSwitch, setEmailSwitch] = useState(false);
  return (
    <div class="info-wrapper">
      <div class="titlesection">
        <div className="titletext">
          Kakushu Kaiseki LLP
        </div>
      </div>
      <div class="section1">
       <div className="section1text">
        "Kakushu" means "hidden*, while "Kaiseki" means
        "analysis". So the combination of these two words suggests a
        focus on analysing and uncovering hidden value
       </div>
      </div>
      <div class="section2">
        <div className="section2text">
          As the name implies we excels at uncovering hidden value
          through diligent analysis and attention to detail. We specialize
          in analysing data to identify hidden or overlooked value,
          including under-the-radar investment opportunities, hidden
          trends in consumer behaviour, and inefficiencies in business
          operations that can be optimized for greater profitability in
          future.
        </div>
      </div>
      <div class="services">
        <div class="servicestitle">Services</div>
        <ul>
          <li class="service">Private Wealth Management Services</li>
          <li class="service">Investment Advisory</li>
          <li class="service">Global equity research</li>
          <li class="service">Portfolio Management Services and much more</li>
        </ul>
      </div>
      <div class="product">
        <div class="productstitle">Check out our various products</div>
        <div class="productsbutton">Products</div>
      </div>
      <div class="email">
        <div class="emailtext">Email us - support@darkhorsestocks.in</div>
        <input type="checkbox" id="switch" /><label onClick={()=>setEmailSwitch(!emailSwitch)} id="switchlabel" for="switch">Toggle</label>
      </div>
    </div>
  )
}

export default Info