import "./App.css";
import { MyInfoField } from "./components/MyInfoField";

function App() {
  return (
    <>
      <h1>React App with Styled Components Demo</h1>
      <MyInfoField label={"My info"} value={"Value for my info field"} />
    </>
  );
}

export default App;
