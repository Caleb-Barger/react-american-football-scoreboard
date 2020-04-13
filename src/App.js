//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeSocre] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [currentQuarter, setQuarter] = useState(1)
  const [currentDown, setDown] = useState(1)
  const [yrdsToGo, setYrds] = useState(10)
  const [ballOn, setBallPos] = useState(50)

  const homeTouchdown = event => {
    setHomeSocre(homeScore + 7)
  }
  const homeFieldGoal = event => {
    setHomeSocre(homeScore + 3)
  }
  const awayTouchdown = event => {
    setAwayScore(awayScore + 7)
  }

  const awayFieldGoal = event => {
    setAwayScore(awayScore + 3)
  }

  const addQuarter = event => {
    if (currentQuarter < 4){
      setQuarter(currentQuarter + 1)
    }
  }

  const hike = event => { // hike event handler

    let yardsGainedThisDown = Math.floor(Math.random() * Math.floor(11))

    setDown(currentDown + 1) // update the current down
    if (currentDown > 4){
      setDown(1)
    }

    setYrds(yrdsToGo - yardsGainedThisDown) // how many yards left

    setBallPos(ballOn - yardsGainedThisDown) // where is the ball on the feild
    if (yrdsToGo <= 0) {
      setDown(1)
      setYrds(10)
    }
    if (ballOn <= 0) {
      console.log('TOUCHDOWN!!')
      setDown(1)
      setBallPos(50)
    }
  }
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={currentQuarter} down={currentDown} yrdsToGo={yrdsToGo} ballOn={ballOn} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={homeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick={addQuarter} className="homeButtons__touchdown">Add Quarter</button>
          <button onClick={hike} className="homeButtons__touchdown">Hike!</button>
        </div>
        <div className="awayButtons">
          <button onClick={awayTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={awayFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
