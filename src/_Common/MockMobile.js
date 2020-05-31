import React from 'react'

const MockMobile = (props) => {
    return(
        <div className='mock-mobile-container'>
            <div className="mock-mobile-device">
                    <div className='mock-mobile-screen'>
                        {props.children}
                    </div>
                    <div className='mock-mobile-button'></div>
                </div>
        </div>
    )
}

export default MockMobile