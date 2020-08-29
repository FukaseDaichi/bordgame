import React, { useEffect } from "react";
import styles from "../../contents/module/coin.module.scss";

const Coin = (props) => {
  useEffect(() => {}, []);

  return (
    <div>
      <div className={styles.floor}>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
        <div className={`${styles.line} ${styles.anim}`}></div>
      </div>
      <div className={`${styles.coin} ${styles.anim}`}>
        <div className={styles.edge}>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
