import styles from "./Home.module.css";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionList({ documents }) {
  const { deleteDocument, response } = useFirestore("transactions");

  return (
    <div>
      {documents.length}
      <ul className={styles.transactions}>
        {documents.map((document) => {
          return (
            <li key={document.id}>
              <p className={styles.name}>{document.name}</p>
              <p className={styles.amount}>${document.amount}</p>
              <button onClick={() => deleteDocument(document.id)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
