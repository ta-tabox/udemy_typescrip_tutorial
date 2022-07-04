// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean; // propsとして必須でないものは?をつけることで呼び出し側で渡してなくてもエラーが出なくなる
// };
import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  // completedはundefindedで渡る可能性があるため、初期値falseを指定する
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
