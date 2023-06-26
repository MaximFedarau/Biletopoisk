"use client";

import { FC, useEffect, useState } from "react";

import styles from "./styles.module.scss";

export const EmptyState: FC = () => {
  const [videoId, setVideoId] = useState(0);
  useEffect(() => {
    setVideoId(Math.floor(Math.random() * 5 + 1));
  }, []);
  return (
    <div className={styles.container}>
      {Boolean(videoId) && (
        <video
          src={`/videos/empty_state/${videoId}.mp4`}
          autoPlay
          muted
          loop
          playsInline
          className={styles.container__video}
        ></video>
      )}
      <p className={styles.container__text}>Здесь пока ничего нет :)</p>
    </div>
  );
};
