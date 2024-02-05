// src/api/notesApi.ts

import axios, { AxiosError } from 'axios';
import { ApiResponse, ApiError, Note } from '../types/interfaces';

export const apiUrl = 'https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes';

// Funktion för att hämta anteckningar för ett användarnamn
export const getNotes = async (username: string): Promise<ApiResponse<Note[]> | ApiError> => {
  try {
    const { data } = await axios.get<ApiResponse<Note[]>>(`${apiUrl}/${username}`);
    return data;
  } catch (error: unknown) {
    return {
      message: (error as AxiosError)?.message || 'Ett fel inträffade',
      status: (error as AxiosError)?.response?.status || 500,
    };
  }
};

// Funktion för att skapa en ny anteckning
export const createNote = async (newNote: Note): Promise<ApiResponse<Note> | ApiError> => {
  try {
    const { data } = await axios.post<ApiResponse<Note>>(apiUrl, newNote);
    return data;
  } catch (error: unknown) {
    return {
      message: (error as AxiosError)?.message || 'Ett fel inträffade',
      status: (error as AxiosError)?.response?.status || 500,
    };
  }
};

// Funktion för att uppdatera en anteckning
export const updateNote = async (noteId: string, updatedNote: Note): Promise<ApiResponse<Note> | ApiError> => {
  try {
    const { data } = await axios.put<ApiResponse<Note>>(`${apiUrl}/${noteId}`, updatedNote);
    return data;
  } catch (error: unknown) {
    return {
      message: (error as AxiosError)?.message || 'Ett fel inträffade',
      status: (error as AxiosError)?.response?.status || 500,
    };
  }
};

// Funktion för att ta bort en anteckning
export const deleteNote = async (noteId: string): Promise<ApiResponse<void> | ApiError> => {
  try {
    const { data } = await axios.delete<ApiResponse<void>>(`${apiUrl}/${noteId}`);
    return data;
  } catch (error: unknown) {
    return {
      message: (error as AxiosError)?.message || 'Ett fel inträffade',
      status: (error as AxiosError)?.response?.status || 500,
    };
  }
};
