import {
    Route,
    BrowserRouter,
    Switch,
} from "react-router-dom";
import Data from "./3 sep login";
import Home from "./Components/Home";
import Login from "./Components/login";


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Data} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/Home" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
