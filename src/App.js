import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Listitems from "./Listitems";
import CreateList from './CreateList';
import EditList from './EditList';
import Listdetails from './Listdetails';

function App() {
  return (
    <div className="App">
      <h1>REACT INTERN TASK:CRUD OPERATIONS</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listitems/>} />
          <Route path="items/create" element={<CreateList/>}/>
          <Route path="items/edit/:SNO"    element={<EditList/>}/>
          <Route path="items/detail/:SNO" element={<Listdetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
