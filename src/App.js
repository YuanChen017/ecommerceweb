import "./App.css";
import { useSelector } from "react-redux";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Homedesktop from "./components/home/home";
import Login from "./components/login/login";
import Cart from "./components/cart/cart";

function App() {
  const isuser = useSelector((state) => state.states.isuser);
  const iscart = useSelector((state) => state.states.iscart);
  return (
    <div className="App">
      <Header />
      {iscart && <Cart />}
      {isuser ? <Homedesktop /> : <Login />}
      <Footer />
    </div>
  );
}

export default App;
