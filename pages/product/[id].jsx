import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
function Product() {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/11.png",
    name: "Cheese burst",
    price: [
      { id: 1, name: "Small", amount: 200 },
      { id: 2, name: "Medium", amount: 400 },
      { id: 3, name: "Large", amount: 500 },
      { id: 4, name: "XL", amount: 900 },
    ],
    desc: "Lorem ipsum dolor sit asda dasb asd kasdb dasbd sdkjasdk.",
  };
  const handleClick = (x) => {
    setSize(x);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            alt={pizza.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>Rs.{pizza.price[size].amount}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose your size</h3>
        <div className={styles.sizes}>
          {pizza.price.map((item, index) => (
            <div
              key={item.id}
              className={styles.size}
              style={{
                borderColor: size === index ? "#bb371a" : "rgba(0,0,0,0.7)",
                backgroundColor: size === index ? "#bb371a" : "transparent",
                color: size === index ? "white" : "black",
              }}
              onClick={() => {
                handleClick(index);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
        <h3 className={styles.additional}>Add Additional Ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Cheese</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Product;
