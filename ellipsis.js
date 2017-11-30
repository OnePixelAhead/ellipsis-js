function ellipsis(elements) {
    function run() {
        var tolerance = 2;
        window.setTimeout(function () {
            var chunk = elements.slice(0, chunkSize);
            for (var i = 0; i < chunk.length; i++) {
                var c = chunk[i];
                if (c.scrollHeight > c.clientHeight + tolerance) {
                    while (c.innerText.length && c.scrollHeight > c.clientHeight + tolerance) {
                        c.innerText = c.innerText.slice(0, -2) + '…';
                    }
                    c.innerText = c.innerText.slice(0, -1);
                    c.innerText += '…';
                }
            }
            elements = elements.slice(chunkSize);
            if (elements.length) {
                run();
            }
        }, 0);
    }
    if (elements.length) {
        run();
    }
}
custom2(document.querySelectorAll('h2'));
