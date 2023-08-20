import { useEffect, useState } from "react";
import styles from "./toggle.module.css";

interface IToggleProps {
  value1: string;
  value2: string;
  onChange?: (state: string) => void;
}

const Toggle: React.FC<IToggleProps> = ({ value1, value2, onChange }) => {
  const [isValue1, setIsValue1] = useState(true);

  const _handleOnChange = () => {
    setIsValue1(!isValue1);
  };

  useEffect(() => {
    onChange && onChange(isValue1 ? value1 : value2);
  }, [isValue1]);

  return (
    <div className={styles.container}>
      <div className={styles.switchesContainer}>
        <input
          type="radio"
          id={`${value1}-id`}
          name="toggle"
          value={value1}
          checked={isValue1}
          onChange={_handleOnChange}
        />
        <input
          type="radio"
          id={`${value2}-id`}
          name="toggle"
          value={value2}
          checked={!isValue1}
          onChange={_handleOnChange}
        />
        <label onClick={_handleOnChange} htmlFor={`${value1}-id`}>
          {value1}
        </label>
        <label onClick={_handleOnChange} htmlFor={`${value2}-id`}>
          {value2}
        </label>
        <div className={styles.switchWrapper}>
          <div className={styles.switch}>
            <div className={isValue1 ? styles.active : ""}>{value1}</div>
            <div className={!isValue1 ? styles.active : ""}>{value2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
