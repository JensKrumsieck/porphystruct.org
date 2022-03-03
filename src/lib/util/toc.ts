import { to_number } from "svelte/internal";

export function generateToc(doc) {
    var content = doc.getElementsByClassName('content')[0];
    var toc = doc.getElementById('toc');
    var headings = content.querySelectorAll('h1,h2,h3,h4,h5,h6');
    if (headings.length == 0) {
        toc.innerHTML = '';
        return;
    }
    var lastI = 0;
    var result = '';
    headings.forEach((hx) => {
        var id = hx.id;
        var type = hx.localName;
        var content = hx.textContent;
        var i = to_number(type.match('\\d+'));
        var element = '';
        if (lastI != 0 && lastI > i) {
            element += '</ol>';
        }
        if (lastI != 0 && lastI < i) {
            element += '<ol class="pl-8 list-decimal">';
        }
        element += `
        <li class="py-1">
            <a class="underline lg:hover:white" href="#${id}">${content}</a>
        </li>		
            `;
        element += '\n';
        result += element;
        lastI = i;
    });
    result =
        '<h2 class="text-xl">Table Of Contents</h2>\n<ol class="pl-8 list-decimal">' +
        result +
        '</ol>';
    toc.innerHTML = result;
}