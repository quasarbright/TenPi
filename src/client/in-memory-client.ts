import {Client, CreateNoteProps, Note} from "./types";


export class InMemoryClient implements Client {
    private notes

    constructor() {
        this.notes = []
    }

    createNote(encryptedBody: string, {title}: CreateNoteProps): Note {
        const id = crypto.randomUUID()
        return {id, encryptedBody, title}
    }

    getNoteById(id: string): Note {
        return this.notes.find(note => note.id === id);
    }
}