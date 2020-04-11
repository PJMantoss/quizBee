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
      </div>
    )
  }
}

ReactDOM.render(
    <QuizBee />, document.getElementById('root')
);
