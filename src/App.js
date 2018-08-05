import React, { Component } from 'react';
import logo from './logo.svg';
import Question from './components/Quiz/Question.js'
import QuizList from './components/Quiz/QuizList.js'

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

  render() {
    return (
      <div className="App">
           <QuizList {...this.state} />
      </div>
    );
  }
}

export default App;
