import React from "react";
// import AddTodo from "./AddTodo";
// import TodoList from "./TodoList";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/users">Users</Link>
              </Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route component={About} path="/about"></Route>
            <Route component={Users} path="/users"></Route>
            <Route component={Home} path="/"></Route>
          </Switch>
        </BrowserRouter>
      </div>
      {/* <h1>Redux todo</h1> 
      <AddTodo />
      <TodoList /> */}
    </>
  );
};

export default App;
