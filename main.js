function f() {
    var handler = () => {
        for (item of document.getElementsByClassName("chat-item danmaku-item")) {
            if (!item.withDate) {
                d = new Date(parseInt(item.getAttribute("data-ts")) * 1000)
                item.innerHTML +=
                    "<div>" +
                    [d.getHours(), d.getMinutes(), d.getSeconds()]
                        .map(x => String(x).padStart(2, "0"))
                        .join(":") +
                    "</div>"
                item.withDate = true
            }
        }
        requestAnimationFrame(handler);
    };
    requestAnimationFrame(handler);
}

f();
