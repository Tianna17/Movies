import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movies/MovieDetails";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movie/:movieId" component={MovieDetails} />
          </Switch>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
