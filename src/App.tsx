import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="container">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
