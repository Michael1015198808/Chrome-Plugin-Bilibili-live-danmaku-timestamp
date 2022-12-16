document.getElementsByClassName("chat-items")[0]
    .addEventListener("DOMNodeInserted",
        (ev) => {
            item = ev.target;
            if (item.className.startsWith("chat-item danmaku-item ")) {
                ts = parseInt(item.getAttribute("data-ts")) * 1000 || Date.now()
                d = new Date(ts)
                item.innerHTML +=
                    "<div align=right>" +
                    [d.getHours(), d.getMinutes(), d.getSeconds()]
                        .map(x => String(x).padStart(2, "0"))
                        .join(":") +
                    "</div>"
            }
        }
    )