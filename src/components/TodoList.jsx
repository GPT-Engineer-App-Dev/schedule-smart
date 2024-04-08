import React, { useState } from "react";
import { Box, Heading, UnorderedList, ListItem, Input, Button, Checkbox, CloseButton } from "@chakra-ui/react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Buy groceries", completed: false },
    { text: "Do laundry", completed: false },
    { text: "Clean the house", completed: false },
    { text: "Pay bills", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        Todo List
      </Heading>
      <Box display="flex" mb={4}>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a new todo" mr={2} />
        <Button onClick={handleAddTodo}>Add</Button>
      </Box>
      <UnorderedList spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            <Checkbox isChecked={todo.completed} onChange={() => handleToggleCompleted(index)} mr={2} />
            {todo.text}
            <CloseButton ml={2} onClick={() => handleDeleteTodo(index)} />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default TodoList;
