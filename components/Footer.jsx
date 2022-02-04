import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>{/* <Image src="/img/"/> */}</div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE DHANDA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            IIITDM Kancheepuram
            <br />
            Chennai
            <br />
            Tamil Nadu
          </p>
        </div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
};
