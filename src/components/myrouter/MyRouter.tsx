import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";


function MyRouter(): JSX.Element {
  return (
    <Router>
      <Routes>  
          <Route path="/" element={<DashBoard/>}></Route>
      </Routes>
    </Router>
  );
}
export default MyRouter;
