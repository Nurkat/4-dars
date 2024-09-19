import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-[#B154A9] pb-[20px] pt-[20px]">
        <TodoForm />
        <TodoList/>
      </div>
    </>
  );
}

export default App;
