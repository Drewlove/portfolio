import React from "react";

const Face = (props) => {
  return (
    <section className='section-face'>
      <div className="word-bubble">
        {props.children}
          {/* <h2>{props.title}</h2>
          <p>{props.text}</p> */}
      </div>
      <div className="word-bubble-container">
        <div className="word-bubble-arrow"></div>
      </div>

      <div className="face-container"></div>
      <div className="face">
        <div className="haircut hair"></div>
        <div className="face-top">
          <div className="ear left"></div>
          <div className="sideburn left hair"></div>
          <div className="eye-container">
            <div className="eyebrow hair"></div>
            <div className="eye">
              <div className="iris"></div>
            </div>
          </div>
          <div className="nose"></div>
          <div className="eye-container">
            <div className="eyebrow hair"></div>
            <div className="eye">
              <div className="iris"></div>
            </div>
          </div>
          <div className="sideburn right hair"></div>
          <div className="ear right"></div>
        </div>
        <div className="beard hair">
          <div className="mouth">
            <div className="teeth"></div>
            <div className="tongue"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Face;
