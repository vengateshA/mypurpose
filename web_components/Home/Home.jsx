import React from 'react';
import About from '../About/About';
import './Home.css'
import Navbar from '../Navbar/Navbar';
import { FcAssistant } from "react-icons/fc";

import { ImStatsBars } from "react-icons/im";
import { AiOutlineCloudUpload } from "react-icons/ai";

import ReactPlayer from 'react-player'

const video = 'src\component\video\weld_video.mp4'

function Home() {
  return (
    <>  
    
  
      <div className='home_background '>
      <div className='home_box'>


   </div>

      <div className='home_ani'>

        Let's Start Journey <br /> <span className='withus' > with us </span>
      </div>
      <div className='home_ani1 text-center'>
        <AiOutlineCloudUpload />
        Start Your Own Project


      </div>
      <div className='home_ani2 text-center'>
        <FcAssistant />  Best Idea for Business
      </div>
      <div className='home_ani3 text-center'>
        <ImStatsBars /> We Are Digital Expert
      </div>


      {/* <div className='container '>

        <div className='text-center home_ani4'>
          About As</div>
        <div className='home_ani5 container d-flex justify-content-center  p-2'>
          Zeekers Technology solutions Pvt Ltd (ZTS) is a research-intensive company founded in the year 2023 with an aspiration to provide economical IoT and AI based solutions for agriculture automation, Industry 4.0 and smart mobility.
          It also aims to develop autonomous driving systems, advanced driver assist systems (ADAS) to meet the expectations of next generation mobility. <br /> <br />

          We specialise in using multi sensor integration such as camera, IMU, Lidar, Radar required for autonomous vehicle development. <br /> <br />
          The company has an excellent infrastructure to develop custom made PCBs for developing IoT systems indigenously. <br />  <br />

          As a company, it promotes open-source software for all the product developments. The company has a policy of “Employees first” providing conducive environment for the people to work and take care of their wellbeing.

        </div>

        <div className='text-center home_ani4'>
          Future Vision</div>
        <div className='home_ani5 container d-flex justify-content-center p-2 '>
          Making IoT, AI and robotics affordable to all by developing innovative solutions to improve the experience, productivity of public and industry respectively This is vision to create future for the World
        </div>

        <div className='text-center home_ani4'>
          Mission</div>
        <div className='home_ani5 container d-flex justify-content-center p-2 '>
          Full-fledged AI enabled welders’ helmet by 2023 and placing Zeekers as a prominent player in the welding industry.
          Brining an indigenous retrofittable autonomous steering system for tractors by 2026 IoT and AI based solutions for mass applications.
        </div>

      </div> */}

{/* 
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000  ">
            <img
              src="https://media.istockphoto.com/id/811314000/photo/colorful-empty-background.webp?b=1&s=170667a&w=0&k=20&c=V-gZETyiS0JCGhq6oOKnKz5NOGb3NiCt6ox245xLPi8="
              class="size"
              alt="..." />
            <div class="carousel-caption     ">
              <h5 className='text-center'>First one</h5>
              <p className='color'>Some of them.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://media.istockphoto.com/id/811314000/photo/colorful-empty-background.webp?b=1&s=170667a&w=0&k=20&c=V-gZETyiS0JCGhq6oOKnKz5NOGb3NiCt6ox245xLPi8="
              class="size" alt="..." />
            <div class="carousel-caption">
              <h5>Second one</h5>
              <p>Some of them</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://media.istockphoto.com/id/811314000/photo/colorful-empty-background.webp?b=1&s=170667a&w=0&k=20&c=V-gZETyiS0JCGhq6oOKnKz5NOGb3NiCt6ox245xLPi8="
              class="size" alt="..." />
            <div class="carousel-caption">
              <h5>Third </h5>
              <p>Some of them</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
      <div >


      </div>
      <div className='quotes'>
        <div>
        In most things success depends on knowing how long it takes to succeed
        </div>
      </div>



    </div>
    </>

  );
}

export default Home;