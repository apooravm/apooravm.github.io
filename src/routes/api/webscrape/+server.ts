import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from './$types';

import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';

type APIMessage = {
    type: string,
    message: string,
};

export const POST: RequestHandler = async ({ request }) => {
    const { url } = await request.json()

    return getURLData(url)
        .then((data) => {
            return json(data)
        })

        .catch((err) => {
            return json(error(500, 'Something went wrong. ERR: ' + err));
        })
}

const getURLData = async (url: string) => {
	const urlHTML: string = await getHTML(url);
	const $: cheerio.CheerioAPI = cheerio.load(urlHTML);
    const $a = $('a').toArray();

    const final = $a.map((a_tag) => {
        return a_tag.attribs.href
    })

    console.log($a);

	return final;
};

const getHTML = async (url: string): Promise<string> => {
	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();

	await page.goto(url, { waitUntil: 'domcontentloaded' });

	await page.waitForSelector('h3');

	const html = await page.content();

	await browser.close();

	return html;
}