import React from 'react'

export default function Input({ name, multi=false, ...other }) {

    if ( multi ) {
        return (
            <textarea
                name={name}
                id={name}
                placeholder={name[0].toUpperCase() + name.slice(1,name.length)}
                rows="4"
                required
                {...other}
            />
        )
    } else {
        return (
            <input
                type="text"
                name={name}
                id={name}
                placeholder={name[0].toUpperCase() + name.slice(1,name.length)}
                required
                {...other}
            />
        )
    }
}
