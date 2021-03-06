import { parseTag } from './formatMarkdown';

describe('Markdown tag', () => {
    const style = 'style="background:#98989869; color:#222; --hover-background: #98989855"';
    it('hello #world', () => {
        expect(parseTag(`hello #world`).trim()).toEqual(
            `hello <span class="pl-tag" ${style}>#world</span>`
        );
        expect(parseTag(`hello #world `).trim()).toEqual(
            `hello <span class="pl-tag" ${style}>#world</span>`
        );
    });
});
