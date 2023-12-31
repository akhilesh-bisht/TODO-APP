import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

function Addtodo({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleOnButton = (event) => {
    event.preventDefault();
    const todoname = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(todoname, dueDate);
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="enter todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={handleOnButton}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
