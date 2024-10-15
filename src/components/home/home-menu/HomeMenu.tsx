import "@/assets/global/globalBlock.scss";
import styles from "./HomeMenu.module.scss";
import Image from "next/image";
import menuImg1 from "@/assets/img/homeImg/menu1.jpg";
import menuImg2 from "@/assets/img/homeImg/menu2.jpg";
import menuImg3 from "@/assets/img/homeImg/menu3.jpg";
import menuImg4 from "@/assets/img/homeImg/menu4.jpg";
import menuImg5 from "@/assets/img/homeImg/menu5.jpg";

const HomeMenu = () => {
  return (
    <div className="global-block">
      <div className={styles["home-menu-wrapper"]}>
        <div className={styles["main-half-block"]}>
          <div className={styles["main-menu-block"]}>
            <div className={styles["overlay"]}>
              <div className={styles["main-text-block"]}>
                <span className={styles["text-contents"]}>
                  깨달음의 한 순간
                </span>
                <span className={styles["text-title"]}>실시간 과외</span>
              </div>
            </div>
            <Image
              src={menuImg1}
              alt="테스트"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className={styles["sub-half-block"]}>
          <div className={styles["sub-menu-block"]}>
            <div className={styles["overlay"]}>
              <span className={styles["sub-text"]}>결과물</span>
            </div>
            <Image
              src={menuImg2}
              alt="테스트"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={styles["sub-menu-block"]}>
            <div className={styles["overlay"]}>
              <span className={styles["sub-text"]}>테스트</span>
            </div>
            <Image
              src={menuImg3}
              alt="테스트"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={styles["sub-menu-block"]}>
            <div className={styles["overlay"]}>
              <span className={styles["sub-text"]}>테스트</span>
            </div>
            <Image
              src={menuImg4}
              alt="테스트"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={styles["sub-menu-block"]}>
            <div className={styles["overlay"]}>
              <span className={styles["sub-text"]}>테스트</span>
            </div>
            <Image
              src={menuImg5}
              alt="테스트"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
