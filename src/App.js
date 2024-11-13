import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, ListItem, Wrapper, Item } from "./styled";

export default () => (
  <HashRouter>
    <Wrapper>
      <Item>
        <ListItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </ListItem>
      </Item>
    </Wrapper>
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);
