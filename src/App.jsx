import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { View } from "./components/View";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <View />
      <ToastContainer />
    </div>
  );
}

export default App;
