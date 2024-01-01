type Note = {
    data: string;
    description: string;
    id: number;
    slug: string;
    tags: string[];
    time: string;
    title: string;
    updated_date: string;
};

type NoteInfoResponse = {
    notes: Note[];
};

export type {Note, NoteInfoResponse}