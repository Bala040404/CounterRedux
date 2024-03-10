import { Provider } from "react-redux";
import store from "./store/store";
import Heading from "./Heading";
import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Heading />
      <Counter />
    </Provider>
  );
}

export default App;
