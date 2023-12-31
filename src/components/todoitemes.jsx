import Todoitem from "../todoitem";

const Todoitems = ({ todoitemm, onDelteClick }) => {
  return (
    <div className="item-con">
      {todoitemm.map((item) => (
        <Todoitem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
          onDelteClick={onDelteClick}
        ></Todoitem>
      ))}
    </div>
  );
};
export default Todoitems;
