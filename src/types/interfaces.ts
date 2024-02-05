// src/types/interfaces.ts

// Interface för API-svar
export interface ApiResponse<T> {
  data: T;
  status: number;
}

// Interface för API-fel
export interface ApiError {
  message: string;
  status: number;
}

// Interface för en anteckning
export interface Note {
  id: string;
  username: string;
  title: string;
  note: string;
  createdAt: Date;
}

// Interface för formulärdata vid skapande av anteckning
export interface CreateNoteFormData {
  username: string;
  title: string;
  note: string;
}
