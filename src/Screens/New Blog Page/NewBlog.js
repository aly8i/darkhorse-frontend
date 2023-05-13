import React, { useRef } from 'react';
import SecImage from '../../Assets/blog1.webp';
import './style.scss';
import BlogAccordion from '../../Components/Accordion/BlogAccordion';
import Test from './Test';
import { useCreateBlogPartMutation, useGetBlogDetailsQuery } from '../../redux/BlogsAPI';
import { Button } from '@mui/material';
import { ImageGroup, Image } from 'react-fullscreen-image';
import ProgressBar from './ProgressBar';
import NavBar from '../../Components/NavBar/NavBar';
import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import FooterAnimation from '../../Components/FooterAnimation/FooterAnimation';

export default function NewBlog() {
  const { data: blogData, isSuccess, isLoading } = useGetBlogDetailsQuery(1);
  const [createBlogPart, { data: blogPart, isSuccess: blogPartCreateSuccess, isLoading: blogPartLoading }] = useCreateBlogPartMutation();

  //  PLAESE DON'T DELETE IT ADDED BY NESREENA
  // const data = [
  //   {
  //     text: "Key statistics",
  //     card: <Test />}]

  const data = [
    {
      text: 'Key statistics',
      card: ` <div className="mt-1 ">

      <a href="https://darkhorsestocks.com/wp-content/uploads/2021/05/3-1-1024x576.png" ><img
        src="https://darkhorsestocks.com/wp-content/uploads/2021/05/3-1-1024x576.png"
        alt=""
        className="w-100"
      /></a>
   
      <div className="fs-30 mt-3">
      <p className=" mt-3">
        Founded In 1996 By A Group Of Reputed Business Leaders, Each Having An
        Experience Of over 30 Years In The Chemical Industry, Vidhi Specialty
        Food Ingredients Ltd. (VSFIL) is an ISO 9001:2008, ISO 22000:2005 &amp;
        HACCP Certified Company with Manufacturing Facility Spread Over 20000
        Sq. Meters near the City Of Mumbai.&nbsp;
      </p>
      <p className=" mt-3">
        VSFIL, Began humbly by producing 400 m.tons of synthetic food colours in
        the year 1996 which has now been upgraded to Aa total manufacturing
        capacity of over 3500 M. Tons a year hence making VSFIL the 2nd Largest
        Food Colour Manufacturing facility in asia at that time. It is a leading
        manufacturer of Superior Synthetic and Natural Food Grade Colours used
        in Food &amp; Beverage, Confectionary, Pharmaceuticals, Feeds,
        Cosmetics, Homecare, Personal Care, Inkjet Inks and Salt Free
        Colours.&nbsp;
      </p>
      <p className=" mt-3">
        In the year 2000, VSFIL was the first firm in India to be given a
        Quality management system standard, ISO 9002, for the manufacture of
        synthetic food colors.&nbsp;
      </p>
      <p className=" mt-3">
        VSFIL was inspected by <strong>US FDA officials in 2002</strong> and
        confirmed to be satisfactory. VSFIL also has a Food Hazard Analysis
        Control Plan (HACCP) system in place for the production of synthetic
        food colors and lakes.
      </p>
      <p className=" mt-3">
        Apart from food colors, the firm also sources and exports high-quality
        non-food dyes such as Acid Dyes, Textile Dyes, Reactive Dyes, Basic
        Dyes, Pigments, and other similar things in order to give a one-stop
        solution to many of its clients by meeting their non-food dye
        requirements. The company's goods are all
        <strong>HALAL and Kosher certified</strong>.
      </p>
      <p className=" mt-3">
        Today VSFIL’s colors are being distributed and consumed in over 80
        countries across 6 continents.
      </p> 
      </div>
    </div>`,
    },
    {
      text: 'Before we explore company products in details let us first understand Why are food colours used?',
      card: `<ul className="mt-2 list-items fs-30 ">
      <li>Food colours are additives that are added to food or beverages to make them look more appealing.</li>
      <li>When colours are added to food goods, they provide a highly vibrant and appealing impact while also improving
          the product's look for ingestion.</li>
      <li>It aids in influencing the consumer to purchase a product through visual perception by giving consistency in the
          product's look.</li>
      <li>It also improves a dish's aesthetic attractiveness and adds colourful colours to other items.</li>
      <li>Food colour can impact flavour perception.</li>
  </ul>`,
    },
    {
      text: 'Business Products & Certifications',
      card: `    <div className="mt-2">
      <div className="d-flex w-100 justify-content-between images-container">
      <a
        href="https://i0.wp.com/darkhorsestocks.com/wp-content/uploads/2021/05/15.png?ssl=1"
        class="w-40"
      >
        <img
          src="https://i0.wp.com/darkhorsestocks.com/wp-content/uploads/2021/05/15.png?ssl=1"
          alt=""
          class="w-100"
        />
      </a>

      <a
        href="https://i0.wp.com/darkhorsestocks.com/wp-content/uploads/2021/05/16.png?ssl=1"
        class="w-40"
      >
        <img
          src="https://i0.wp.com/darkhorsestocks.com/wp-content/uploads/2021/05/16.png?ssl=1"
          alt=""
          class="w-100"
        />
      </a>
    </div>
    <div className="mt-2 d-flex w-100 justify-content-between images-container">
      <a href="https://i1.wp.com/darkhorsestocks.com/wp-content/uploads/2021/05/110.png?ssl=1" class="w-40">
        <img
          src="https://i1.wp.com/darkhorsestocks.com/wp-content/uploads/2021/05/110.png?ssl=1"
          alt=""
          className="w-100"
        />
      </a>

      <a href="https://i0.wp.com/darkhorsestocks.com/wp-content/uploads/2021/05/16.png?ssl=1" class="w-40">
        <img
          src="https://i0.wp.com/darkhorsestocks.com/wp-content/uploads/2021/05/16.png?ssl=1"
          alt=""
          class="w-100"
        />
      </a>
    </div>
    <div className="fs-30 mt-3">
      <p className=" mt-1">
        <strong>Synthetic Water Soluble Colours</strong>: Full range of 14
        water soluble colours available in Microfine Powder, Fine Plating
        Grade Powder &amp; Granular Forms.
      </p>
      <p className=" mt-1">
        <strong>FD&amp;C Colours</strong>: Full range of U.S. FDA Certified
        Colours in Microfine Powder, Fine Plating Grade Powder &amp; Granular
        Forms &amp; Lakes.
      </p>
      <p className=" mt-1">
        <strong>Aluminum Lakes</strong>: Full Range Of Aluminum Lakes Used In
        Surface Coatings, Capsules, Dry Snacks Food Packaging Material
        Etc.,&nbsp;
      </p>
      <p className=" mt-1">
        <strong>D&amp;C Colours</strong>: Range of Certified D&amp;C Dyes
        &amp; Lakes for Drug &amp; Cosmetic Applications. Company can develop
        and match any shade as per the customers specifications
      </p>
      <p className=" mt-1">
        <strong>Blends</strong>: Useful For Acquiring Any Desired Shade.
        Co-Blended Lakes &amp; Granules.&nbsp;
      </p>
      <p className=" mt-1">
        <strong>Brilliant Blue FCF (Blue 1)</strong> is a synthetic organic
        compound used primarily as a blue colorant for processed foods,
        medications, dietary supplements, and cosmetics. It is classified as a
        triarylmethane dye and is known under various names, such as FD&amp;C
        Blue No. 1 or Acid Blue 9. It is denoted by E number E133 and has a
        color index of 42090. It has the appearance of a blue powder and is
        soluble in water and glycerol, with a maximum absorption at about 628
        nanometers. It is
        <strong>one of the oldest FDA-approved colour</strong> additives and
        is generally considered nontoxic and safe.
      </p>
      <p className=" mt-1">
        Besides food colours the company is also engaged in sourcing and
        exporting high quality non food dyes as under
      </p>
      <p className=" mt-1">
        <br />• Acid Dyes <br />• Textile Dyes <br />• Reactive Dyes <br />•
        Basic Dyes <br />• Pigments
      </p>
      <p className=" mt-1">
        <br />
        As well as company manufactures all other such items to provide a one
        stop solution to many of our customers by fulfilling their non food
        dye requirements also.&nbsp;
      </p>
    </div>
  </div>`,
    },
    {
      text: 'Applications and Uses of the Synthetic Food Colours',
      card: `    <div className=" fs-30 mt-1">
      <figure className="mt-1">
      <a href="https://darkhorsestocks.com/wp-content/uploads/2021/05/1-1-1024x576.png" >    <img
          src="https://darkhorsestocks.com/wp-content/uploads/2021/05/1-1-1024x576.png"
          alt=""
          className="w-100"
        />
      </a>
      </figure>
      <p className="mt-3">
        <strong>Water Soluble Primary Food Colors</strong> are water soluble and
        will colour any substance when dissolved. Furthermore, these colours
        comply with E.C. and JECFA regulations and have been approved for human
        consumption by WHO.
      </p>
      <figure className="mt-1">
      <a href="https://darkhorsestocks.com/wp-content/uploads/2021/05/6-1024x576.png" >
      <img
          src="https://darkhorsestocks.com/wp-content/uploads/2021/05/6-1024x576.png"
          alt=""
          className="w-100"
        />
      </a>

      </figure>
      <p className="mt-3">
        <strong>Blends of Water Soluble Food Colors</strong> are created by
        combining different primary colours. As a result, the resulting colours
        have distinct colour properties and give things a distinct feel.
      </p>
      <p className="mt-1">
        <strong>Lake Food Colors</strong> are employed in situations where
        colour is to be delivered by coating; they are essentially Food Grade
        Pigments. Lake Colors are brilliant, consistent, and beneficial in a
        variety of sectors including snack food, confectioneries, medicines,
        cosmetics, inks, plastic, food containers, and so on.
      </p>
      <figure className="wp-block-image size-large">
      <a href="https://darkhorsestocks.com/wp-content/uploads/2022/07/wdwx-1024x582.png" >
      <img
          src="https://darkhorsestocks.com/wp-content/uploads/2022/07/wdwx-1024x582.png"
          alt=""
          className="w-100"
        />
      </a>
      </figure>
      <p className="mt-1">
        Company has Existing Capacity of over 3,500 MT p.a. and has more than
        approx 8,500 MTp.a. of capacity under expansion which is expected to be
        operation by fy24. Other than that company has over 200 active customers
        spread across 5 continents and 80 countries to which company exports
        which meets all the regulatory requirements.
      </p>
      <p className="mt-1">
        Company is continuously adding new customers and increasing wallet share
        in existing customers thereby enhancing the growth .
        <strong>Top 10 countries</strong> contributed to about 86% and 78%of the
        revenues in Q4FY22 &amp; FY22 respectively.
        <strong>Top 10 customers</strong> contributed about 71% and 70% of the
        revenues in Q4FY22 &amp; FY22 respectively.
      </p>
    </div>`,
    },
    {
      text: 'Clients',
      card: `<a href="https://darkhorsestocks.com/wp-content/uploads/2021/05/clients-1024x704.png"><img
      src="https://darkhorsestocks.com/wp-content/uploads/2021/05/clients-1024x704.png" alt=""
      className="w-100"/></a>`,
    },
    {
      text: 'Capex',
      card: `    <div className="mt-1 fs-30">
      <a href="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance1-1024x725.png">
        <img
          src="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance1-1024x725.png"
          alt=""
          className="w-100"
        />
      </a>
      <p className="mt-1">
        In two phases, the business plans to more than triple its capacity to
        over 1000 MT/month by 2023. The extra capacity is created by
        establishing two new greenfield projects.
      </p>
      <p className="mt-1">
        As part of its phase I development ambitions, the business is
        establishing a 360 MT/month capacity (300 tonnes/month of Synthetic
        Water Soluble Food Colors and 60 tonnes/month of Synthetic Foodgrade
        Lakes) at the Dahej SEZ in Gujarat. The capex is Rs 30 crore, with the
        majority of the funds coming from internal accruals. Civil construction
        has already begun, and commercial production is projected to start
        within this Financial Year.
      </p>
      <p className="mt-1">
        Arjun Foods, a wholly-owned subsidiary of Vidhi in Roha MIDC, proposes
        to construct 350 tonne/month capacity for producing new high-margin
        goods as part of phase II development plans. The expansion location is
        within 200 metres from the present production site, resulting in
        operational synergies. The Maharashtra Pollution Control Board has
        provided terms of reference. The estimated time frame is 12-18 months.
        The project expenditure is Rs 30 crore, which would be financed mostly
        through internal accruals. <strong>Expected timeline: FY23</strong>
      </p>
    </div>`,
    },
    {
      text: 'Why company is well positioned with better future prospects?',
      card: `    <div className="mt-1 fs-30">
      <p className="mt-1">
        High Entry Barriers for New Competition that is Industry Potential with
        Limited Players.
      </p>
      <p className="mt-1">
        Long Customer Acceptance Customer clearance might take up to ten years.
        For the initial batch of orders, the average single product approval
        cycle for clients is between 4-5 years. End users frequently have
        internal standards that are more strict than the regulations to which
        they must conform.
      </p>
      <p className="mt-1">
        Company Operates in highly regulated markets that need various
        regulatory permissions. Obtaining multiple approvals supported by a
        proper lab testing facility, and being one of the very few USFDA
        recognised makers of food grade colours in India.
      </p>
      <p className="mt-1">
        Color is an important component of every food item since it makes it
        more appealing, delicious, attractive, and instructive. The capacity to
        improve product attractiveness and raise knowledge about the advantages
        of colouring are driving factors in the global food colour industry.
      </p>
    </div>`,
    },
    {
      text: 'Financial Highlights',
      card: `
  
  <div className="mt-1">
  <a
    href="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance6-1024x724.png"
    class="w-100"
  >
    <img
      src="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance6-1024x724.png"
      alt=""
      className="w-100"
    />
  </a>
  <div className="mt-2 d-flex w-100 justify-content-between images-container">
    <a
      href="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance2-1024x723.png"
      class="w-40"
    >
      <img
        src="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance2-1024x723.png"
        alt=""
        class="w-100"
      />
    </a>
    <a
      href="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance3-1024x724.png"
      class="w-40"
    >
      <img
        src="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance3-1024x724.png"
        alt=""
        class="w-100"
      />
    </a>
  </div>

  <div className="mt-2 d-flex w-100 justify-content-between images-container">
    <a
      href="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance4-1024x725.png"
      class="w-40"
    >
      <img
        src="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance4-1024x725.png"
        alt=""
        class="w-100"
      />
    </a>

    <a
      href="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance4-1024x725.png"
      class="w-40"
    >
      <img
        src="https://darkhorsestocks.com/wp-content/uploads/2022/07/Finance4-1024x725.png"
        alt=""
        class="w-100"
      />
    </a>
  </div>
</div>`,
    },
    {
      text: 'For Q4FY22',
      card: `    <div className="mt-1 fs-30">
      <ul className="mt-2 list-items">
        <li>
          Net Sales at Rs 145.00 crore in March 2022 up 48.26% from Rs. 97.80
          crore in March 2021.
        </li>
        <li>
          Quarterly Net Profit at Rs. 13.78 crore in March 2022 up 16.28% from
          Rs. 11.86 crore in March 2021.
        </li>
        <li>
          EBITDA stands at Rs. 20.20 crore in March 2022 up 16.09% from Rs.
          17.40 crore in March 2021.
        </li>
        <li>
          Vidhi Spec EPS has increased to Rs. 2.78 in March 2022 from Rs. 2.42
          in March 2021.
        </li>
      </ul>
      <h3 className="mt-1 fs-45">For year ended March 22</h3>
      <p className="mt-1">
        Net profit increased by 60.20 percent to Rs 58.57 crore in the fiscal
        year ended March 2022, compared to Rs 36.56 crore in the fiscal year
        ended March 2021.
      </p>
      <p className="mt-1">
        Sales increased by 101.59 percent to Rs 537.05 crore in the fiscal year
        ended March 2022, compared to Rs 266.41 crore in the fiscal year ended
        March 2021.
      </p>
      <ul className="mt-2 list-items">
        <li>
          Operating margins of the company have recently taken a hit where they
          are down to 16% from 22% in may 2020. However as the company is
          planning to increase the capacity in high margins business it is
          expected that operating margins may increase in the coming period as
          the capex plan unfolds.
        </li>
        <li>
          Additionally efforts towards backward integration would provide
          additional margins.
        </li>
        <li>
          Company’s revenues increased by 100% and PAT increased by 60% for FY22
          on Y-o-Y basis. Change in product mix, addition of new customers and
          increase in wallet share in the existing customer led to increase in
          our revenues and profitability.
        </li>
        <li>
          Company has recently taken on some debt to fund its capex plans.
        </li>
        <li>Company has ROCE of more than 30%.</li>
        <li>Promoter holding is stable at 64.27%.</li>
        <li>Company has return on Equity of 31%.</li>
        <li>
          Carg profit for the company over 3 and 5 year period for the company
          stands at around 26% and 32% respectively.
        </li>
      </ul>
    </div>`,
    },
    {
      text: 'Industry / Global Outlook',
      card: `    <div className="mt-1 fs-30">
      <p className="mt-1">
        The worldwide food colour market is largely driven by rising demand from
        the beverage sector, as well as the bread and confectionery industries.
        The worldwide food colour industry is driven by the growing demand for
        flavoured beverages, fruit juices, and nutritious drinks. Synthetic food
        colours are in high demand for commercial application because to their
        excellent light stability, low cost, and little microbiological
        contamination. Natural food colours, on the other hand, are more
        expensive than synthetic ones.
      </p>
      <p className="mt-1">
        In 2018, the global market for food coloring/coloring agents/powders was
        assessed at US$ 2.1 billion. It is expected to reach US$ 3.2 billion by
        2023, with a 9.8 percent CAGR from 2019 to 2023. India's food colour
        exports climbed by 6.5 percent during the last five years, from US$ 203
        million to US$ 263 million. Natural food colours are estimated to be the
        most important product sector, accounting for more than 80% of total
        worldwide market revenue.
      </p>
      <p className="mt-1">
        Trade wars occurred all over the world, particularly between China, the
        United States, and Western Europe. Large chemical markets that remain
        accessible in this situation may create chances for Indian chemical
        firms.
      </p>
      <p className="mt-1">
        The structure of China's chemical industry is changing as a result of
        stricter environmental standards, tighter financing, and consolidation,
        which may present opportunities for India's chemical companies in
        certain value chains and segments, albeit in small proportions given the
        size of the Indian companies.
      </p>
    </div>`,
    },
  ];

  const stringToBinary = (input) => {
    var characters = input.split('');

    return characters
      .map(function (char) {
        const binary = char.charCodeAt(0).toString(2);
        const pad = Math.max(8 - binary.length, 0);
        // Just to make sure it is 8 bits long.
        return '0'.repeat(pad) + binary;
      })
      .join(' ');
  };

  const addBlogPart = (idx) => {
    if (idx < data.length) {
      console.log(stringToBinary(data[idx].card).toString());
      console.log(stringToBinary(data[idx].card).toString().length);
      createBlogPart({
        text: data[idx].text,
        Card: stringToBinary(data[idx].card),
        blogId: 1,
      });
    }
  };

  const [scrollProgress, setScrollProgress] = useState(0);
  let scrollbarRef = useRef(null);
  let scrollbar, totalHeight, yPosition;
  const handleScroll = () => {
    scrollbar = scrollbarRef.current;
    if (!scrollbar) return;
    yPosition = scrollbar.scrollTop;
    totalHeight = scrollbar?.scrollHeight - scrollbar?.clientHeight;
    setScrollProgress((yPosition / totalHeight) * 100);
  };

  function binaryToText(binary) {
    binary = binary.split(' ');
    return binary.map((elem) => String.fromCharCode(parseInt(elem, 2))).join('');
  }

  return (
    <>
      <ProgressBar value={scrollProgress}></ProgressBar>
      <div ref={scrollbarRef} onScroll={handleScroll} style={{ overflowY: 'scroll', maxHeight: '100vh' }}>
        <div id="container-wrapper">
          <NavBar></NavBar>
          <div className="container">
            <div className="blog-header  mt-header">
              <Button
                onClick={() => {
                  addBlogPart(9);
                }}
              >
                Add
              </Button>
              <div className="card-date">
                <p>PUBLISHED ON JAN 23, 2022</p>
              </div>
              <h1 className="container fs-95 blog-title ">
                macrotech <br />
                `` Devlopers limited
              </h1>
              <p>Debt free | Cash Rich | Long Term Investing | Darkhorsestock</p>
            </div>
          </div>
          <div className="container mt-section fw-semibold fs-30">
            <h3 className="w-70 text-slide-up-animation-3  fs-30">
              Newgen Software Technologies is a completely debt free 28 years old software company. With huge, mission-critical systems implemented at the world's largest banks, governments, BPOs & IT Companies, insurance firms, and healthcare organisations, it delivers Business Process Management,
              Enterprise Content Management, and Customer Communication Management platforms.
            </h3>
          </div>

          <div className="section-img-container mt-section ">
            <img src={SecImage} alt="Hero" className="hero-img" />
          </div>
          <h3 className="container mt-section fw-semibold fs-30">Market Price at the time of Publishing this report : 590 Rs </h3>

          {/* <div className="mt-section">
        { !isLoading && isSuccess && blogData.payload && blogData.payload.BlogPart.map((item) => (
          <BlogAccordion text={item.text} card={bin2String((item.Card).split(' '))} />
        ))}
      </div> */}

          <div className="mt-section">
            {blogData?.payload?.BlogPart?.map((item) => (
              <BlogAccordion text={item.text} card={binaryToText(item.Card)} />
            ))}
          </div>
          <div className="highlighted-text container">
            <h4 className="fs-45">Conclusion</h4>
            <p className="fs-30">
              {blogData?.payload?.conclusion}
              {/* Company’s in- house sales team is supported by a distribution network
          of multiple channels across India as well as key non-resident Indian
          (“NRI”) markets, such as the Gulf Cooperation Council, United Kingdom,
          Singapore and the United States. Macrotech Developers has over 90
          completed projects comprising a staggering 80 million square feet of
          developable area, of which over 60 million square feet is in
          affordable and mid income housing. Currently, Company is engaged in
          developing more than 50 ongoing and planned projects across 75+
          million square feet of area. Macrotech Developers has over 90
          completed projects comprising a staggering 80 million square feet of
          developable area, of which over 60 million square feet is in
          affordable and mid income housing. Currently, Company is engaged in
          developing more than 50 ongoing and planned projects across 75+
          million square feet of area. */}
            </p>
          </div>
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
            <div id="nightModeContainer" className="d-flex">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
