import React, {useEffect} from 'react'
import Face from './_Common/Face'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return(
    <Face>
        <h1>Yay! Let's email.</h1>
        <a class='contact-email' href = "mailto: d.andrewlove@gmail.com">d.andrewlove@gmail.com</a>
    </Face>
    )
}

export default Contact