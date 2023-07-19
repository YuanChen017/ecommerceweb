import { useSelector, useDispatch } from "react-redux";
import {
  addone,
  deleteone,
  changeqty,
  trunonqty,
  trunoffqty,
} from "../../actions/productcheck";
const Changebtns = ({ index }) => {
  const dispatch = useDispatch();

  const addtocart = useSelector((state) => state.product[index].addtocart);
  const isaddqty = useSelector((state) => state.product[index].isaddqty);
  return (
    <div id="changebtn">
      {isaddqty && addtocart !== 0 ? (
        <div id="addqty">
          <p>
            <span
              onClick={() => {
                if (addtocart === 1) {
                  trunoffqty(dispatch)(index);
                  deleteone(dispatch)(index);
                  changeqty(dispatch)(index, addtocart - 1);
                } else {
                  deleteone(dispatch)(index);
                }
              }}
            >
              -
            </span>
            {addtocart}
            <span
              onClick={() => {
                addone(dispatch)(index);
                changeqty(dispatch)(index, addtocart + 1);
              }}
            >
              +
            </span>
          </p>
        </div>
      ) : (
        <button
          id="add"
          onClick={() => {
            trunonqty(dispatch)(index);
            changeqty(dispatch)(index, addtocart + 1);
            console.log(index);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
};

export default Changebtns;
