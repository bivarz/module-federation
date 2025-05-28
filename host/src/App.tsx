import React, { Suspense, lazy } from "react";
import Main from "./components/Main";

const Header = lazy(() => import("headerApp/Header"));
const Footer = lazy(() => import("footerApp/Footer"));

const App: React.FC = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>

      <div className="container">
        <Main />
      </div>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
