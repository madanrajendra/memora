import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const memoraAPI = {
  // Chat / Query routing
  chat: async (prompt: string) => {
    try {
      const response = await api.post('/chat', { prompt });
      return response.data;
    } catch (error) {
      console.error('API Error (Chat):', error);
      throw error;
    }
  },

  // Decisions
  getDecisions: async () => {
    try {
      const response = await api.get('/decisions');
      return response.data;
    } catch (error) {
      console.error('API Error (Decisions):', error);
      throw error;
    }
  },

  makeDecision: async (topic: string, context: string) => {
    try {
      const response = await api.post('/decisions', { topic, context });
      return response.data;
    } catch (error) {
      console.error('API Error (Make Decision):', error);
      throw error;
    }
  },

  // Habits
  getHabits: async () => {
    try {
      const response = await api.get('/habits');
      return response.data;
    } catch (error) {
      console.error('API Error (Habits):', error);
      throw error;
    }
  },

  logHabit: async (habitName: string) => {
    try {
      const response = await api.post('/habits', { action: 'log_completion', habit_name: habitName });
      return response.data;
    } catch (error) {
      console.error('API Error (Log Habit):', error);
      throw error;
    }
  },

  // Memories
  getMemories: async () => {
    try {
      const response = await api.get('/memories');
      return response.data;
    } catch (error) {
      console.error('API Error (Memories):', error);
      throw error;
    }
  },
};

export default api;
