import React from 'react'

import classNames from 'classnames'

import 'assets/styles/components/Wrapper.scss'

export default function Wrapper({ children, colour, id, className }) {
    return (
        <div id={id} className={classNames('container', className)} style={{backgroundColor: colour}}>
            <div className="wrapper">
                {children}
            </div>
        </div>
    )
}
