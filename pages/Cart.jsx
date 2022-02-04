import React from "react";
import CartItem from "../components/CartItem";
import styles from "../styles/Cart.module.css";
function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CartItem />
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Cart;
