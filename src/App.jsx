import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes.jsx";
import ScrollToTop from "././core/components/ScrollToTop.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes />
    </BrowserRouter>
  );
}
