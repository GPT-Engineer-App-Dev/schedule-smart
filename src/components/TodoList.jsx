import React from "react";
import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const TodoList = () => {
  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        Todo List
      </Heading>
      <UnorderedList spacing={3}>
        <ListItem>Buy groceries</ListItem>
        <ListItem>Do laundry</ListItem>
        <ListItem>Clean the house</ListItem>
        <ListItem>Pay bills</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default TodoList;
