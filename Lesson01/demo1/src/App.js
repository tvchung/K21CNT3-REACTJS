import logo from './logo.svg';
import './App.css';

function App() {

  const element = <h1 className="greeting">Hello World</h1>;
  // sử dụng biểu thức jsx 
  // object
  const users = {
    firstName:"Chung",
    lassName:"Trịnh"
  }
  // function
  function formatName(user){
    return user.firstName + ' ' + user.lassName;
  }
  
  // biến
  const name="daihocnguyentrai.edu.vn";

  // tạo react element
  const element1 = (
    <div>
      <h1>Hello, {formatName(users)}</h1>
      <h2>Welcome to, {name}</h2>
    </div>
  );
  
  function sayWelcome(name){
    if(name){
      return <h3>Welcome to, {name}</h3>
    }else{
      return <h3>Welcome....</h3>
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        {/* biểu thức jsx */}
        {element}
        {element1}

        {sayWelcome("Chung Trịnh Văn")}
        {sayWelcome()}
        
      </div>
    </div>
  );
}

export default App;
