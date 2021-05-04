import React, { Component } from "react";

class ProjectScreen extends Component {
  state = {
    displayStack: false,
  };

  handleClick() {
    const displayStack = !this.state.displayStack;
    this.setState({ displayStack });
  }

  renderText() {
    if (!this.state.displayStack) {
      return <p className="project-image-text">{this.props.textDescription}</p>;
    } else {
      return (
        <>
          <p className="project-image-text">
            Front-End
            <ul>
              {this.renderStackDescription(this.props.stackDescription.front)}
            </ul>
          </p>
          {this.props.stackDescription.back.length
            ? this.renderBackEnd()
            : null}
          {this.props.stackDescription.apiCalls.length
            ? this.renderApiCalls()
            : null}
        </>
      );
    }
  }

  renderBackEnd() {
    return (
      <p className="project-image-text">
        Back-End
        <ul>{this.renderStackDescription(this.props.stackDescription.back)}</ul>
      </p>
    );
  }

  renderApiCalls() {
    return (
      <p className="project-image-text">
        API Calls
        <ul>
          {this.renderStackDescription(this.props.stackDescription.apiCalls)}
        </ul>
      </p>
    );
  }

  renderStackDescription(arr) {
    return arr.map((key) => {
      return <li>{key}</li>;
    });
  }

  render(props) {
    return (
      <>
        <img
          src={this.props.imgSrc}
          alt={this.props.altImg}
          className="project-image"
        />
        <div className="project-image-overlay">
          <div className="project-image-text-container">
            {this.renderText()}
          </div>
          <div className="project-image-item-container">
            <a className="project-image-item" href={this.props.url}>
              Visit
            </a>
            <button
              className={`project-image-item`}
              href=""
              onClick={() => this.handleClick()}
            >
              Stack
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectScreen;
