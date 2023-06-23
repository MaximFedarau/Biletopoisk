import { FC, useMemo, useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import NextImage from "next/image";

import { Dropdown } from "../Dropdown";
import { Field } from "../Field";
import filtersChevronDown from "public/icons/filters_chevron_down.svg";

import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  data: string[];
  onSearch: () => void;
  placeholder?: string;
  labelText?: string;
}

export const Select: FC<Props> = ({
  data,
  onSearch,
  placeholder,
  labelText,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const [dropdownOffset, setDropdownOffset] = useState<DOMRect>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeOffset = () =>
    setDropdownOffset(ref.current?.getBoundingClientRect());
  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
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
      <Field
        placeholder={placeholder}
        labelText={labelText}
        isButton
        onClick={handleDropdown}
        rightSection={
          <NextImage
            src={filtersChevronDown}
            alt="chevron"
            className={classNames({
              [styles.container__button_pressed]: isDropdownOpen,
            })}
          />
        }
      />
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
