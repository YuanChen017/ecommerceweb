import { useDispatch, useSelector } from "react-redux";
import { trunoffdetail } from "../../../actions/productcheck";
import Changebtns from "../../../common/button/changebtns";
import { checkdetail } from "../../../actions/statecheck";
import "./itemdetail.css";
const Itemdetails = ({ index }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  return (
    <div className="itemdetail">
      <h1>
        Product Detail{" "}
        <span
          onClick={() => {
            trunoffdetail(dispatch)(index);
            checkdetail(dispatch(false));
          }}
        >
          X
        </span>
      </h1>
      <div className="detailbody">
        <div className="detailimage">
          <img src={product[index].imagelink} alt="headset" />
        </div>
        <div className="information">
          <p>{product[index].category}</p>
          <h2>{product[index].productname}</h2>
          <p>${product[index].price}</p>
          <p id="description">{product[index].productdesc}</p>
          <div className="detailbtns">
            <Changebtns index={index} />
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Itemdetails;
