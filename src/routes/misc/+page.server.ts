// // https://dummyjson.com/products/1

import type { PageLoad } from "../$types";

export const load: PageLoad = async ({ fetch }) => {
    const res: any = await fetch("https://multi-serve.onrender.com/api/resume/html");
    const data: string = await res.text();

    // for (const note of data.notes) {
    //     const mdText = await getNoteMD(`https://multi-serve.onrender.com/api/notes/${note.slug}.md`, { fetch });
    //     notesArr.push(mdText);
    // }

    // Return the data as an object with the desired property name (e.g., 'notes')
    // Cannot return an array
    // Only PLain objects {}
    return {
        message: data
    };
}