import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import styled from "styled-components/native";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import store from "./redux/store";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Provider store={store}>
      <StyledSafeAreaView>
        <View>
          <AddTodoForm />
          <TodoList />
          <StatusBar style="auto" />
        </View>
      </StyledSafeAreaView>
    </Provider>
  );
}
