import React from 'react'
import TrailIndexItem from './trail_index_item'

const TrailIndex = ({trails, park}) => {
    return (
        <ul className="trail-index">
            {trails.map((trail, idx) => (
                <TrailIndexItem key={trail.id} trail={trail} idx={idx} park={park}/>
            ))}
        </ul>
    )
}

export default TrailIndex