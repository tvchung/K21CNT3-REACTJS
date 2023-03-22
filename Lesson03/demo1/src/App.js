import './App.css';
import ClassCompBanner from './components/ClassCompBanner';
import ClassCompDemo from './components/ClassCompDemo';
import FuncCompDemo from './components/FuncCompDemo';
import { FuncCompHeader, FuncCompMenu } from './components/FuncCompHeader';
import { MemberList } from './components/FuncMember';

function App() {
  return (
    <div className="App">
      <h1>ReactJS Component </h1>
      <div>
        <h2>Sử dụng function component</h2>
        <FuncCompDemo/>
        <FuncCompDemo name="Nguyễn Phú Trọng" address="125 Phùng hưng" />
      </div>
      <div>
        <FuncCompHeader />
        <FuncCompMenu />
      </div>
      <div>
        <ClassCompDemo 
          name="Chung Chung" 
          company="daihocnguyentrai.edu.vn" />
      </div>
      <div>
        <ClassCompBanner />
      </div>
      <div>
        <MemberList />
      </div>
    </div>
  );
}

export default App;
