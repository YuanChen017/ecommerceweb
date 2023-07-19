import { useState, useRef } from "react";
import "./loginmodal.css";
import {
  checkUser,
  checklogin,
  checksign,
  checkPwreset,
  checkadmir,
} from "../../../actions/statecheck";
import { useDispatch } from "react-redux";
import { personalProjectApi, emailReg } from "../../../common/accapi";

const Loginmodal = () => {
  const [isemail, setIsemail] = useState("");
  const [ispassword, setIspassword] = useState("");
  const validation = useRef(null);
  const dispatch = useDispatch();

  const valid = () => {
    const inputid = document.getElementById(validation.current.id);
    const errortext = document.getElementById("valid");
    setIsemail(validation.current.value);
    if (emailReg.test(validation.current.value)) {
      inputid.style.borderColor = "black";
      inputid.style.outlineColor = "black";
      errortext.style.display = "none";
      console.log("valid");
    } else {
      inputid.style.outlineColor = "red";
      inputid.style.borderColor = "red";
      errortext.style.display = "block";
      console.log("not valid");
    }
  };
  const checkacc = () => {
    let result = "";
    personalProjectApi
      .signIn({ email: isemail, password: ispassword })
      .then((response) =>
        response.json().then((res) => {
          result = res.status;
          console.log(result);
          if (result === true && isemail === "yuanc710@gmail.com") {
            checkUser(dispatch)(true);
            checkadmir(dispatch)(true);
          } else if (result === true) {
            checkUser(dispatch)(true);
            checkadmir(dispatch)(false);
          }
        })
      )
      .catch((e) => {
        alert(e.message);
      });
  };
  const handleclosesignin = () => {
    checklogin(dispatch)(false);
  };
  return (
    <div className="modalborder">
      <div className="title">
        <h1>Sign in to your account</h1>
        <button id="closebutton" onClick={handleclosesignin}>
          {" "}
          X{" "}
        </button>
      </div>
      <div className="mainmodal">
        <label for="email">Email</label>
        <br />
        <input
          ref={validation}
          name="email"
          id="email"
          placeholder="you@example.com"
          value={isemail}
          onChange={(e) => setIsemail(e.target.value)}
          onBlur={valid}
        />
        <br />
        <p id="valid">Invaild Email Input!</p>
        <label for="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="•••••••••••"
          value={ispassword}
          onChange={(e) => setIspassword(e.target.value)}
        />
        <br />
        <button id="signin" onClick={checkacc}>
          sign in
        </button>
        <div id="modifyaccount">
          <p>
            Dont have an account?{" "}
            <a
              onClick={() => {
                checksign(dispatch)(true);
              }}
            >
              Sign up
            </a>
          </p>
          <a
            onClick={() => {
              checkPwreset(dispatch)(true);
            }}
            id="resetpassword"
          >
            forget_passwords?
          </a>
        </div>
      </div>
    </div>
  );
};
export default Loginmodal;
