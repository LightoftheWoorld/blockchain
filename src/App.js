import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import OTP from "./pages/OTP"
import Forgotpassword from "./pages/Forgotpassword"
import Overview from "./components/Overview";
import AuthLayout from "./components/shared/AuthLayout";
import Election from "./components/Election";
import Candidates from "./components/Candidates";
import Create from "./components/Create";
// import Layout from "./components/shared/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<Overview />} ></Route>
          <Route path="election" element={<Election />}></Route>
          <Route path="candidate" element={<Candidates />} ></Route>
          <Route path="create" element={<Create />} ></Route>
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />}></Route>
          <Route path="signup" element={<Signup />} ></Route>
          <Route path="forgotpassword" element={<Forgotpassword />} ></Route>
          <Route path="otp" element={<OTP />} ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
