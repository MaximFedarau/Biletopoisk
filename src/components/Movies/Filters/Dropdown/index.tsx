import {
  FC,
  RefObject,
  useState,
  useEffect,
  useRef,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";

import { DropdownDataItem } from "@/types";

import styles from "./styles.module.scss";

interface Props {
  data: DropdownDataItem[];
  offset: DOMRect;
  parentRef: RefObject<HTMLElement>;
  setParentValue: Dispatch<SetStateAction<string>>;
  onClose: () => void;
  onSearch: () => void;
}

const checkIsNode = (event: EventTarget | null): event is Node => {
  return !!event && "nodeType" in event;
};

export const Dropdown: FC<Props> = ({
  data,
  offset,
  parentRef,
  setParentValue,
  onClose,
}) => {
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

  const onItemClick = useCallback(() => {}, []);

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
      {data.map(({ id, content }) => (
        <p
          key={id}
          onClick={() => {
            setParentValue(content);
            onClose();
          }}
        >
          {content}
        </p>
      ))}
    </div>
  );
};
