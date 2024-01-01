// // src/routes/api/scrape.ts

// import type { Request, Response } from '@sveltejs/kit';
// import fetch from 'node-fetch';

// export async function get({ params }: Request): Promise<Response> {
//   const { url } = params;

//   try {
//     const response = await fetch(url);
//     const html = await response.text();

//     const $ = cheerio.load(html);

//     // Extract href attributes from anchor tags
//     const links: string[] = [];
//     $('a').each((index, element) => {
//       const href = $(element).attr('href');
//       if (href) {
//         links.push(href);
//       }
//     });

//     return {
//       body: {
//         success: true,
//         links,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       status: 500,
//       body: {
//         success: false,
//         error: 'Internal Server Error',
//       },
//     };
//   }
// }
