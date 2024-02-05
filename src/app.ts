// src/app.ts

import { displayNotes } from './modules/noteList';
import { createNoteForm } from './modules/noteForm';
import { CreateNoteFormData } from './types/interfaces';

document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username') as HTMLInputElement;
  const titleInput = document.getElementById('title') as HTMLInputElement;
  const noteInput = document.getElementById('note') as HTMLTextAreaElement;
  const createNoteButton = document.getElementById('createNote') as HTMLButtonElement;
  const getNotesButton = document.getElementById('getNotes') as HTMLButtonElement;

  if (createNoteButton) {
    createNoteButton.addEventListener('click', () => {
      const formData: CreateNoteFormData = {
        username: usernameInput.value,
        title: titleInput.value,
        note: noteInput.value,
      };
      createNoteForm(formData);
      displayNotes(usernameInput.value);
    });
  }

  if (getNotesButton) {
    getNotesButton.addEventListener('click', async () => {
      displayNotes(usernameInput.value);
    });
  }
});
