import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={clsx(css["img"])} src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css["name"])}>{name}</p>
      <p className={clsx(css["status"], { [css.online]: isOnline })}>
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </>
  );
};

export default FriendListItem;
