import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import New from "./pages/New/New";
import Single from "./pages/Single/Single"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
         <Routes>
           <Route path="/" >
           <Route index element={<Home/>}/>
           <Route path="login" element={<Login/>}/>
           <Route path="list" element={<List/>}/>
           <Route path="new" element={<New/>}/>
           <Route path="single" element={<Single/>}/>
         </Route>
         
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
