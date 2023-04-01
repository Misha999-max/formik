import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./component/main";
import CreateUser from "./component/form/createUser";
import UpgreateUserPage from "./component/form/upgreateUser";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/main" component={Main} />
        <Route path="/createUser/:userId?" component={CreateUser} />
        <Route path="/upGreateUser/:userId?" component={UpgreateUserPage} />
      </Switch>
    </>
  );
}

export default App;
