import { useMsal } from '@azure/msal-react';
import { useContext } from 'react';
import { LoginContextType, LoginContext } from '../Context/LoginContext';
import env from '../env';

export const LoginApi = () => {
  const { instance, accounts } = useMsal();
  const { saveLogin } = useContext(LoginContext) as LoginContextType;

  const silentTokenRequest = {
    account: accounts[0],
    scopes: [env.REACT_APP_LOGINSCOPE]
  }

  const GetToken = async() => {
    
      let JWTtoken =  instance.acquireTokenSilent(silentTokenRequest)
      .then(res =>{
        const token = parseJwt(res.accessToken)
        const slicedToken = token.name;
        const groups = token.groups;
        //Check if it is user
        if(groups.includes(env.REACT_APP_USER)){
          saveLogin({
            Username: slicedToken,
            User: slicedToken,
            Token: token,
            RefreshToken: JWTtoken.toString(),
            Admin: false,
            LoginStatus: true
          });
          //check if user is admin
          if(groups.includes(env.REACT_APP_ADMIN)){
            saveLogin({
              Username: slicedToken,
              User: slicedToken,
              Token: token,
              RefreshToken: JWTtoken.toString(),
              Admin: true,
              LoginStatus: true
            });
          }
        }
        else{
          saveLogin({
            Username: slicedToken,
            User: slicedToken,
            Token: token,
            RefreshToken: JWTtoken.toString(),
            Admin: false,
            LoginStatus: false
          });
        }
      })
      return true;
  }
  return { GetToken }
}

function parseJwt (JWTtoken:string) {
    var base64Url = JWTtoken.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

    return JSON.parse(jsonPayload);
}
  
