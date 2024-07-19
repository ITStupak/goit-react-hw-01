import Transaction from "./Transaction";

const TransactionHistory = ({ items }) => {
  return items.map((item) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tbody>
      </table>
    );
  });
};

export default TransactionHistory;
