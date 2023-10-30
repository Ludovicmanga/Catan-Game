import React from "react";
import MapSection from "../../components/MapSection/MapSection";
import PlayerActionsSection from "../../components/PlayerActionsSection/PlayerActionsSection";
import ChatSection from "../../components/ChatSection/ChatSection";
import GameInfosSection from "../../components/GameInfosSection/GameInfosSection";
import styles from "./page.module.css";

type Props = {};

const page = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.mapSectionContainer}>
          <MapSection />
        </div>

        <div className={styles.playersActionSectionContainer}>
          <PlayerActionsSection />
        </div>
      </div>
      <div className={styles.right}>
        <ChatSection />
        <GameInfosSection />
      </div>
    </div>
  );
};

export default page;
