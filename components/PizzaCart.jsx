import Image from "next/image";
import React from "react";
import styles from "../styles/PizzaCart.module.css";
function PizzaCart({ sourceurl }) {
  return (
    <div className={styles.container}>
      <Image src={sourceurl} alt="pizza" width={500} height={500} />
      <h2 className={styles.title}>Pizza</h2>
      <span className={styles.price}>Rs.240</span>
      <p className={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>
    </div>
  );
}

export default PizzaCart;
