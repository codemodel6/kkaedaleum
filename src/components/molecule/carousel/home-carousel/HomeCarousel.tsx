import styles from "./HomeCarousel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import testImg from "@/assets/img/homeImg/test.png";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false, // 마우스 호버에도 자동으로 넘어감
  };

  return (
    <div className={styles["home-carousel-wrapper"]}>
      <div className="carousel">
        <Slider {...settings}>
          <div className={styles["img-wrapper"]}>
            <Image src={testImg} alt="테스트" />
          </div>
          <div className={styles["text-wrapper"]}>
            <div className={styles["title"]}>접근</div>
            <div className={styles["contents"]}>테스트</div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeCarousel;
