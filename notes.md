## SvelteKit Notes

Inside a variable route or "parameter based" or dynamic routes.
Thus, one can generate routes through code without defining each of them.

Say I have 100 Notes. I can get the notes json info and generate routes depending on the id of the note and generate routes.

Would be done by creating a route [postID] or [anyName] under routes.

### +page.ts OR +page.server.ts

+page.server.ts is run on the server ONLY. Thus this can be used to make db calls and more curated API calls ig.

+page.ts is run on both client and server. Done for general APIs when the data is needed for SSR. Remember No API Calls in the main +page.svelte. +page.ts can be though of as a ts extension to that. or the script.js to index.html.

API calls through +page.ts as opposed to directly in the +page.svelte file are rendered on the server side. Thus the html is preloaded and faster for the user. If the API data loading is done in the +page.svelte file, the loading will take place on client side and be slower and also the HTML file wont be prerendered.

### Initial App

SK apps are SSR by defualt. Thus all the data required (through APIs or db) is prerendered server side before the page is even shown to the user.

**Disable Server Side Rendering** through `export let ssr = false;` in the routes `+page.ts` file

### Handling Form Data

A login Page

```html

```
<!-- slot tells svelte that this is where to insert the children? -->
<!-- layout wraps around any page further down the routes -->
<!-- Thus, anything above <slot /> is treated like a global component -->
<!-- Layout wraps a page and any subsequent pages -->
<!-- Content above doesnt get rerendered when pages change -->
<!-- If CSS is scoped and needed only in a certain file => write it in the same page file -->
<!-- Else if needed as globally, write in routes/styles.css and import in routes/+layout.svelte -->

<!-- lib dir -->
<!-- lib is an alias special dir uner src/ that can be referenced from any file through $lib -->
<!-- Can store any file/folders and have them be imported anywhere -->
<!-- Can create your own aliases -->

<!-- +page.ts/js => doing API related operations like fetching/loading data for +page.svelte -->
<!--  -->


## CSS Stuff

Define variables using

```css
--variable-1: colour1;
--variable-2: colour2;
```