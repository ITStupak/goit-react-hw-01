import clsx from "clsx";
import css from "./Section.module.css";

export const Section = ({ children }) => {
  return <section className={clsx(css["section"])}>{children}</section>;
};

export default Section;
