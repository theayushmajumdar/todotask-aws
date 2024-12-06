import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AddTaskForm } from "./components/AddTaskForm";
import { Task } from "./components/Task";
import axios from "axios";
import { API_URL } from "./utils";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      // Sending GET request to fetch tasks
      const { data } = await axios.get(API_URL);
      console.log("Fetched data from API:", data);

      // Since the backend is directly sending the array, use data directly
      if (Array.isArray(data)) {
        setTasks(data);
      } else {
        console.error("Tasks are not in the expected format", data);
      }
    } catch (err) {
      console.log("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []); // Fetch tasks once when the component is mounted

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm fetchTasks={fetchTasks} />
      {/* Map over tasks only if tasks is an array */}
      {Array.isArray(tasks) && tasks.length > 0 ? (
        tasks.map((task) => (
          <Task task={task} key={task.id} fetchTasks={fetchTasks} />
        ))
      ) : (
        <p>No tasks found</p>
      )}
    </ThemeProvider>
  );
}