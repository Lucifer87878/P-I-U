// src/components/noteForm.ts

import axios, { AxiosError } from 'axios';
import { CreateNoteFormData } from '../types/interfaces';
import { apiUrl } from '../api/notesApi';

// Funktion för att skapa en ny anteckning
export const createNoteForm = async (formData: CreateNoteFormData): Promise<void> => {
  if (!formData.title || !formData.note) {
    alert('Titel och anteckningstext krävs.');
    return;
  }

  try {
    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const responseData = response.data;
      console.log('Ny anteckning skapad:', responseData);
    } else {
      console.error(`Fel: ${response.statusText}`);
      console.error(response.data); // Logga svarsdatan för mer detaljer
    }
  } catch (error: unknown) {
    console.error(`Ett fel inträffade: ${(error as AxiosError)?.message || 'Okänt fel'}`);
  }
};
