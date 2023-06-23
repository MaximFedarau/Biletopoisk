import { FC, RefObject, useEffect, useRef, useCallback } from "react";

import styles from "./styles.module.scss";

interface Props {
  data: string[];
  offset: DOMRect;
  parentRef: RefObject<HTMLElement>;
  onClose: () => void;
  onSearch: () => void;
}

const checkIsNode = (event: EventTarget | null): event is Node => {
  return !!event && "nodeType" in event;
};

export const Dropdown: FC<Props> = ({ data, offset, parentRef, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  const outsideClickHandler = useCallback(
    (event: Event) => {
      if (
        checkIsNode(event.target) &&
        !ref.current?.contains(event.target) &&
        !parentRef.current?.contains(event.target as Node)
      )
        onClose();
    },
    [onClose, parentRef]
  );

  useEffect(() => {
    window.addEventListener("mousedown", outsideClickHandler);

    return () => window.removeEventListener("mousedown", outsideClickHandler);
  }, [outsideClickHandler]);

  return (
    <div
      className={styles.container}
      style={{
        top: offset.height + offset.top + 4,
        left: offset.left,
        width: offset.width,
      }}
      ref={ref}
    >
      {data.map((value) => (
        <p key={value} onClick={onClose}>
          {value}
        </p>
      ))}
    </div>
  );
};
