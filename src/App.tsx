import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import About from "./Pages/About";
import Admin from "./Pages/Admin";
import Calculator from "./Pages/Calculator";
import Login from "./Pages/Login";
import Calculator2 from "./Pages/Calculator2";
import ProtectedRoute from "./Component/ProtectedRoute";

import ErrorPage from "./Component/ErrorPage";
import { LoginProvider } from "./Context/LoginContext";
import Redirect from "./Pages/Redirect";
import Home2 from "./Pages/Home2";


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