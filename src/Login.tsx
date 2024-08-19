import { useState } from "react";
import Dialog from "./Dialog";
import { Auth } from "@supabase/auth-ui-react";
import { supaClient } from "./supa-client";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";

export const setReturnPath = () => {
  localStorage.setItem("returnPath", window.location.pathname);
};

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState<"sign_in" | "sign_up">("sign_in");
  return (
    <>
      <div className="m-4 flex place-items-center">
        <button
          onClick={() => {
            setShowModal(true);
            setAuthMode("sign_in");
          }}
        >
          Login
        </button>
        <span className="p-2"> or </span>
        <button
          onClick={() => {
            setShowModal(true);
            setAuthMode("sign_up");
          }}
        >
          Sign Up
        </button>
      </div>
      <Dialog
        open={showModal}
        dialogStateChange={(open) => setShowModal(open)}
        contents={
          <>
            {
              <Auth
                supabaseClient={supaClient}
                view={authMode}
                appearance={{
                  theme: ThemeSupa,
                  className: {
                    container: "login-form-container",
                    label: "login-form-label",
                    button: "login-form-button",
                    input: "login-form-input",
                  },
                }}
              />
            }
          </>
        }
      ></Dialog>
    </>
  );
};

export default Login;
