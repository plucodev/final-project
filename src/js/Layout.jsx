import React from "react";
import { Home } from "./component/views/home.jsx"
import { Login } from "./component/views/login.jsx"
import { Signup } from "./component/views/signup.jsx"

export class Layout extends Flux.View {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/log-in" component={Login} />
                            <Route exact path="/sign-up" component={Signup} />
                            
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}