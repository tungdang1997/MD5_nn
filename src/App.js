import logo from './logo.svg';
import './App.css';
import C from "./cc";
import D from "./dd";
import E from "./dd";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import EditStudent from "./pages/students/EditStudent";
import CreateStudent from "./pages/students/CreateStudent";
import ListStudent from "./pages/students/ListStudent";
import MyClock from "./components/test";
import DeleteStudent from "./pages/students/DeleteStudent";


function App() {
  return (
      <div className="App">

    <>
        {/*/!*<C name></C>*!/*/}
        {/*/!*<D></D>*!/*/}
        {/*<E></E>*/}
        <Routes>
            <Route></Route>
            <Route path={'/'} element={<Home></Home>}>
                <Route path={'/'} element={<ListStudent/>}></Route>
                <Route path={'/create-student'} element={<CreateStudent/>}></Route>
                <Route path={'/edit-student/:id'} element={<EditStudent/>}></Route>
                <Route path={'/delete-student/:id'} element={<DeleteStudent/>}></Route>
            </Route>
            <Route path={'/admin'} element={<Admin></Admin>}></Route>
        </Routes>
    </>
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
