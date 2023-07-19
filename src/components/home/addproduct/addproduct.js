import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addproduct } from "../../../actions/productcheck";
import { checkaddproduct, checkadmir } from "../../../actions/statecheck";
import "./addproduct.css";
const AddProduct = () => {
  const [pdname, setPdname] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [imagelink, setImagelink] = useState("");
  const dispatch = useDispatch();
  const result = useSelector((state) => state.product);

  const product = {
    productname: pdname,
    productdesc: desc,
    category: category,
    price: price,
    quantity: qty,
    addtocart: 0,
    isaddqty: false,
    isdetail: false,
    imagelink: imagelink,
  };
  const handlesubmit = () => {
    addproduct(dispatch)(product);
    console.log(result);
    checkaddproduct(dispatch)(false);
    checkadmir(dispatch)(true);
  };
  return (
    <div className="addproductbody">
      <h1>Create Product</h1>
      <div className="addbody">
        <div id="product-name">
          <label>Product name</label>
          <br />
          <input
            type="text"
            name="product-name"
            value={pdname}
            onChange={(e) => {
              setPdname(e.target.value);
            }}
          />
        </div>
        <div id="description">
          <label>Product description</label> <br />
          <input
            type="text"
            name="description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="catandprice">
          {" "}
          <div id="category">
            <label>Category</label> <br />
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=""></option>
              <option value="Ipad">Ipad</option>
              <option value="Phone">Phone</option>
              <option value="TV">TV</option>
            </select>
          </div>
          <div id="price">
            <label>Price</label> <br />
            <input
              type="number"
              name="price"
              min="0"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="imageandqty">
          <div id="qty">
            <label>In Stock Quantity</label> <br />
            <input
              type="number"
              name="qty"
              min="0"
              value={qty}
              onChange={(e) => {
                setQty(e.target.value);
              }}
            />
          </div>
          <div id="imglink">
            <label>Add Image Link</label> <br />
            <input
              type="text"
              name="imglink"
              value={imagelink}
              onChange={(e) => {
                setImagelink(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="imageshow">
          <img src={imagelink} alt="image preview!" />
        </div>
        <button id="submit" onClick={handlesubmit}>
          ADD Product
        </button>
      </div>
    </div>
  );
};
export default AddProduct;
