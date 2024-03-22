"use client";

import styles from "./button.module.css";

interface IButtonProps {
  text: string;
  cta?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <div
      onClick={() => {
        window.location.href = props.cta || "#";
      }}
      style={{
        cursor: "pointer",
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        opacity: 1,
        transformStyle: "preserve-3d",
      }}>
      <div className={styles.button}>
        <a href={props.cta || "#"}>{props?.text}</a>
      </div>
    </div>
  );
};

export default Button;
