import React from 'react';
import HeroImage from '../../illustration/hero-creative.svg';
import Background from '../../img/bg.png';
import Button from '../../components/button/button';
const home = () => {
  return (
    <div className="home container mx-auto  mt-24">
      <section className="hero font-roboto flex px-32">
        <div className="left-side basis-1/2">
          <span className="subtitle text-xs text-blue-primary font-bold">
            LOREM IPSUM DOLOR SIT AMET
          </span>
          <h3 className="title text-7xl font-bold mt-7">
            Lorem ipsum <br /> dolor sit amet, consectetur
          </h3>
          <p className="content text-2xl text-content mt-3.5 mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

          <Button
            text="Lets do it"
            color="bg-btn-primary"
            onClick={(e) => {
              alert(e.target.innerHTML);
            }}
          />
        </div>

        <div className="right-side  basis-1/2">
          <img src={HeroImage} alt="Creative Team" />
        </div>
      </section>

      <section className="highlight container mx-auto">
        <div className="w-full relative">
          <img
            src={Background}
            alt="Splash Background"
            className="object-cover w-full absolute"
          />

          <div className="badge">
            <span>#Highlight</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
