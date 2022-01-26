import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Coin from "./Pages/Coin";
import Dice from "./Pages/Dice";
import NormalDice from "./Pages/NormalDice";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Coin} />
          <Route path="/coin" component={Coin} />
          <Route path="/dice" component={Dice} />
          <Route path="/normalDice" component={NormalDice} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
