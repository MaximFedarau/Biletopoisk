import { FC, ReactNode } from "react";

interface WrapperProps {
  condition: boolean;
  wrapper: (children: ReactNode) => ReactNode;
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;
