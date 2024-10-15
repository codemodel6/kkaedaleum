import "@/assets/global/globalBlock.scss";
import styles from "./HomeIntro.module.scss";
import HomeCarousel from "@/components/molecule/carousel/home-carousel/HomeCarousel";

const HomeIntro = () => {
  return (
    <div className="global-full-wide-block">
      <div className={styles["home-intro-wrapper"]}>
        <HomeCarousel />
      </div>
    </div>
  );
};

export default HomeIntro;
