import { Textfile } from "../Textfile";
import shoppinglogo from "../header/cart.png";
import "./header.css";
import { checkcart, checklogin } from "../../actions/statecheck";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isuser = useSelector((state) => state.states.isuser);
  const product = useSelector((state) => state.product);
  let subtotal = 0;
  for (let i = 0; i < product.length; i++) {
    subtotal += product[i].price * product[i].addtocart;
  }
  const loginhandel = () => {
    if (!isuser) {
      checklogin(dispatch)(true);
    } else {
      checklogin(dispatch)(false);
    }
  };
  const handercart = () => {
    if (isuser) {
      checkcart(dispatch)(true);
    }
  };
  return (
    <div className="header">
      <h1>
        {Textfile.LOGO_TEXT}
        <span id="logo-text">{Textfile.LOGO_TEXT2}</span>
        <span id="logocompany">{Textfile.LOGO_COMPANY}</span>
      </h1>
      <input type="text" name="search" id="search" placeholder="Search" />
      <button className="search-icon">
        <i className="fa fa-search"></i>
      </button>
      <div className="signin" onClick={loginhandel}>
        <div id="signlogo">
          <div id="circle"></div>
          <div id="body"></div>
          <div id="star">&#9733;</div>
        </div>
        <p>{isuser ? Textfile.SIGN_OUT : Textfile.SIGN_IN}</p>
      </div>
      <div className="price" onClick={handercart}>
        <img src={shoppinglogo} alt="shoppingicon" />
        <p>${isuser ? (subtotal * 1.08).toFixed(2) : "0.00"}</p>
      </div>
    </div>
  );
};
export default Header;
