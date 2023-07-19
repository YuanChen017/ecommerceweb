import { useState } from "react";
import Productitems from "../productitems/items";
import { useDispatch, useSelector } from "react-redux";
import { checkaddproduct, checkadmir } from "../../../actions/statecheck";
import Pagination from "./pagination/pagination";
import "./pdpage.css";
const Productpage = () => {
  const dispatch = useDispatch();
  const isadmir = useSelector((state) => state.states.isadmir);
  const [currentpage, setCurrentpage] = useState(1);
  const product = useSelector((state) => state.product);
  const totoalposts = product.length;
  const postperpage = 8;

  const indexoflastpost = currentpage * postperpage;
  const indexoffirstpost = indexoflastpost - postperpage;
  const currentposts = product.slice(indexoffirstpost, indexoflastpost);
  const paginate = (number) => {
    setCurrentpage(number);
    checkadmir(dispatch)(true);
  };
  return (
    <>
      <div className="wholedesktop">
        <div className="desktop-header">
          <h1>Product</h1>
          <div className="controls">
            <select name="filter" id="filter">
              <option value="Last-added">Last added</option>
              <option value="Price:increase">Price: low to high</option>
              <option value="Price:decrease">Price: high to low</option>
            </select>
            {isadmir ? (
              <button
                id="add-product"
                onClick={() => checkaddproduct(dispatch)(true)}
              >
                Add Product
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="homebody">
          <Productitems currentposts={currentposts} currentpage={currentpage} />
          <Pagination
            postperpage={postperpage}
            totoalposts={totoalposts}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};
export default Productpage;
