import React, { useTransition } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email);
    // console.log(password);

    if (!email && !password) {
      // swal({ title: "Alert", text: `${t("alert1")}`, icon: "warning" });
      toast(`${t("alert1")}`);
      // alert(`${t("alert1")}❗`);
      console.log("Email and password required");
    } else if (!email) {
      alert(`${t("alert2")}❗`);
      console.log("Email required");
    } else if (!password) {
      alert(` ${t("alert3")}❗`);
      console.log("Password required");
    } else if (email === "name@example.com" && password === "12345678") {
      alert(`${t("alert4")} 🚀`);
      console.log("Login Success");
      navigate("/home");
    } else if (email !== "name@example.com" || password !== "12345678") {
      alert(`${t("alert5")} ❌`);
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
          <option value="en">English</option>
          <option value="de">German</option>
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
                alert("Forgot Password page coming 🔜");
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
    </>
  );
};

export default Login;
