import React, { useState } from "react";
import { Text, TextInput, CheckBox, Button } from "react-native";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, updateTodo } from "../redux/todoSlice";
import styled from "styled-components/native";

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0.5em 0;
  padding: 0.5em;
  border: 1px solid #2596ef;
  border-radius: 3px;
`;

const TodoItem = ({ id, title, completed, time }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };
  const handleUpdate = (updatedTitle) => {
    dispatch(updateTodo({ id: id, title: updatedTitle }));
  };
  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };
  const [editing, setEditing] = useState(false);

  return (
    <StyledView>
      <CheckBox value={completed} onValueChange={handleCompleteClick} />
      <Text
        style={editing ? { display: "none" } : { display: "initial" }}
        onPress={() => setEditing(true)}
      >
        {title}
      </Text>
      <TextInput
        style={editing ? { display: "initial" } : { display: "none" }}
        onChangeText={(text) => handleUpdate(text)}
        onKeyPress={handleUpdatedDone}
        value={title}
      />
      <Text>{time}</Text>
      <Button onPress={handleDeleteClick} title="Delete" />
    </StyledView>
  );
};

export default TodoItem;
