import CookieConsent from "react-cookie-consent";
import "./Popup.css";

function Popup() {
  return (
    <div>
      <h1 className="site-name">Eat This Much Cookie</h1>
      <CookieConsent
        debug={true}
        enableDeclineButton
        declineButtonText="Decline"
        buttonText="Accept"
        contentStyle={{ fontSize: "20px" }}
        buttonStyle={{
          background: "rgb(40,165,23)",
          fontSize: "20px",
          color: "white",
        }}
        declineButtonStyle={{ fontSize: "20px", color: "white" }}
        setDeclineCookie={false}
      >
        This site uses cookies to ensure optimal operation and correct display
        of content. By clicking the "Accept" button, you agree to the use of
        cookies. You can read more about cookies at the{" "}
        <a href="https://www.eatthismuch.com/privacy-policy/">
          link privacy policy.
        </a>{" "}
        If you do not want to accept cookies, you can reject them by clicking
        the "Decline" button.
      </CookieConsent>
    </div>
  );
}

export default Popup;
