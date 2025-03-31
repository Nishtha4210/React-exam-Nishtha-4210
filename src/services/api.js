import axios from "axios";

const API_URL = "http://localhost:5000/tasks"; 


export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};


export const addTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    return null;
  }
};


export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting task:", error);
    return false;
  }
};


export const updateTask = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    return null;
  }
};
