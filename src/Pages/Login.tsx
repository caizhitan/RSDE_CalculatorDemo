import ButtonLogin from '../Component/ButtonLogin'; 
import { loginRequest } from '../Auth/authConfig';
import { useMsal } from '@azure/msal-react';
import { useContext, useState } from 'react';
import Loading from '../Component/Loading';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoginContext, LoginContextType } from '../Context/LoginContext';

const DataPNG = require("../Images/DataDB.png");

const Login = () => {
  const { instance } = useMsal();
  const [ loginPressed, setLoginPressed ] = useState(true);
  const { saveLogin } = useContext(LoginContext) as LoginContextType;
  
  const HandleLogin = async () => {
    setLoginPressed(true);

  
    saveLogin({
      Username: 'user',
      User: 'token',
      Token: 'token',
      RefreshToken: 'token',
      Admin: true,
      LoginStatus: true
    });
    
  }

  const LoginInProgress = () => {
    return(
      <Navigate to={'/home'}/>
    )
  }

  const LoginPage = () => {

    return (
      <div className="flex flex-col h-screen bg-BlueHeader">
        <div className="flex items-end flex-grow">
          <div className="flex-col justify-center content-center flex-grow text-center space-y-20">
            <h2 className="text-white text-8xl font-SF-Pro-Text-Bold font-extrabold">RSDE</h2>
            <ButtonLogin text="Login" onClick={HandleLogin} />
          </div>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <img src={DataPNG} alt="Data PNG" className="w-5/6 h-3/6" />
        </div>
      </div>
    );
  }
  return loginPressed? LoginInProgress() : LoginPage();

};
export default Login;