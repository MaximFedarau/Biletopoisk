import {
  FC,
  RefObject,
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
  containerRef: RefObject<HTMLElement>;
  parentValue: string;
  setParentValue: Dispatch<SetStateAction<string>>;
  onClose: () => void;
  onSearch: (value: string) => void | Promise<void>;
}

const checkIsNode = (event: EventTarget | null): event is Node => {
  return !!event && "nodeType" in event;
};

export const Dropdown: FC<Props> = ({
  data,
  offset,
  containerRef,
  parentValue,
  setParentValue,
  onClose,
  onSearch,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const outsideClickHandler = useCallback(
    (event: Event) => {
      if (
        checkIsNode(event.target) &&
        !ref.current?.contains(event.target) &&
        !containerRef.current?.contains(event.target as Node)
      )
        onClose();
    },
    [onClose, containerRef]
  );

  const onDropdownItemClick = async (id: string, content: string) => {
    onClose();
    if (parentValue === content) return;

    setParentValue(content);
    await onSearch(id);
  };

  useEffect(() => {
    window.addEventListener("mousedown", outsideClickHandler);

    return () => window.removeEventListener("mousedown", outsideClickHandler);
  }, [outsideClickHandler]);

  return (
    <div
      className={styles.dropdown}
      style={{
        top: offset.height + offset.top + 4,
        left: offset.left,
        width: offset.width,
      }}
      ref={ref}
    >
      {data.map(({ id, content }) => (
        <p key={id} onClick={() => onDropdownItemClick(id, content)}>
          {content}
        </p>
      ))}
    </div>
  );
};
