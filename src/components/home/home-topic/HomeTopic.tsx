import "@/assets/global/globalBlock.scss";
import styles from "./HomeTopic.module.scss";

const HomeTopic = () => {
  return (
    <div className="global-block">
      <div className={styles["home-topic-wrapper"]}>
        <span className={styles["topic-main-span"]}>TOP10</span>
        <span className={styles["topic-sub-span"]}>
          인기있는 게시글을 살펴보세요
        </span>
      </div>
      <div className={styles[""]}></div>
    </div>
  );
};

export default HomeTopic;
