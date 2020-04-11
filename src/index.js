import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import quizService from './quizService';

class QuizBee extends Component {
  state = {
    questionBank: []
  }

  getQuestions = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      })
    })
  }

  componentDidMount(){
    this.getQuestions();
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">QuizBee</h1>
        {this.state.questionBank.length > 0 && this.state.questionBank.map(
          ({questions, answers, correct, questionId}) => <h4>{question}</h4>
        )}
      </div>
    )
  }
}

ReactDOM.render(
    <QuizBee />, document.getElementById('root')
);
