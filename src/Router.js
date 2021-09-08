import {
    Route,
    BrowserRouter,
    Switch,
} from "react-router-dom";
import Data from "./3 sep login";
import Home from "./Components/Home";
import Login from "./Components/login";
import { ProtectedRouter } from "./ProtectedRouter";



const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Data} />
                    <Route exact path="/registration" component={Data} />
                    <Route exact path="/login" component={Login} />
                    <ProtectedRouter exact path="/Home" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
