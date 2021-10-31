import { React } from "react";
import HomeScore from "./HomeScore";
import AwayScore from "./AwayScore";

import * as styles from "../styles/scoreboard.module.css";

const Scoreboard = () => {
  return (
    <div className={styles.scoreBoard}>
      <h2 className={styles.scoreTitle}>Score</h2>
      <HomeScore score={0} />
      <AwayScore score={0} />
    </div>
  );
};

export default Scoreboard;
