import React from 'react'

export default function Operation(props) {
    const {op} = props

    return (
        <div className ='button operation'>
            {op}
        </div>
    )
}
