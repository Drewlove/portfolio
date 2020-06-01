import React, {useEffect} from "react";
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'

const Stack = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return(
      <>
        <section className="section-skills">
          <FrontEnd />
          <BackEnd />
        </section>
      </>
    )
  }

export default Stack;
