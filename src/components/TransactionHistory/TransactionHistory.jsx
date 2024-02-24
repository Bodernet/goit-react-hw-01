import css from "../TransactionHistory/TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th className={css.row}>Type</th>
          <th className={css.row}>Amount</th>
          <th className={css.row}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableItem}>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.colum}>{type}</td>
              <td className={css.colum}>{amount}</td>
              <td className={css.colum}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
