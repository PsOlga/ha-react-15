import { useCallback, useState } from "react";
import { FilterUsers } from "../FilterUsres";
import styles from "./style.module.css";

function UserList({ usersArray }) {
  const [users, setUsers] = useState(usersArray);
  const handleSearch = useCallback(
    (text) => {
      const filtredUsers = usersArray.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filtredUsers);
    },
    [usersArray]
  );

  return (
    <div className={styles.filterUslist}>
      <FilterUsers onChange={handleSearch} />
      <ul className={styles.ulFilter}>
    {users?.map((el) => (
          <li key={el.id}
          className={styles.liFilter}>
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;