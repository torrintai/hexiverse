import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Trailmap from "./pages/Trailmap";
import Projects from "./pages/Projects";
import Concept from "./pages/Concept";
import Tokenomics from "./pages/Tokenomics";
import Socials from "./pages/Socials";
import Market from "./pages/Market";
import Hexial from "./pages/Hexial";
import Freqaqs from "./pages/Freqaqs";
import Gameover from "./pages/Gameover";
import Hex1q1 from "./pages/Hex1q1";
import Hex1q2 from "./pages/Hex1q2";
import Hex1q3 from "./pages/Hex1q3";
import Hex1q4 from "./pages/Hex1q4";
import Hex1winner from "./pages/Hex1winner";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const NewQuote = React.lazy(() => import("./pages/NewQuote.js"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail.js"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/trailmap">
            <Trailmap />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/concept">
            <Concept />
          </Route>
          <Route path="/tokenomics">
            <Tokenomics />
          </Route>
          <Route path="/socials">
            <Socials />
          </Route>
          <Route path="/market">
            <Market />
          </Route>
          <Route path="/freqaqs">
            <Freqaqs />
          </Route>
          <Route path="/hexial">
            <Hexial />
          </Route>
          <Route path="/gameover">
            <Gameover />
          </Route>
          <Route path="/hex1q1">
            <Hex1q1 />
          </Route>
          <Route path="/hex1q2">
            <Hex1q2 />
          </Route>
          <Route path="/hex1q3">
            <Hex1q3 />
          </Route>
          <Route path="/hex1q4">
            <Hex1q4 />
          </Route>
          <Route path="/hex1winner">
            <Hex1winner />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
    
  );
}

export default App;
