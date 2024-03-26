import { useContext, useState } from "react";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useMsal } from "@azure/msal-react";
import { LoginContext, LoginContextType } from "../Context/LoginContext";

interface header {
  name? :String
}

const Burger = (props: header) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const { instance } = useMsal();
  const { saveLogin } = useContext(LoginContext) as LoginContextType;

  const handleLogout = () => {
    // instance.logoutRedirect({
    //   postLogoutRedirectUri: "/login",
    // });
    // //logout();
    saveLogin({
      Username: '',
      User: '',
      Token: '',
      RefreshToken:'',
      Admin: false,
      LoginStatus: false,
    });
    navigate("/login");
  };

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  const viewFile = () => {
    closeMenu();
    navigate("/home");
  };

  const cal1 = () => {
    closeMenu();
    navigate("/calculator");
  };

  const cal2 = () => {
    closeMenu();
    navigate("/calculator2");
  };

  const Header = "Hi " + props.name;

    return (
    <div className="flex items-center justify-center w-full">
      <nav>
        <section className="flex lg">
          <div
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
            <path fill="none" stroke="#1477F8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M36.1,7.5h2.4c1.1,0,2,0.9,2,2v3c0,1.1-0.9,2-2,2H18"/>
            <path fill="none" stroke="#1477F8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M13,14.5H9.5c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h21.3"/>
            <path fill="none" stroke="#1477F8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M13.3,27.5H9.5c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h20"/>
            <path fill="none" stroke="#1477F8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M35,20.5h3.5c1.1,0,2,0.9,2,2v3c0,1.1-0.9,2-2,2h-20"/>
            <path fill="none" stroke="#1477F8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M13.5,40.5h-4c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h19.6"/>
            <path fill="none" stroke="#1477F8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M34.2,33.5h4.3c1.1,0,2,0.9,2,2v3c0,1.1-0.9,2-2,2h-20"/>
            </svg>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-BlueHeader"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div>
                <h2 className="text-BlueHeader font-bold text-3xl pb-20 pl-5">{Header}</h2>
                <div className="flex flex-col">
                  <ul className="justify-center pl-5 pr-5">
                      <div className="bg-white p-3 rounded-xl my-5 flex flex-row items-center" onClick={viewFile}>
                          <InsertDriveFileIcon color="primary" fontSize="large"/>
                          <h4 className="text-BlueHeader text-l font-bold">View Files</h4>
                      </div>
                      <div className="bg-white p-3 rounded-xl my-5 flex flex-row items-center" onClick={cal1}>
                          <CalculateIcon color="primary" fontSize="large"/>
                         <h4 className="text-BlueHeader text-l font-bold">RS Centre End Throw Calculator</h4>
                      </div>
                      <div className="bg-white p-3 rounded-xl my-5 flex flex-row items-center" onClick={cal2}>
                          <CalculateIcon color="primary" fontSize="large"/>
                          <h4 className="text-BlueHeader text-l font-bold">RS Wind Over Turning Calculator</h4>
                      </div>
                      <div className="bg-white p-3 rounded-xl my-10 flex flex-row items-center justify-center" onClick={handleLogout}>
                          <LogoutIcon fontSize="large" />
                          <h4 className="text-l font-bold">Logout</h4>
                      </div>
                  </ul>
              </div>
            </div>
          </div>
        </section>
      </nav>
      <style>{`
    .hideMenuNav {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: -100%;
        background: #DEE9FA;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: left 0.4s ease-in-out;
    }

    .showMenuNav {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #DEE9FA;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: left 0.4s ease-in-out;
    }
`}</style>


    </div>
    )
}

export default Burger;
