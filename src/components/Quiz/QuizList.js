import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Question from './Question.js'

class QuizList extends Component{

   render(){
     return (
       <div className="questions">
            {
              this.props.questions.map(question => {
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
