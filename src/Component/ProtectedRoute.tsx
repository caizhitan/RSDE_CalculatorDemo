import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext, LoginContextType } from "../Context/LoginContext";

interface Props  {
    children?: React.ReactNode,
  };

const ProtectedRoute = (props:Props) =>{
    const { Logins } = useContext(LoginContext) as LoginContextType;
    const navigate = useNavigate();
    useEffect(()=>{
        const data = localStorage.getItem('user');
        const loginCredentials = data ? JSON.parse(data):'';
        if(loginCredentials !== ''){
            if(!loginCredentials.LoginStatus){
                navigate('/');
            }
      }
    },[Logins, navigate])
    return(
        <div>
            {props.children}
        </div> );
}

export default ProtectedRoute;