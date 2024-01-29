import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";
import Layout from "../Layout/Layout";


function MyRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
      <Route element={<Layout />}>  
          <Route path="/" element={<DashBoard/>}></Route>
          </Route>
      </Routes>
    </Router>
  );
}
export default MyRouter;
