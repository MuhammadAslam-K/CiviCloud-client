import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/handler"; // Ensure correct import
import './App.css'
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-slate-100">
      <BrowserRouter>
        <Routers />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
