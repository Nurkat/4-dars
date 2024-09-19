import React, { useContext, useState } from "react";
import { Context } from "./Context/Context";
import Modal from "./Modal";

function TodoList() {
  const [isOpenModal, setIsmodal] = useState(false);
  const { todos, deleteTodo, updateTodo } = useContext(Context);

  const [updateInpValue, setUpdateInpValue] = useState("");
  const [updateId, setUpdateId] = useState(0);
  function updateTodoBtnClick(id) {
    setUpdateId(id);
    setIsmodal(true);
    const updateObj = todos.find((item) => item.id == id);
    setUpdateInpValue(updateObj.title);
  }
  function updateFormSubmit(e) {
    e.preventDefault();
    updateTodo(updateId, updateInpValue);
    setIsmodal(false);
  }
  return (
    <>
      <div className="w-[666px] mx-auto flex justify-between my-[10px] px-[20px] py-[20px] bg-[#F2C3F4] rounded-md shadow-md">
        <button className="py-[10px] px-[40px] rounded-[10px] bg-[#D32897] text-white shadow-md">
          All(0)
        </button>
        <button className="py-[10px] px-[40px] rounded-[10px] bg-[#D32897] text-white shadow-md">
          COMPLATED(0)
        </button>
        <button className="py-[10px] px-[40px] rounded-[10px] bg-[#D32897] text-white shadow-md">
          UNCOMPLATED(0)
        </button>
      </div>
      <ul className="w-[666px] mx-auto py-[20px] px-[20px] rounded-md bg-[#F2C3F4] ">
        {todos.map((item, index) => (
          <li
            key={index}
            className="w-full flex justify-between items-center mx-auto rounded-md px-[15px] bg-white my-[10px]"
          >
            <div className="py-[10px]">
              <span className="text-[18px]">{index + 1}.</span>
              <span className="text-[22px]">{item.title}</span>
            </div>
            <div className="flex items-center space-x-[10px]">
              <button
                onClick={() => deleteTodo(item.id)}
                className="py-[5px] px-[20px] bg-red-600 rounded-md text-white"
              >
                Delete{" "}
              </button>
              <button
                onClick={() => updateTodoBtnClick(item.id)}
                className="py-[5px] px-[20px] bg-green-600 rounded-md text-white"
              >
                Update
              </button>
              <input type="checkbox"  className="cursor-pointer w-[25px] h-[25px]"/>
            </div>
          </li>
        ))}
      </ul>
      <Modal isOpenModal={isOpenModal} setIsmodal={setIsmodal}>
        <form
          onSubmit={updateFormSubmit}
          className="flex flex-col space-y-[4px]"
        >
          <input
            className="p-3 rounded-lg outline-none"
            value={updateInpValue}
            onChange={(e) => setUpdateInpValue(e.target.value)}
            type="text"
          />
          <button
            type="submit"
            className="p-r rounded-md bg-green-400 text-white font-bold"
          >
            Save
          </button>
        </form>
      </Modal>
    </>
  );
}

export default TodoList;
