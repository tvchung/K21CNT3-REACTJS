import './App.css';
import EventForm1 from './components/EventForm1';
import EventForm2 from './components/EventForm2';
import EventForm3 from './components/EventForm3';
import ListItem from './components/ListItem';
import RenderCondition from './components/RenderCondition';
// import EventDemo1 from './components/EventDemo1';
// import EventDemo2 from './components/EventDemo2';
// import EventDemo3 from './components/EventDemo3';

function App() {
  return (
    <div className="App">
      <div>
        {/* <EventDemo1 />
        <EventDemo2 /> */}
        {/* <EventDemo3 name="Đại học nguyễn trãi"/> */}


      </div>
      <div>
        {/* react form  */}
        <EventForm1 />
        <EventForm2 />

        <hr/>
        <EventForm3 />

        {/* render có điều kiện  */}
        <RenderCondition />

        {/* list key */}
        <ListItem />
      </div>
    </div>
  );
}

export default App;
