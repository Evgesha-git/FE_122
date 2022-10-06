export const createElement = (name, attributes = [], content = '') => {
    let elem = document.createElement(name);

    if (attributes.length > 0) {
        attributes.forEach(attr => elem.setAttribute(attr[0], attr[1]));
    }

    if (content) {
        elem.innerHTML = content;
    }
    return elem;
}