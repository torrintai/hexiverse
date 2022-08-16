import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Trailmap from "./pages/Trailmap";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDQ9QPEn-EXGS-xvedOVRjGLMIPulj9hu0",

  authDomain: "torrin-ports.firebaseapp.com",

  projectId: "torrin-ports",

  storageBucket: "torrin-ports.appspot.com",

  messagingSenderId: "256918325641",

  appId: "1:256918325641:web:670f1c2093528aeb483958",

  measurementId: "G-P4NHW7KDVG"

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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
