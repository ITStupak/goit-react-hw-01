import clsx from "clsx";
import css from "./Transaction.module.css";

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={clsx(css["tr"])}>
      <td>{type}</td>
      <td className={clsx(css["center"])}>{amount}</td>
      <td className={clsx(css["center"])}>{currency}</td>
    </tr>
  );
};

export default Transaction;
