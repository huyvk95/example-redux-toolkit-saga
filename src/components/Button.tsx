import { useDispatch } from "react-redux";
import { userActions } from "../service";

export const ButtonComponent: React.FC = () => {
  const dispatch = useDispatch();

  const onClickButton = () => {
    dispatch(userActions.setUserDataAsync());
  };

  return <button onClick={onClickButton}>Get user data</button>;
};
