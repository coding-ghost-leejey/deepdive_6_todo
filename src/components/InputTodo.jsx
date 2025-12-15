import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Input } from "antd";
function InputTodo({ inputTodo, setInputTodo, createTodo }) {
  return (
    <>
      <div className="input-container">
        <Input
          placeholder="Input here"
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          onPressEnter={createTodo}
        />
        <Button type="primary" icon={<PlusCircleFilled />} onClick={createTodo}>
          Add
        </Button>
      </div>
    </>
  );
}

export default InputTodo;
