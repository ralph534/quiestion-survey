import React, { Component } from 'react';
import Question from './components/Quiz/Question.js'
import QuizList from './components/Quiz/QuizList.js'
import ScoreBox from './components/Quiz/ScoreBox.js'
import Results from './components/Quiz/Results.js'


class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       questions: [
         {
           id: 1,
           text: 'What is your name?',
           choices: [
             {
               id: 'a',
               text:'Mikey'
             },
             {
               id: 'b',
               text:'Ralph'
             },
             {
               id: 'c',
               text:'Ludro'
             },
           ],
           correct: 'b'
         },
         {
           id: 2,
           text: 'What is your dogs name?',
           choices: [
             {
               id: 'a',
               text:'Prince Akeem'
             },
             {
               id: 'b',
               text:'Draco'
             },
             {
               id: 'c',
               text:'Ralo'
             },
           ],
           correct: 'a'
         },
         {
           id: 3,
           text: 'What programming language are you currently working on now?',
           choices: [
             {
               id: 'a',
               text:'React.js'
             },
             {
               id: 'b',
               text:'Python'
             },
             {
               id: 'c',
               text:'Ruby'
             },
           ],
           correct: 'a'
         },
         {
           id: 4,
           text: 'What did you do for your birthday this year?',
           choices: [
             {
               id: 'a',
               text:'Jet skiing'
             },
             {
               id: 'b',
               text:'Dinner Party'
             },
             {
               id: 'c',
               text:'Get Drunk'
             },
             {
               id: 'd',
               text:'All of the Above'
             },
           ],
           correct: 'd'
         },
       ],
       score: 0,
       current: 1
     }
   }




   setCurrent(current){
     this.setState({current})
   }

   setScore(score){
     this.setState({score})
   }

  render() {
    if(this.state.current > this.state.questions.length){
      var scorebox = "";
      var results = <Results {...this.state}/>
    }else{
      var scorebox = <ScoreBox {...this.state}/>
      var results = "";
    }


    return (
      <div className="App">
        {scorebox}

           <QuizList {...this.state}
             setCurrent={this.setCurrent.bind(this)}
             setScore={this.setScore.bind(this)}
              />
            {results}

      </div>
    );
  }
}

export default App;
