import { FC, useMemo, useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

import { Dropdown } from "../Dropdown";

import styles from "./styles.module.scss";

interface Props {
  data: string[];
  onSearch: () => void;
}

export const Select: FC<Props> = ({ data, onSearch }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const [dropdownOffset, setDropdownOffset] = useState<DOMRect>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeOffset = () =>
    setDropdownOffset(ref.current?.getBoundingClientRect());
  const onDropdownClose = () => setIsDropdownOpen(false);

  useEffect(() => {
    setIsMounted(true);
    changeOffset();

    return () => setIsMounted(false);
  }, []);

  const events = useMemo(() => ["scroll", "resize"], []);
  useEffect(() => {
    events.forEach((event) => window.addEventListener(event, changeOffset));

    return () =>
      events.forEach((event) =>
        window.removeEventListener(event, changeOffset)
      );
  }, [events]);

  return (
    <div ref={ref} className={styles.container}>
      <input placeholder="Выберите жанр" ref={ref} />
      <button
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        Dropdown
      </button>
      {isMounted &&
        isDropdownOpen &&
        createPortal(
          <Dropdown
            data={data}
            offset={dropdownOffset || new DOMRect()}
            onClose={onDropdownClose}
            onSearch={onSearch}
          />,
          document.getElementById("dropdown-root")!
        )}
    </div>
  );
};
