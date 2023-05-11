import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { API } from "../../config";

const GoogleAuth = () => {
  const handleLogin = (credentialResponse) => {
    var data = jwtDecode(credentialResponse.credential);
    localStorage.setItem("user", JSON.stringify(data));
    window.location.reload();
    // call backend api and set access token and refresh token form api response
    //  localStorage.setItem("bearer ", res.access_token);
    //  localStorage.setItem("rt ", res.refresh_token);
  };

  return (
    <GoogleOAuthProvider clientId={API?.google_client_id}>
      <GoogleLogin onSuccess={handleLogin} />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
