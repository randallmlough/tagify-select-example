document.querySelectorAll('select.tags').forEach(elm => {
    const tagify = new Tagify(elm , {
            whitelist : ["Tag 1", "Tag 2"],
            dropdown : {
                enabled: 1,
            }
        });

    setOptions(elm, tagify.value)

    tagify.on('add', () => setOptions(elm, tagify.value))
        .on('remove', () => setOptions(elm, tagify.value))
        .on('edit', () => setOptions(elm, tagify.value))

})

function setOptions(selectElm, obj) {
    while (selectElm.firstChild) {
        selectElm.removeChild(selectElm.firstChild);
    }
    const fragment = document.createDocumentFragment();
    for (var i = 0; i < Object.keys(obj).length; i++) {
        let v = obj[i].value
        const option = new Option(v,v)
        option.setAttribute("selected","selected")
        fragment.appendChild(option)
    }
    selectElm.appendChild( fragment.cloneNode(true))
}