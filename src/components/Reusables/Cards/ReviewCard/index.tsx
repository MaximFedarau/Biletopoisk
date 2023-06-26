import { FC } from "react";
import NextImage from "next/image";

import { Card } from "../Card";
import { ReviewHeader } from "./ReviewHeader";
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
        title={<ReviewHeader name={name} rating={rating} />}
        className={styles.review__card}
      >
        <p>{text}</p>
      </Card>
    </div>
  );
};
