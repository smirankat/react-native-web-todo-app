import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { View } from "react-native";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch(
      "https://transloc-api-1-2.p.rapidapi.com/agencies.json?callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&agencies=12",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "transloc-api-1-2.p.rapidapi.com",
          "x-rapidapi-key": "", //paste your API key here
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setTime(
          new Date(response.generated_on).toLocaleTimeString().slice(0, -3)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, [todos]);

  return (
    <View>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          time={time}
        />
      ))}
    </View>
  );
};

export default TodoList;
