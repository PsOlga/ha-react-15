import { memo } from "react";
import styles from "./styles.module.css"
function Filter({ onChange }) {
  console.log("FilterUsers was rerendered");
  return (
    <div className={styles.filterUs}>
      <input
        onInput={(event) => onChange(event.target.value)}
        type="text"
        placeholder="Введите имя"
        className={styles.styleInput}
      />
    </div>
  );
}
export const FilterUsers = memo(Filter);

