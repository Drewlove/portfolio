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
      <div className='section-header'> 
      </div>
        <section className="section-skills">
          <div className='viewport-wrapper'><FrontEnd /></div>
          <div className='viewport-wrapper'><BackEnd /></div>     
        </section>
      </>
    )
  }
} 

export default Stack;
