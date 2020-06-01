import React from 'react';
import MockMobile from '../_Common/MockMobile'


const MockMobileSkeletonLoad = () => {
  return (
    <section className='section-about'>
      <MockMobile>
        <h2>Drew Love</h2>
        <h3>Full Stack Engineer</h3>
        <div class='mock-mobile-about-container'>
          <div class='mock-mobile-about-profile-pic'></div>

          <ul class='mock-mobile-unordered-list'>
            <li></li>
            <li></li>
          </ul>

          <div class='mock-mobile-dummy-text-box'></div>
        </div>
      </MockMobile>
    </section>
  );
};

export default MockMobileSkeletonLoad;
