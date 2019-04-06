import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route } from "react-router-dom";

import routes from "./routes";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    {routes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                        />
                    ))}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
