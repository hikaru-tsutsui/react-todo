import React from "react";

export const InputText = (props) => {
  const { todo, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todo} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
