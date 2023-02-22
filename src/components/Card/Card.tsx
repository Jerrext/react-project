import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";
import { CardProps, CardSize } from "./types";
import { BookmarkIcon, DislikeIcon, LikeIcon, MoreIcon } from "../../assets/icons";

const Card: FC<CardProps> = ({ card, size }) => {
  const { title, text, date, image } = card;

  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.mediumWrapper]: isMedium,
        [styles.smallWrapper]: isSmall,
      })}
    >
      <div
        className={classNames(styles.infoWrapper, {
          [styles.mediumInfoWrapper]: isMedium,
          [styles.smallInfoWrapper]: isSmall,
        })}
      >
        <div className={styles.mainInfoWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.date}>{date}</div>
            <div
              className={classNames(styles.title, {
                [styles.mediumTitle]: isMedium || isSmall,
              })}
            >
              {title}
            </div>
          </div>
          {size === CardSize.Large && <div className={styles.text}>{text}</div>}
        </div>
        <img
          src={image}
          className={classNames(styles.image, {
            [styles.mediumImage]: isMedium,
            [styles.smallImage]: isSmall,
          })}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.iconWrapper}>
          <div>
            <LikeIcon />
          </div>
          <div>
            <DislikeIcon />
          </div>
        </div>
        <div className={styles.iconWrapper}>
          <div>
            <BookmarkIcon />
          </div>
          <div>
            <MoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
