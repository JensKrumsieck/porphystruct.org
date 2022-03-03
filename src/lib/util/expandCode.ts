export function expandCode(doc: Document) {
    var codeBoxes = doc.getElementsByClassName('collapsible')
    for (var i = 0; i < codeBoxes.length; i++) {
        if (codeBoxes[i].clientHeight < 200) return;
        codeBoxes[i].classList.add("collapsed")
        var btn = doc.createElement("button");
        btn.classList.add("bg-green", "rounded-lg", "text-off-white", "hover\:bg-dark-blue",
            "self-left", "absolute", "right-1", "px-4", "py-2")
        btn.innerHTML = "Toggle Code";
        const me = codeBoxes[i];
        btn.onclick = () => { me.classList.toggle('collapsed') };
        codeBoxes[i].prepend(btn)
    }
}