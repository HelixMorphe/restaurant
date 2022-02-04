import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Featured.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { width } from "@mui/system";
function Featured() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([
    "/img/featured1.jpg",
    "/img/featured2.jpg",
    "/img/featured3.jpg",
  ]);
  // useEffect(() => {
  //   const slidesWithClones = [...images];
  //   slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
  //   slidesWithClones.push(slidesWithClones[1]);
  //   setImages(slidesWithClones);
  // }, []);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        {"<"}
      </div>
      <div
        className={styles.wrapper}
        style={{
          transform: `translateX(${-100 * index}vw)`,
          width: `${100 * images.length}vw`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.imgContainer}>
            <Image
              key={index}
              src={image}
              alt="pizza"
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        {">"}
      </div>
    </div>
  );
}

export default Featured;
