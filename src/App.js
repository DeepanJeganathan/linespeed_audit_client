import "./App.css";
import Main from "./components/Main";
import RecentEntries from "./components/RecentEntries";
import AuditForm from "./components/AuditForm";
import SideBar from "./components/SideBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App ">

<div className="container-fluid">
      <div className="row">
      <SideBar />

      <main className="col-md-9 ms-sm-auto col px-md-4 main-content">
        
        
        <div className="container ">
        <div className="  bg-light d-flex my-1 align-items-center justify-content-start border-bottom">
          <span className="px-2  blockquote d-flex">
            <i className="bi bi-megaphone px-3 text-primary"></i>
            <div className="text-muted main-nav  d-flex ">If you encounter any issues submitting audit form, send me an email perferably with screen capture- Deepan</div> 
          </span>
        </div>
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
        
      
      </main>
      </div>
      
      </div>
    </div>

  );
}

export default App;
