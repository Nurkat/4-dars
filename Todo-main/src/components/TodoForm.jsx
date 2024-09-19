import React, { useContext, useRef } from "react";
import { Context } from "./Context/Context";
import { Toaster } from "react-hot-toast";

const TodoForm = () => {
  const { todos, setTodos, saveTodo } = useContext(Context);
  const inputRef = useRef();
  function handleSubmitForm(e) {
    e.preventDefault();
    const data = {
      id: todos.length + 1,
      title: inputRef.current.value,
      isComplated: false,
    };
    saveTodo(data);
    e.target.reset();
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form
        onSubmit={handleSubmitForm}
        className="w-[666px] mx-auto pt-[20px] flex  justify-center space-x-[10px] py-[50px] rounded-md  px-[20px] bg-[#F2C3F4] shadow-md"
      >
        <input
          maxLength={20}
          ref={inputRef}
          className="w-full py-[10px] pl-[10px] text-[22px] rounded-[15px] shadow-md outline-none border-transparent border-[3px] focus:border-[#D32897]"
          type="text"
          required
          autoComplete="off"
          placeholder="Enter your Todo..."
        />
        <button className="px-[50px] py-[10px] rounded-[15px] hover:bg-[#E85CB7] bg-[#d32897] text-white text-[22px] transition-all ease-linear shadow-md">
          ADD
        </button>
      </form>
    </>
  );
};

export default TodoForm;
