import { useSelector } from "react-redux";
import { userSelector } from "../service";

export const UserComponent: React.FC = () => {
  const userData = useSelector(userSelector.selectUserData);
  return <div>{userData?.name || "Not have any data"}</div>;
};
