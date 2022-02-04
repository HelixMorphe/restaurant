import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCart from "./PizzaCart";
function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Wikis are enabled by wiki software, otherwise known as wiki engines. A
        wiki engine, being a form of a content management system, differs from
        other web-based systems such as blog software, in that the content is
        created without any defined owner or leader, and wikis have little
        inherent structure, allowing structure to emerge according to the needs
        of the users.
      </p>
      <div className={styles.wrapper}>
        <PizzaCart sourceurl="/img/11.png" />
        <PizzaCart sourceurl="/img/11.png" />
        <PizzaCart sourceurl="/img/11.png" />
        <PizzaCart sourceurl="/img/11.png" />
        <PizzaCart sourceurl="/img/11.png" />
        <PizzaCart sourceurl="/img/11.png" />
        <PizzaCart sourceurl="/img/11.png" />
        <PizzaCart sourceurl="/img/11.png" />
      </div>
    </div>
  );
}

export default PizzaList;
