import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import { fetchTasks, createTasks, updateTasks, deleteTasks } from "./task.js";

const app = express();
const port = 3001;

app.use(express.json());

// Enable CORS for development environment
if (process.env.DEVELOPMENT) {
  app.use(cors());
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/task", async (req, res) => {
  try {
    const tasks = await fetchTasks();

    console.log("Fetched tasks from DynamoDB:", tasks); // Log the raw DynamoDB response

    // Ensure the response format is correct
    if (tasks && tasks.Items) {
      res.send(tasks.Items); // Send only the Items array
    } else {
      console.error("Tasks format is incorrect or empty:", tasks);
      res.status(400).send("Error: Tasks format is incorrect or empty");
    }
  } catch (err) {
    console.error("Error fetching tasks from DynamoDB:", err);
    res.status(400).send(`Error fetching tasks: ${err}`);
  }
});

app.post("/task", async (req, res) => {
  try {
    const task = req.body;

    const response = await createTasks(task);

    console.log("Created task response:", response); // Log the creation response
    res.send(response);
  } catch (err) {
    console.error("Error creating task:", err);
    res.status(400).send(`Error creating tasks: ${err}`);
  }
});

app.put("/task", async (req, res) => {
  try {
    const task = req.body;

    const response = await updateTasks(task);

    console.log("Updated task response:", response); // Log the update response
    res.send(response);
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(400).send(`Error updating tasks: ${err}`);
  }
});

app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await deleteTasks(id);

    console.log("Deleted task response:", response); // Log the delete response
    res.send(response);
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(400).send(`Error deleting tasks: ${err}`);
  }
});

if (process.env.DEVELOPMENT) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export const handler = serverless(app);
