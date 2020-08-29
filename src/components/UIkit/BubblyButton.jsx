import React, { useEffect } from "react";
import styles from "../../contents/module/bubblyButton.module.scss";

const BubblyButton = (props) => {
  useEffect(() => {}, []);

  return (
    <button
      onClick={(e) => {
        props.onClick();
        e.preventDefault();
        e.target.classList.remove(styles.animate);

        e.target.classList.add(styles.animate);

        // 非同期用の処理
        e.persist();
        setTimeout(() => {
          e.target.classList.remove(styles.animate);
        }, 500);
      }}
      className={styles.bubblyButton}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default BubblyButton;
