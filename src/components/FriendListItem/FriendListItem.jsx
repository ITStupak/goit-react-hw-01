import clsx from "clsx";
import css from "./FriendListItem.module.css";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiOutlineStatusOffline } from "react-icons/hi";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={clsx(css.img)} src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css.name)}>{name}</p>
      <p className={clsx(css.status, { [css.online]: isOnline })}>
        {isOnline ? (
          <>
            Online
            <HiOutlineStatusOnline />
          </>
        ) : (
          <>
            Offline
            <HiOutlineStatusOffline />
          </>
        )}
      </p>
    </>
  );
};

export default FriendListItem;
