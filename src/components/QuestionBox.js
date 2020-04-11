import React, { useState } from 'react'

const QuestionBox = ({question, options}) => {
    const [answer, setAnswer] = useState(options);

    return (
        <div className="questionBox">
            <div className="question">{question}</div>
        </div>
    )
}

export default QuestionBox
