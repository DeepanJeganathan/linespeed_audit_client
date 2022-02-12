import "./App.css";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App container-fluid ">
      <div className="d-flex flex-column  flex-md-row">
        <div
          style={{ backgroundColor: "#ffffff" }}
          className="col-md-3 m-3 h-100 "
        >
          <SideBar />
        </div>
        <div style={{ backgroundColor: "#ffffff" }} className="col-md-9 m-3">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
