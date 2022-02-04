import React from "react";
import styles from "../styles/CartItem.module.css";
import Image from "next/image";
function CartItem() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/img/11.png"
          alt="pizza"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2 className={styles.title}>Cheese Burst Pizza</h2>
    </div>
  );
}

export default CartItem;
