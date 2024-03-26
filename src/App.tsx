import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import About from "./Layout/About";
import Admin from "./Layout/Admin";
import Calculator from "./Layout/Calculator";
import Login from "./Layout/Login";
import Calculator2 from "./Layout/Calculator2";
import ProtectedRoute from "./Component/ProtectedRoute";

import ErrorPage from "./Component/ErrorPage";
import { LoginProvider } from "./Context/LoginContext";
import Redirect from "./Layout/Redirect";
import Home2 from "./Layout/Home2";


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/" element={<Navigate to={"/login"} replace />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/home" element={
            <ProtectedRoute>
              <Home2 />
            </ProtectedRoute>} />
          <Route path='/redirect' element={<Redirect />} />
          <Route path="/calculator" element={
            <ProtectedRoute>
              <Calculator />
            </ProtectedRoute>} />
          <Route path="/calculator2" element={
            <ProtectedRoute>
              <Calculator2 />
            </ProtectedRoute>} />
          
          <Route path="*" element={<ErrorPage/>}/>
         
      </Route>
    )
  );
  
  return (
    <div>
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </div>
  );
}

export default App;