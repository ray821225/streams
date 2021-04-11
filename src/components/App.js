import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";

import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/stream/new" component={StreamCreate}></Route>
          <Route path="/stream/edit" component={StreamEdit}></Route>
          <Route path="/stream/delete" component={StreamDelete}></Route>
          <Route path="/stream/show" component={StreamShow}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
