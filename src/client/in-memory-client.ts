import {Client, Note} from "./types";


export class InMemoryClient implements Client {
    private notes

    constructor() {
        this.notes = []
    }

    createNote(encryptedBody: string): Note {
        const id = crypto.randomUUID()
        return {id, encryptedBody}
    }

    getNoteById(id: string): Note {
        return this.notes.find(note => note.id === id);
    }
}