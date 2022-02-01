import React from "react";
import { Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import history from "../history";

import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" component={StreamCreate}></Route>
          <Route path="/streams/edit/:id" component={StreamEdit}></Route>
          <Route path="/streams/delete" component={StreamDelete}></Route>
          <Route path="/streams/show" component={StreamShow}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
