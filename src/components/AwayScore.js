import React from "react";

import * as styles from "../styles/score.module.css";

const AwayScore = () => {
  return (
    <div className={styles.team}>
      <h2>Away</h2>
      <span className={styles.score}>{localStorage.getItem("awayScore")}</span>
    </div>
  );
};

export default AwayScore;
