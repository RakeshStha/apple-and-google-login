import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import GoogleSignin from "./GoogleSignin/GoogleSign";
import AppleSingin from "./AppleSignin/AppleSingin";
// import { detectDevices } from "../helper/generalHelper";

export const View = () => {
  const userData = window.localStorage.getItem("user");
  const [user, setUser] = useState();
  // const OS = detectDevices();

  useEffect(() => {
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [userData]);

  const logout = () => {
    localStorage.clear();
    setUser();
    toast.error("Logout Success full!");
  };

  return (
    <div className="containter mt-5">
      {user ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="card mt-4">
            <div className="card-body">
              <img src={user?.picture} alt="" />
              <p className="mt-3">
                <div className="row">
                  <div className="col d-flex justify-content-start">
                    <b>Name</b>
                  </div>
                  <div className="col d-flex justify-content-end">
                    {user?.name}
                  </div>
                </div>

                <div className="row">
                  <div className="col d-flex justify-content-start">
                    <b>Email</b>
                  </div>
                  <div className="col d-flex justify-content-end">
                    {user?.email}
                  </div>
                </div>
              </p>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body p-4">
              <h5 className="text-center mb-3">Please login to continue</h5>
              {/* {OS?.osName === "MacOS" && ( */}
              <div className="mb-3">
                <AppleSingin />
              </div>
              {/* // )} */}
              <GoogleSignin />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
