// // https://dummyjson.com/products/1

import type { PageLoad } from "../$types";
import type { Note, NoteInfoResponse } from "$lib/utils";

export const load: PageLoad = async ({ fetch }) => {
    const res: any = await fetch("https://multi-serve.onrender.com/api/notes/info");
    const data: NoteInfoResponse = await res.json();

    // for (const note of data.notes) {
    //     const mdText = await getNoteMD(`https://multi-serve.onrender.com/api/notes/${note.slug}.md`, { fetch });
    //     notesArr.push(mdText);
    // }

    // Return the data as an object with the desired property name (e.g., 'notes')
    // Cannot return an array
    // Only PLain objects {}
    return {
        message: JSON.stringify(data)
    };
}

const getNoteMD: any = async (mdUrl: string, { fetch }: any) => {
    const mdRes = await fetch(mdUrl);
    return await mdRes.text();
}
