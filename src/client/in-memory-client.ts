import {Client, CreateNoteProps, Note} from "./types";


export class InMemoryClient implements Client {
    private notes: Note[]

    constructor() {
        this.notes = [{title: "title", encryptedBody: "foo", id: "abc"}]
    }

    createNote(encryptedBody: string, props: CreateNoteProps): Note {
        const id = crypto.randomUUID()
        const note = {id, encryptedBody, title: props?.title}
        this.notes.push(note)
        return note
    }

    getNoteById(id: string): Note {
        return this.notes.find(note => note.id === id);
    }
}