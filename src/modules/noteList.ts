// src/components/noteList.ts

import { getNotes, deleteNote } from '../api/notesApi';
import { Note } from '../types/interfaces';

// Funktion för att visa anteckningar för ett användarnamn
export const displayNotes = async (username: string): Promise<void> => {
  const response = await getNotes(username);

  if ('data' in response) {
    const notes: Note[] = response.data;
    const listContainer = document.getElementById('noteList');

    if (listContainer) {
      const ul = document.createElement('ul');
      notes.forEach((note) => {
        const li = document.createElement('li');

        // Visa anteckningsinformation
        li.textContent = `${note.title}: ${note.note}`;

        // Lägg till knappar för redigering och borttagning av anteckningar
        const editButton = document.createElement('button');
        editButton.textContent = 'Redigera';
        editButton.addEventListener('click', () => handleEditButtonClick(note.id));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Ta bort';
        deleteButton.addEventListener('click', () => handleDeleteButtonClick(note.id));

        // Lägg till knapparna i listelementet
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // Lägg till listelementet i den oordnade listan
        ul.appendChild(li);
      });

      // Rensa och uppdatera anteckningslistan
      listContainer.innerHTML = '';
      listContainer.appendChild(ul);
    }
  } else {
    console.error(response.message);
  }
};

// Funktion för att hantera klick på redigeringsknapp
const handleEditButtonClick = (noteId: string): void => {
  // Implementera logiken för att hantera klick på redigeringsknapp
  console.log(`Redigeringsknapp klickad för anteckning med ID: ${noteId}`);
};

// Funktion för att hantera klick på borttagningsknapp
const handleDeleteButtonClick = async (noteId: string): Promise<void> => {
  // Implementera logiken för att hantera klick på borttagningsknapp
  const response = await deleteNote(noteId);

  if ('status' in response && response.status === 200) {
    // Anteckning borttagen framgångsrikt, du kan uppdatera anteckningslistan eller vidta lämpliga åtgärder
    console.log(`Anteckning med ID ${noteId} borttagen framgångsrikt.`);
    // Uppdatera anteckningslistan, till exempel:
    // displayNotes(username);
  } else {
    console.error(`Misslyckades med att ta bort anteckning med ID ${noteId}.`);
  }
};
