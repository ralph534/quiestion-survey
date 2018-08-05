import React, { Component } from 'react';
import ReactDom from 'react-dom';



var ulStyle = {
  marginBottom: "40px",
  listStyle: "none"
};

var liStyle = {
  marginBottom: "10px"
}

class Question extends Component{




  render(){
    const {question} = this.props;
    return (
      <div className="well">
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group" style={ulStyle}>
            {
              this.props.question.choices.map(choice => {
                return(
                  <li className="list-group-item" style={liStyle}>
                  {choice.id}<input type="radio" name={question.id}  />{choice.text}
                  </li>
                )
              })
            }
        </ul>
      </div>
    );
  }

}

export default Question;
