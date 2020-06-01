import React from "react";
import MockMobile from "./_Common/MockMobile";

const Home = () => {
  return (
    <section class='section-home'>
      <div class="word-bubble">
        <h2>Hi! I'm Drew.</h2>
        <p>I make full stack web applicaitons</p>
      </div>
      <div class="word-bubble-container">
        <div class="word-bubble-arrow"></div>
      </div>

      <div class='face-container'></div>
      <div class="face">
        <div class="haircut hair"></div>
        <div class="face-top">
          <div class="ear left"></div>
          <div class="sideburn left hair"></div>
          <div class="eye-container">
            <div class="eyebrow hair"></div>
            <div class="eye">
              <div class="iris"></div>
            </div>
          </div>
          <div class="nose"></div>
          <div class="eye-container">
            <div class="eyebrow hair"></div>
            <div class="eye">
              <div class="iris"></div>
            </div>
          </div>
          <div class="sideburn right hair"></div>
          <div class="ear right"></div>
        </div>
        <div class="beard hair">
          <div class="mouth">
            <div class="teeth"></div>
            <div class="tongue"></div>
          </div>
        </div>
      </div>
    </section>
    // {/* // <section className='section-about'>
    // // <MockMobile>
    // // <h2>Drew Love</h2>
    // // <h3>Full Stack Engineer</h3>
    // // <div class='mock-mobile-about-container'>
    // //     <div class='mock-mobile-about-profile-pic'></div>
    // //     <ul class='mock-mobile-unordered-list'>
    // //       <li></li>
    // //       <li></li>
    // //     </ul>
    // //     <div class='mock-mobile-dummy-text-box'></div>
    // //   </div>
    // // </MockMobile>
    // // </section> */}
  );
};

export default Home;
