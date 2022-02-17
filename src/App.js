import "./App.css";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App container-fluid ">
      <div className="d-flex flex-column  flex-md-row">
        <div
          style={{ backgroundColor: "#ffffff" }}
          className="col m-3 h-100 sidebar-nav "
        >
          <SideBar />
        </div>
        <div
          style={{ backgroundColor: "#ffffff" }}
          className="col-md-10 m-3 p-4 "
        >
          <div className="container">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
