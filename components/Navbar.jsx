import styles from "../styles/Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>995-905-9501</div>
        </div>
      </div>
      <div className={styles.item}>center</div>
      <div className={styles.item}>right</div>
    </div>
  );
}

export default Navbar;
