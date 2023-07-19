import Eachitem from "./eachitem";
import "./items.css";

const Productitems = ({ currentposts, currentpage }) => {
  const eachproduct = currentposts.map((ele, index) => {
    return (
      <Eachitem
        currentpage={currentpage}
        currentposts={currentposts}
        ele={ele}
        key={ele.productname}
        index={index}
      />
    );
  });
  return <div className="lists">{eachproduct}</div>;
};
export default Productitems;
