import React, {Component} from "react";
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'

class Stack extends Component {

  state = {
    display: 'front-end'
  }

  handleClick(e){
    const display = this.state.display === 'front-end' ? 'back-end' : 'front-end'
    this.setState({display})
  }

  render(){
    return(
      <>
        <section className="section-skills">
          <FrontEnd />
          <BackEnd />
        </section>
      </>
    )
  }
} 

export default Stack;
