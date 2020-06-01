import React from "react";
import MockMobile from "../_Common/MockMobile";

const FrontEnd = () => {
  return (
    <MockMobile>
      <h2>Front-End</h2>
      <ul className='mock-mobile-unordered-list'>
        <li>
          <span>Javascript: ES6</span>
        </li>
        <li>
          <span>HTML\CSS</span>
        </li>
        <li>
          <span>React</span>
        </li>
        <li>
          <span>Jest</span>
        </li>
        <li>
          <span>jQuery</span>
        </li>
      </ul>
    </MockMobile>
  );
};

export default FrontEnd;
