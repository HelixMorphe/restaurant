import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Carousel.module.css";
function Carousel({ arrayItems }) {
  const [click, setClick] = useState("");
  const [transform, setTranform] = useState(0);
  const [transition, setTransition] = useState("all 0.5s ease-in-out");
  const [items, setItems] = useState([...arrayItems]);
  const handleNext = () => {
    setTranform(transform + 1);
  };
  const handlePrev = () => {
    setClick("prev");
    setTranform(-(transform + 1));
  };
  const rotateArray = (arr, click) => {
    if (click === "prev") {
      let last = arr.pop();
      arr.unshift(last);
      setClick("");
      return arr;
    } else {
      let first = arr.shift();
      arr.push(first);
      setClick("");
      return arr;
    }
  };
  const transitionEnd = () => {
    let array = [...items];
    let result = rotateArray(array, click);
    setItems(result);
    setTransition("none");
    setTranform(0);
    setTimeout(() => {
      setTransition("all 1s ease-in-out");
    });
  };
  useEffect(() => {
    setInterval(() => {
      handleNext();
    }, 6000);
  }, []);
  return (
    <div className={styles.Container}>
      <div className={styles.Carousel}>
        <div
          onTransitionEnd={transitionEnd}
          className={styles.Slider}
          style={{
            transform: `translate(${-(100 / items.length) * transform}%)`,
            transition: `${transition}`,
            width: `${100 * items.length}%`,
          }}
        >
          {items.map((item, index) => (
            <section key={index} className={styles.imgContainer}>
              <Image
                src={item}
                alt={`featured ${index}`}
                layout="fill"
                objectFit="contain"
                // objectPosition="center"
              />
            </section>
          ))}
        </div>
        {/* <div className={styles.Controls}>
          <span className={styles.arrowLeft} onClick={handlePrev}>
            Prev
          </span>
          <span className={styles.arrowRight} onClick={handleNext}>
            Next
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default Carousel;
