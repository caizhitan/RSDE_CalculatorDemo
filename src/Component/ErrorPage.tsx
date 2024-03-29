const ErrorImage = require("../Images/Error.png");

const ErrorPage = () =>{
    return(
        <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "90vh", // Adjust this to fit your Pages
              }}
            >
              <img
                src={ErrorImage}
                alt="404 Error"
                style={{
                  width: "50%",
                  height: "auto",
                  marginBottom: "1rem", // Adjust this for spacing
                }}
              />
              <p className="text-BlueHeader font-black text-3xl">PAGE NOT FOUND</p>
            </div>
    )
}

export default ErrorPage;