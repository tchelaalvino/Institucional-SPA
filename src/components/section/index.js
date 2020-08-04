import React, { useState } from 'react';

import banner from '../../assets/img/pexels-1095550.png';
import pineapple from '../../assets/img/pexels-photo-554875.png';
import potato from '../../assets/img/pexels-40011.jpg';
import lemon from '../../assets/img/pexels-40010.jpg';
import tomato from '../../assets/img/pexels-40012.jpg';
import avatar01 from '../../assets/img/avatar-10030.png';
import avatar02 from '../../assets/img/avatar-10020.png';
import avatar03 from '../../assets/img/avatar-10010.png';
import banana from '../../assets/img/pexels-40015.png';

const Section = () => {
  return (
    <div className="section">
      <Banner title="TYPE A TITLE" />
      <Wave />
      <div className="boll_exposed">
        <div className="container">
          <ExpBlockquote blockquote='"lorem lorem ipsum upsum"' />
          <ExpoImg
            text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
        <ExpoTrack />
        <Testimonials />
        <div className="container">
          <ExpoImgInv
            text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <ExpBlockquote blockquote='"lorem lorem ipsum upsum"' />
        </div>
      </div>
      <WaveF />
    </div>
  );
};

const Banner = (props) => {
  return (
    <div className="boll_banner">
      <img src={banner} className="h-auto w-100" alt="banner" />
      <div className="boll_text d-flex justify-content-start">
        <h2 className="text_banner text-bold text-left">{props.title}</h2>
      </div>
    </div>
  );
};

const Wave = () => {
  return (
    <div className="boll_diviser">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#00cba9" fillOpacity="0.5" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
      </svg>
    </div>
  );
};

const ExpBlockquote = (props) => {
  return (
    <div className="text-center w-75 d-flex flex-column m-auto">
      <blockquote className="exp_block">{props.blockquote}</blockquote>
    </div>
  );
};

const ExpoImg = (props) => {
  return (
    <div className="expo_image d-flex flex-column flex-md-row justify-content-around py-4">
      <p className="d-flex align-items-center expi_text pl-5">{props.text1}</p>
      <img
        className="image-border"
        src={pineapple}
        alt="554875"
      />
    </div>
  );
};

const ExpoTrack = () => {
  const [tracks] = useState([
    {
      image: potato,
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      time: 'time',
      fair: 'potato',
    },
    {
      image: lemon,
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      time: 'time',
      fair: 'lemon',
    },
    {
      image: tomato,
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      time: 'time',
      fair: 'tomato',
    },
  ]);

  return (
    <div className="expo_track py-4">
      <div className="d-flex flex-column flex-md-row justify-content-center">
        {tracks.map((track, index) => (
          <div className="card card_track text-white" key={index}>
            <img
              src={track.image}
              alt=""
              className="card-img w-100 h-100 front"
            />
            <div className={`back text-center ${track.fair}`}>
              <p className="card-title h5">{track.title}</p>
              <p className="card-text">{track.description}</p>
              <small className="card-text">{track.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [testimonials] = useState([
    {
      image: avatar01,
      title: 'Card 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      person: 'Fulana',
      active: 'active',
    },
    {
      image: avatar02,
      title: 'Card 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      person: 'Fulana',
      active: '',
    },
    {
      image: avatar03,
      title: 'Card 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      person: 'Fulana',
      active: '',
    },
  ]);

  return (
    <div className="testimonials my-4">
      <div className="carousel slide carousel-fade" data-ride="carousel" id="slideTestimonials">
        <ol className="carousel-indicators config_carousel">
          <li className="indicator active" data-slide-to="0" data-target="#slideTestimonials" />
          <li className="indicator" data-slide-to="1" data-target="#slideTestimonials" />
          <li className="indicator" data-slide-to="2" data-target="#slideTestimonials" />
        </ol>
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div className={`carousel-item ${testimonial.active}`} key={index}>
              <div className="card">
                <div className="card-header" />
                <div className="card-body">
                  <img src={testimonial.image} className="image_test" alt="x" />
                  <div className="quotes">
                    <p className="card-title h5">{testimonial.title}</p>
                    <p className="card-text">{testimonial.text}</p>
                    <span className="text-dark font-weight-bold">{testimonial.person}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExpoImgInv = (props) => {
  return (
    <div className="expo_image d-flex flex-column flex-md-row justify-content-around py-4">
      <img
        className="image-border"
        src={banana}
        alt="554875"
      />
      <p className="d-flex align-items-center pl-5">{props.text1}</p>
    </div>
  );
};

const WaveF = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#00cba9" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
    </svg>
  );
};

export default Section;
