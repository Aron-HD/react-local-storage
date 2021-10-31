import { React, useState } from "react";

import * as styles from "../styles/dashboard.module.css";

const Dashboard = () => {
  // change to number as local storage only stores and returns string values
  const [homeScore, setHomeScore] = useState(() => {
    const saved = Number(localStorage.getItem("homeScore"));
    return saved || 0;
  });
  const [awayScore, setAwayScore] = useState(() => {
    const saved = Number(localStorage.getItem("awayScore"));
    return saved || 0;
  });

  localStorage.setItem("homeScore", homeScore);
  localStorage.setItem("awayScore", awayScore);

  return (
    <div className={styles.scoreControl}>
      <button
        className={styles.btn}
        onClick={() => setHomeScore(homeScore + 1)}
      >
        Home Goal
      </button>
      <button
        className={`${styles.btn} ${styles.red}`}
        onClick={() => {
          setHomeScore(0);
          setAwayScore(0);
        }}
      >
        Reset
      </button>
      <button
        className={styles.btn}
        onClick={() => setAwayScore(awayScore + 1)}
      >
        Away Goal
      </button>
    </div>
  );
};

export default Dashboard;
