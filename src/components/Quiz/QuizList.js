import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Question from './Question.js'

class QuizList extends Component{

   render(){
     return (
       <div className="questions">
            {
              this.props.questions.map(question => {
                if(question.id == this.props.current) /// If statement thats allow only one question to show up which is the current question
                return <Question
                question = {question}
                />
              })
            }
       </div>
     );
   }

}

export default QuizList;
