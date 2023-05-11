import AppleSignin from "react-apple-signin-auth";
import { API } from "../../config";

const AppleSingin = () => {
  const responseApple = (res) => {
    console.log("@data", res);
  };

  return (
    <AppleSignin
      /** Auth options passed to AppleID.auth.init() */
      authOptions={{
        /** Client ID - eg: 'com.example.com' */
        clientId: API?.apple_client_id,
        /** Requested scopes, seperated by spaces - eg: 'email name' */
        scope: "email name",
        /** Apple's redirectURI - must be one of the URIs you added to the serviceID - the undocumented trick in apple docs is that you should call auth from a page that is listed as a redirectURI, localhost fails */
        redirectURI: `https://nepalipatro.dev.geniussystems.com.np/`,
        /** State string that is returned with the apple response */
        state: "state",
        /** Nonce */
        nonce: "nonce",
        response_mode: "form_post",
        response_type: "code",
        /** Uses popup auth instead of redirection */
        usePopup: true,
      }} // REQUIRED
      /** General props */
      uiType="light"
      /** className */
      className="apple-auth-btn w-100"
      /** Removes default style tag */
      noDefaultStyle={false}
      /** Allows to change the button's children, eg: for changing the button text */
      buttonExtraChildren="Login with Apple"
      /** Extra controlling props */
      /** Called upon signin success in case authOptions.usePopup = true -- which means auth is handled client side */
      onSuccess={(response) => responseApple(response)} // default = undefined
      /** Called upon signin error */
      onError={(error) => console.error(error)} // default = undefined
      /** Skips loading the apple script if true */
      /** for custom button */
      // render={(props) => (
      //   <button
      //     {...props}
      //     style={{
      //       display: "flex",
      //       alignItems: "center",
      //       border: "none",
      //     }}
      //   >
      //     <img
      //       src={"/images/apple.png"}
      //       alt="Apple Logo"
      //       style={{
      //         height: "40px",
      //         borderRadius: "3px",
      //       }}
      //     />
      //   </button>
      // )}
      skipScript={false} // default = undefined
    />
  );
};

export default AppleSingin;
