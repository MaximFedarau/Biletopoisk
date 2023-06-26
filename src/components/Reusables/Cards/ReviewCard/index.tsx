import { FC } from "react";
import NextImage from "next/image";

import { Card } from "../Card";
import { Review } from "@/types";
import emptyAvatar from "public/images/empty_avatar.svg";

import styles from "./styles.module.scss";

export const ReviewCard: FC<Review> = ({ name, text, rating }) => {
  return (
    <div className={styles.review}>
      <NextImage
        src={emptyAvatar}
        alt="avatar"
        placeholder="blur"
        blurDataURL="public/images/empty_avatar.svg"
      />
      <Card
        title={
          <div className={styles.review__title}>
            <p className={styles.review__highlights}>{name}</p>
            <div className={styles.review__rating}>
              Оценка: <p className={styles.review__highlights}>{rating}</p>
            </div>
          </div>
        }
        className={styles.review__card}
      >
        <p>{text}</p>
      </Card>
    </div>
  );
};
