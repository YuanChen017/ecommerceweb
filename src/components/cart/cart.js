import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { checkcart, checkerror } from "../../actions/statecheck";
import Itemincart from "./listitemincart/itemincart";
import { discountcode } from "./discount/discountmock";
import { returntotal } from "../../actions/totalcheck";
import { useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const [value, setValue] = useState(0);
  const product = useSelector((state) => state.product);

  let subtotal = 0;
  for (let i = 0; i < product.length; i++) {
    subtotal += product[i].price * product[i].addtocart;
  }
  let totalitems = 0;
  for (let i = 0; i < product.length; i++) {
    totalitems += product[i].addtocart;
  }

  const tax = subtotal * 0.08;
  const cartlist = product.map((ele, index) => {
    return (
      <li>
        <Itemincart index={index} />
      </li>
    );
  });
  const discounthandle = () => {
    discountcode
      .codecheck(code)
      .then((res) => setValue(res.value))
      .catch((res) => {
        setValue(0);
        alert(res.message);
      });
  };

  return (
    <div className="cart">
      <div className="cartheader">
        <p>
          Carts<span>({totalitems})</span>
        </p>
        <p
          id="cartclose"
          onClick={() => {
            checkcart(dispatch)(false);
          }}
        >
          {" "}
          x{" "}
        </p>
      </div>
      <div className="cartbody">
        <ul>{cartlist}</ul>
      </div>
      <div className="discountcode">
        <label for="code">Apply Discount Code</label>
        <br />
        <input
          type="text"
          name="code"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <button onClick={discounthandle}>Apply</button>
      </div>
      <div className="pricedetails">
        <p>
          Subtotals
          <span>${subtotal.toFixed(2)}</span>
        </p>
        <p>
          Tax
          <span>${tax.toFixed(2)}</span>
        </p>
        <p>
          Discount<span>${value.toFixed(2)}</span>
        </p>
        <p>
          Estimated total
          <span>${(subtotal + tax - value).toFixed(2)}</span>
        </p>
      </div>
      <button
        className="checkout"
        onClick={() => {
          checkerror(dispatch)(true);
          setValue(0);
        }}
      >
        Continue to checkout
      </button>
    </div>
  );
};
export default Cart;
