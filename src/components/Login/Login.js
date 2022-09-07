import React, { useTransition } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Login/Login.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email && !password) {
      toast.warn(`${t("alert1")} ❗`, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Email and password required");
    } else if (!email) {
      toast.warn(`${t("alert2")} ❗`, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Email required");
    } else if (!password) {
      toast.warn(`${t("alert3")} ❗`, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Password required");
    } else if (email === "name@example.com" && password === "12345678") {
      toast.success(`${t("alert4")} 🚀`, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Login Success");
      navigate("/home");
    } else if (email !== "name@example.com" || password !== "12345678") {
      toast.error(`${t("alert5")} ❌`, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Login Failed");
    }
  };

  const toggleLanguage = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };
  return (
    <>
      <div className="languageSelector">
        <p>{t("languageSelector")}</p>
        <select name="languageSelect" onChange={toggleLanguage}>
          <option value="en">English 🇬🇧</option>
          <option value="de">German 🇩🇪</option>
        </select>
      </div>

      <div className="container">
        <div className="loginContainer">
          <h5>{t("header1")}</h5>
          <h2>{t("header2")}</h2>
          <p> {t("description")}</p>
          <form className="form" onSubmit={handleSubmit}>
            <label> {t("label1")}</label>
            <input type="email" name="email" placeholder="name@example.com" />

            <label>{t("label2")}</label>
            <input
              type="password"
              name="password"
              placeholder={t("passwordPlaceholder")}
            />
            <button className="loginBtn">{t("logIn")}</button>
          </form>
          <div className="usePasswordCheckbox">
            <div>
              <input type="checkbox" name="checkbox" />
              <small>{t("usePasswordCheckbox")}</small>
            </div>

            <a
              href="#"
              onClick={() => {
                // alert("Forgot Password page coming 🔜");
                toast.info(`Forgot Password page coming 🔜`, {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              {t("forgetPassword")}
            </a>
            <hr />
            <button className="signUpBtn">{t("signUpNow")}</button>
          </div>
        </div>
        <div className="greetingContainer">
          <h4>{t("header3")}</h4>
          <h2>{t("header4")}</h2>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
