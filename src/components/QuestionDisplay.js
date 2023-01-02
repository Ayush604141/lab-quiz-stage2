import React, { Component } from "react";
import questions from "../quizQuestion";

class QuestionDisplay extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  previousQuestion = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
      });
    }
  };
  nextQuestion = () => {
    if (this.state.number < questions.length-1) {
      this.setState({
        number: this.state.number + 1,
      });
    }
  };
  exitQuiz = () => {
    alert("Are you sure you want to quit ?");
    this.setState({
      number: 0,
    });
  };
  render() {
    return (
      <div className="questionBox">
        <div id="question">
          <h1>{questions[this.state.number].question}</h1>
        </div>
        <div className="questionNumber"><h2>{this.state.number + 1} out of {questions.length}</h2></div>
        <div className="Options">
          <button>{questions[this.state.number].optionA}</button>
          <button>{questions[this.state.number].optionB}</button>
          <button>{questions[this.state.number].optionC}</button>
          <button>{questions[this.state.number].optionD}</button>
        </div>
        <div className="navigationButtons">
          <button onClick={this.previousQuestion}>Previous</button>
          <button onClick={this.nextQuestion}>Next</button>
          <button onClick={this.exitQuiz}>Exit</button>
        </div>
      </div>
    );
  }
}

export default QuestionDisplay;
