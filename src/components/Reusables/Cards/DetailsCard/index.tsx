"use client";

import { FC, PropsWithChildren, useState } from "react";
import NextImage from "next/image";
import classNames from "classnames";

import { Card } from "../Card";
import { CARD_TITLE_SIZE } from "@/types";
import chevronDown from "public/icons/chevron_down.svg";

import styles from "./styles.module.scss";

interface CardProps {
  title: string;
}

interface ChevronButtonProps {
  isOpen: boolean;
  changeIsOpen: () => void;
}

export const DetailsCard: FC<PropsWithChildren<CardProps>> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card
      title={title}
      titleSize={CARD_TITLE_SIZE.SMALL}
      className={styles.card}
      rightSection={
        <NextImage
          src={chevronDown}
          alt="chevron"
          onClick={changeIsOpen}
          className={classNames(styles.card__button, {
            [styles.card__button_pressed]: isOpen,
          })}
        />
      }
    >
      {isOpen && children}
    </Card>
  );
};
