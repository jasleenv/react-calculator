import React from 'react'

export default function Number(props) {
const {value} = props


    return (
        <div className="number button">
            {value}
        </div>
    )
}
