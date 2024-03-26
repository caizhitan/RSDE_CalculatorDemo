import { useContext, useEffect, useState } from "react";
import Title from "../Component/Title";
import Burger from "../Component/Burger";
import { LoginContext, LoginContextType } from "../Context/LoginContext";

interface MenuTitle {
    text: String;
    name?: String;
}

const Menu = (props:MenuTitle) => {
    const [name , setName ] = useState('');
    const [admin, setAdmin ] = useState('');
    const { Logins } = useContext(LoginContext) as LoginContextType;

    useEffect(()=>{
        setName(Logins.Username);
        if(Logins.Username === ''){
          const localdata = localStorage.getItem('user')
          const data = localdata ? JSON.parse(localdata):'';
          setAdmin(data);

        }
    }, [Logins.Username])

    useEffect(()=>{
      if(admin !== ''){
        let values = Object.values(admin);
        setName(values[0])
      }
    },[admin])

    return (
            <div className="bg-BlueBG h-28">
              <div className="flex items-center content-center h-full text-lg">
                <div className="w-1/6 ">
                  <Burger name={name} />
                </div>
                <div className="w-4/6 ml-2 ">
                  <Title title={props.text}/>
                </div>

              </div>

          </div>
    )
}


export default Menu;
