import Loginmodal from "./logincontext/loginmodal";
import Signupmodal from "./signupcontext/signup";
import ResetModal from "./pwreset/resetmodel";
import Sendmail from "./sendmail/sendmail";
import { useSelector } from "react-redux";

const Login = () => {
  const islogin = useSelector((state) => state.states.islogin);
  const issignup = useSelector((state) => state.states.issignup);
  const ispwreset = useSelector((state) => state.states.ispwreset);
  const isemail = useSelector((state) => state.states.isemail);
  return (
    <>
      {islogin && <Loginmodal />}
      {issignup && <Signupmodal />}
      {ispwreset && <ResetModal />}
      {isemail && <Sendmail />}
    </>
  );
};

export default Login;
