import React from 'react';
import HeroImage from '../../illustration/hero-creative.svg';
import VideoPicture from '../../img/video_pic.png';
import Button from '../../components/button/button';
import Icon from '../../components/icons/icon';
import Card from '../../components/card/card';

// ? Import Icons
import PlusIcon from '../../icons/rumah-konten-icon/plus.svg';
import CloseIcon from '../../icons/rumah-konten-icon/close.svg';
import PauseIcon from '../../icons/rumah-konten-icon/pause.svg';
import LikesIcon from '../../icons/rumah-konten-icon/likes.svg';
import PlayIcon from '../../icons/rumah-konten-icon/play.svg';
import CutIcon from '../../icons/rumah-konten-icon/cut.svg';
import ResizeIcon from '../../icons/rumah-konten-icon/resize.svg';
import SquareIcon from '../../icons/rumah-konten-icon/square.svg';
import VisibleIcon from '../../icons/rumah-konten-icon/visible.svg';
import SoundIcon from '../../icons/rumah-konten-icon/sound.svg';

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

      <section className="highlight container bg-background  bg-no-repeat bg-cover">
        <div className="">
          {/* <img
            src={Background}
            alt="Splash Background"
            className="object-cover w-full absolute"
          /> */}

          <div className="badge  text-center  font-roboto pt-52">
            <span className="py-1.5 px-6 bg-highlight text-xl   font-bold text-blue-primary rounded-2xl">
              #Highlight
            </span>
            <h5 className="title-hightlight text-5xl font-bold mt-5">
              Lorem ipsum dolor sit <br /> amet, consectetur
            </h5>

            <p className="content-hightlight text-2xl text-content mt-3.5">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut
            </p>
          </div>

          <div className="video-gallery flex justify-center relative  top-32">
            <div className="container-image relative ">
              <img src={VideoPicture} alt="Video Gallery" className="rounded" />
              <div className="field-button bg-white px-6 pt-5 pb-6 opacity-80 h-fit shadow rounded-xl absolute top-24 -left-5">
                <Icon icon={PlayIcon} />
                <Icon icon={PauseIcon} />
                <Icon icon={PlusIcon} />
                <Icon icon={LikesIcon} />
                <Icon icon={CloseIcon} />
              </div>
              <div className="field-button bg-white px-6 pt-5 pb-6 opacity-80 h-fit shadow rounded-xl absolute bottom-24 -right-5">
                <Icon icon={VisibleIcon} />
                <Icon icon={SquareIcon} />
                <Icon icon={ResizeIcon} />
                <Icon icon={SoundIcon} />
                <Icon icon={CutIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product mt-48 container px-32">
        <div className="cards">
          <Card number={1} text="Pilih Paket" />
        </div>
      </section>
    </div>
  );
};

export default home;
