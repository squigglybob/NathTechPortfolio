import React from 'react'

import './Wrapper.scss'

export default function Wrapper({ children, colour }) {
    return (
        <div className="container" style={{backgroundColor: colour}}>
            <div className="wrapper">
                {children}
            </div>
        </div>
    )
}