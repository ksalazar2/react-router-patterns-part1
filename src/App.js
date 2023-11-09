import './App.css';
import Home from './Home';
import Dog from './Dog';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import whiskey from "./whiskey.jpg";
import tubby from "./tubby.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/dogs' element={<Home dogs={props.dogs} />} />
          {props.dogs.map(dog => <Route key={dog.name} path={`/dogs/${dog.name}`} element={<Dog dogName={dog.name} age={dog.age} src={dog.src} facts={dog.facts} />} />)};
          <Route path='*' element={<Navigate replace to='/dogs' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: 'Whiskey',
      age: 5,
      src: whiskey,
      facts: [
        'Whiskey loves eating popcorn.',
        'Whiskey is a terrible guard dog.',
        'Whiskey wants to cuddle with you!'
      ]
    },
    {
      name: 'Duke',
      age: 3,
      src: duke,
      facts: [
        'Duke believes that ball is life.',
        'Duke likes snow.',
        'Duke enjoys pawing other dogs.'
      ]
    },
    {
      name: 'Perry',
      age: 4,
      src: perry,
      facts: [
        'Perry loves all humans.',
        'Perry demolishes all snacks.',
        'Perry hates rain.'
      ]
    },
    {
      name: 'Tubby',
      age: 4,
      src: tubby,
      facts: [
        'Tubby is really stupid.',
        'Tubby does not like walks.',
        'Angelina used to hate Tubby, but claims not to anymore.'
      ]
    }
  ]
}

export default App;
