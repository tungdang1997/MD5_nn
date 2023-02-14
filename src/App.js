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

function App() {
  return (

    <>
        {/*/!*<C name></C>*!/*/}
        {/*/!*<D></D>*!/*/}
        {/*<E></E>*/}
        <Routes>
            <Route path={'/'} element={<Home></Home>}>
                <Route path={'/'} element={<ListStudent/>}></Route>
                <Route path={'/create-student'} element={<CreateStudent/>}></Route>
                <Route path={'/edit-student/:id'} element={<EditStudent/>}></Route>
            </Route>
            <Route path={'/admin'} element={<Admin></Admin>}></Route>
        </Routes>
    </>
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
