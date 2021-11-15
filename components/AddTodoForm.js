import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { addTodo } from "../redux/todoSlice";
import styled from "styled-components/native";

const StyledTextInput = styled.TextInput`
  width: 60vw;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid #2596ef;
  border-radius: 3px;
`;
const StyledButton = styled.Text`
  width: 15vw;
  text-align: center;
  margin: 0.5em auto;
  padding: 0.5em;
  background-color: #2596ef;
  border-radius: 3px;
  color: #ffffff;
`;

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue("");
  };

  return (
    <View>
      <StyledTextInput
        onChangeText={(text) => setValue(text)}
        placeholder="Add todo..."
        value={value}
      />
      <StyledButton onPress={onSubmit}>Submit</StyledButton>
    </View>
  );
};

export default AddTodoForm;
