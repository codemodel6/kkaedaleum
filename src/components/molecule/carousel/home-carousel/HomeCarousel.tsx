import styles from "./HomeCarousel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import testImg from "@/assets/img/homeImg/test.jpg";
import testImg2 from "@/assets/img/homeImg/test2.jpg";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false, // 마우스 호버에도 자동으로 넘어감
  };

  return (
    <div className={styles["home-carousel-wrapper"]}>
      <div className="carousel">
        <Slider {...settings}>
          <div className={styles["img-wrapper"]}>
            <div className={styles["overlay"]}>
              <div className={styles["text-block"]}>
                <h3>깨달음</h3>
                <span>누구나 쉽게 접근 가능한 배움을 얻을 수 있는 곳</span>
              </div>
            </div>
            <Image
              src={testImg}
              alt="테스트"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
          <div className={styles["img-wrapper"]}>
            <div className={styles["overlay"]}>
              <div className={styles["text-block"]}>
                <h3>쉬운 접근</h3>
                <span>가장 빠르고 가장 쉬운 접근</span>
              </div>
            </div>
            <Image
              src={testImg2}
              alt="테스트2"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeCarousel;
