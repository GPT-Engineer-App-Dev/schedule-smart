import React, { useState } from "react";
import { Box, Heading, UnorderedList, ListItem, Input, Button } from "@chakra-ui/react";

const TodoList = () => {
  const [todos, setTodos] = useState(["Buy groceries", "Do laundry", "Clean the house", "Pay bills"]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
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
          <ListItem key={index}>{todo}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default TodoList;
