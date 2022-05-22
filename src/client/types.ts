export interface Note {
    title?: string
    encryptedBody: string
    id: string
}

export interface CreateNoteProps {
    title?: string
}

export interface Client {
    createNote(encryptedBody: string, props?: CreateNoteProps): Note
    getNoteById(id: string): Note | undefined
}