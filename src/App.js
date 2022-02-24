import "./App.css";
import Main from "./components/Main";
import RecentEntries from "./components/RecentEntries";
import AuditForm from "./components/AuditForm";
import SideBar from "./components/SideBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App container-fluid ">
      <div className="d-flex flex-column  flex-md-row">
        <div
          style={{ backgroundColor: "#ffffff" }}
          className="col  h-100 sidebar-nav "
        >
          <SideBar />
        </div>
        <div className="col-md-10">
          <div className="bg-light main-nav d-flex align-items-center justify-content-start border-bottom">
            <span className="px-2 blockquote text-primary">
              <i class="bi bi-megaphone px-1 "></i>
              Announcements: if you have any ideas for improvements, feel free
              to contact me. thanks deepan
            </span>
          </div>
          <div className="container h-100  m-3 p-4 ">
            <Switch>
              <Route exact path={"/"}>
                <Main></Main>
              </Route>
              <Route path={"/auditform"}>
                <AuditForm></AuditForm>
              </Route>
              <Route path={"/recent"}>
                <RecentEntries></RecentEntries>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
