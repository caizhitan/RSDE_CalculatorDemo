import React, { useState, createContext, useEffect} from 'react';

export interface ILogin {
    Username: string,
    User: string,
    Token: string,
    RefreshToken: string,
    Admin: boolean,
    LoginStatus: boolean,
}

interface Props  {
    children?: React.ReactNode,
};

export type LoginContextType = {
    Logins: ILogin;
    saveLogin: (Login: ILogin) => void;
}

export const LoginContext = createContext<LoginContextType | null>(null);

export function LoginProvider(props:Props) {
    const [Logins, setLogins] = useState<ILogin>(
        {
            Username: '',
            User: '',
            Token: '',
            RefreshToken:'',
            Admin: true,
            LoginStatus: false,
        }
    );

    const [user, setUser] = useState(() => getLocalStorage("user", Logins));

    useEffect(() => {
        setLocalStorage("user", user);
      }, [Logins, user]);

    const saveLogin = (Login: ILogin) => {
        const newLogin: ILogin = {
            Username: Login.Username,
            User: Login.User,
            Token: Login.Token,
            RefreshToken: Login.RefreshToken,
            Admin: Login.Admin,
            LoginStatus: Login.LoginStatus,
        };
        setLogins(newLogin);
        setUser(Login);
    };

    return(
        <LoginContext.Provider value={{Logins, saveLogin}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export function setLocalStorage(key:string, value:ILogin) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      
    }
  }
  
 export function getLocalStorage(key:string, initialValue:ILogin) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      return initialValue;
    }
  }