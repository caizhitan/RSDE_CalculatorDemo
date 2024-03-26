import { useContext, useEffect, useState } from "react";
import Loading from "../Component/Loading"
import { useNavigate } from "react-router-dom";
import { LoginContext, LoginContextType } from "../Context/LoginContext";
import { useMsal } from "@azure/msal-react";
import { LoginApi } from "../Services/loginApi";

const Redirect = () => {
    const { inProgress, accounts } = useMsal();
    const [token1, setToken] = useState(false);
    const { Logins } = useContext(LoginContext) as LoginContextType;
    const navigate = useNavigate();
    const { GetToken } = LoginApi();

    useEffect(()=>{
      if(inProgress){
        if(accounts[0]){
          GetToken().then(response=>{setToken(response)})
        }
      }
    },[inProgress, GetToken, accounts])

    useEffect(()=>{
      if(token1){
            if(Logins.LoginStatus){
                navigate('/home')
            }
      }
    },[token1, inProgress, Logins.LoginStatus, navigate])

    return(
        <div>
            <Loading/>
        </div>
    )
}

export default Redirect;