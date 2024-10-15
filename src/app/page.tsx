"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import styles from "./home.module.scss";
import Header from "../components/organism/header/Header";
import HomeIntro from "@/components/home/home-intro/HomeIntro";
import HomeMenu from "@/components/home/home-menu/HomeMenu";

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]); // 섹션 요소들을 담을 ref 배열 생성
  const currentSectionIndex = useRef(0); // 현재 섹션의 index ref
  const isScrolling = useRef(false); // 스크롤 확인 ref
  const homeWrapperRef = useRef<HTMLDivElement | null>(null); // home-wrapper의 ref
  const [sectionsCount, setSectionsCount] = useState(0); // 섹션 개수 state
  const [activeIndex, setActiveIndex] = useState(0); // 활성화 섹션의 인덱스 state

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 섹션 이동 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const scrollToSection = useCallback((index: number) => {
    const target = sectionsRef.current[index];

    if (target && homeWrapperRef.current) {
      homeWrapperRef.current.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });

      // 해당 섹션의 인덱스값으로 변경
      setActiveIndex(index); // 마우스 휠 용
      currentSectionIndex.current = index; // 스크롤용
    }
  }, []);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 스크롤 발생 시 특정 섹션의 인덱스 전달
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault(); // passive: false 옵션 : 기본 스크롤 동작을 막는다.

      if (isScrolling.current) return; // 스크롤 중이면 함수 실행 중지

      const direction = event.deltaY > 0 ? 1 : -1; // 위/아래중 어디로 이동하는지 판단
      const newIndex = currentSectionIndex.current + direction;

      isScrolling.current = true; // 스크롤 잠금 시작

      if (newIndex >= 0 && newIndex < sectionsRef.current.length) {
        currentSectionIndex.current = newIndex; // currentSectionIndex를 ref의 current로 업데이트
        scrollToSection(currentSectionIndex.current);
      }

      // 0.8초 후 스크롤 잠금 해제
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    },
    [scrollToSection]
  );

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 : 마우스 휠 사용 시 함수 실행
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  // 페이지가 로드된 후 섹션 개수를 동적으로 설정
  useEffect(() => {
    // sectionsRef 배열에서 null이 아닌 요소의 개수를 계산
    setSectionsCount(sectionsRef.current.filter(Boolean).length);
  }, []);

  return (
    <>
      <Header />
      <div className={styles["home-wrapper"]} ref={homeWrapperRef}>
        <section
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
        >
          <HomeIntro />
        </section>
        <section
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
        >
          <HomeMenu />
        </section>
        <section
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
        >
          <h1>Third Screen</h1>
        </section>
        <section
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
        >
          <h1>Fourth Screen</h1>
        </section>
        <div className={styles["kkae-stick"]}>
          <div className={styles["stick-face"]}>
            <div className={styles["stick-eye-line"]}>
              <div className={styles["stick-eyes"]}></div>
              <div className={styles["stick-eyes"]}></div>
            </div>
            <div className={styles["stick-mouse"]}></div>
          </div>
          <div className={styles["stick-circle-block"]}>
            {[...Array(sectionsCount)].map((_, index) => (
              <div
                key={index}
                className={`${styles.circle} ${
                  index === activeIndex ? styles.active : ""
                }`}
                onClick={() => scrollToSection(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
