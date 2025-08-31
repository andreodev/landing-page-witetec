import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "../App";
import SuccessPage from "../components/SuccessPage";

export default function RouteIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}
