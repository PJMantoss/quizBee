import React from 'react'

export default function Result({score, playAgain}) {
    return (
        <div className="score-board">
            <div className="score"></div>
            <button className="playBtn"></button>
        </div>
    )
}
