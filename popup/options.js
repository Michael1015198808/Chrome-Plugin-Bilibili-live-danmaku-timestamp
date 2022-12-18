var date = document.getElementById("date");
var l = [
    "不显示日期",
    "显示日期"
]
for (option of l) {
    var elem = document.createElement("div");
    var input = document.createElement("input");

    for (const [k, v] of Object.entries({
        "type": "radio",
        "id": option,
        "name": "date",
        "value": option,
    })) {
        input.setAttribute(k, v);
    }

    var label = document.createElement("label");
    label.setAttribute("for", option);
    label.append(document.createTextNode(option));

    elem.appendChild(input)
    elem.appendChild(label)
    
    date.appendChild(elem)
}