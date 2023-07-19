import Productpage from "./productpage/pdpage";
import AddProduct from "./addproduct/addproduct";
import Errorpage from "../home/error/error";
import { useSelector } from "react-redux";

const Homedesktop = () => {
  const isadd = useSelector((state) => state.states.isadd);
  const iserror = useSelector((state) => state.states.iserror);
  return (
    <>{isadd ? <AddProduct /> : iserror ? <Errorpage /> : <Productpage />}</>
  );
};
export default Homedesktop;
