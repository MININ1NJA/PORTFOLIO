import React, { useEffect } from "react";
import "./App.css";
import About from "./partials/About";
import Card from "./partials/Card";
import Footer from "./partials/Footer";
import Skills from "./partials/Skills";
import data from "./assets/data";
import AOS from "aos";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from 'react-scroll-into-view'
// import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />

        <ScrollIntoView selector="./assets/data">
          <div className='mx-auto p-20'>
              
            <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500'/>

          </div>
        </ScrollIntoView>

        <Skills skills={data.skills} />
        <Footer github={data.social.github} />
      </div>
    </div>
  );
}
export default App;
