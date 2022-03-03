import { marked } from 'marked';
import katex from 'katex'
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'


export function renderMarkdown(text) {
    marked.setOptions({
        highlight: function (code, lang) {
            if (Prism.languages[lang]) {
                return Prism.highlight(code, Prism.languages[lang], lang)
            }
            else return code;
        }
    });

    const renderer = new marked.Renderer();
    renderer.image = (href: string, text: string, title: string) => {
        var alt = text != undefined && text != "" ? `alt="${text}"` : ""
        var titel = title != undefined && title != "" ? `title="${title}"` : ""
        return `<a href="${href}" target="_blank"><img class="content-image" src="${href}" ${alt} ${titel}/></a>`
    };
    renderer.table = (header: string, body: string) => {
        return `
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-md sm:rounded-lg">
                        <table class="min-w-full table-auto">
                            <thead class="bg-dark-blue text-white font-normal text-center">${header}</thead>
                            <tbody class="divide-y text-center">${body}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      `
    };
    const unchanged = new marked.Renderer();
    const originalCodeSpan = renderer.codespan;
    renderer.code = (code: string, lang: string, escaped: boolean) => {
        if (lang == "math") return renderTex(code, true)
        return `
        <div class="rounded-lg bg-dark overflow-x-auto overflow-y-hidden w-full shadow-lg p-4 mt-4 collapsible relative">
            ${unchanged.code(code, lang, escaped)}
        </div>
            `
    };

    renderer.codespan = (code: string) => {
        if (code.startsWith("math")) return renderTex(code.substring(4))
        return originalCodeSpan.call(this, code);
    }

    return marked(text, { renderer });
}
export function renderTex(content, block: boolean = false) {
    var prefix = block ? '\\large ' : '';
    return katex.renderToString(prefix + content, { displayMode: block, throwOnError: false, strict: false });
}

export function renderExcerpt(content, html = false) {
    var newline = html ? "<br/>" : "\r\n";
    const renderer = {
        link(href, title, text) { return text; },
        paragraph(text) { return htmlEscapeToText(text) + newline; },
        strong(text) { return text; },
        em(text) { return text; },
        image(href, title, text) { return ''; },
        heading(text, number, raw, slugger) { return raw + newline; }
    }
    marked.use({ renderer });
    var text = marked(content, renderer);
    text = text.substr(0, 160) + "\u2026";
    return text;
}

function htmlEscapeToText(text) {
    return text.replace(/\&\#[0-9]*;|&amp;/g, function (escapeCode) {
        if (escapeCode.match(/amp/)) {
            return '&';
        }
        return String.fromCharCode(escapeCode.match(/[0-9]+/));

    });

}