import React from "react";

import * as styles from "../styles/score.module.css";

const HomeScore = () => {
  return (
    <div className={styles.team}>
      <h2>Home</h2>
      <span className={styles.score}>{localStorage.getItem("homeScore")}</span>
    </div>
  );
};

export default HomeScore;
