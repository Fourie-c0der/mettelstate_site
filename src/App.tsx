import React from "react";
import "./App.css";
import "./index.css";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Registration from "./components/Registration";
import Leaderboard from "./components/Leaderboard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Events />
      <Registration />
      <Leaderboard />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;