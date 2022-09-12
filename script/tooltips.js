const tooltips = (selector) => {
    const links = document.querySelectorAll(selector)

    const show = (e) => {
        const element = e.target;
        console.log(element)
        let x = element.offsetTop + element.offsetHeight;
        let y = element.offsetLeft + 30;
        let text = element.title;
        let parent = element.parentNode;
        createToltip(x, y, text, parent);
    }

    const createToltip = (x, y, text, parent) => {
        let elem = document.createElement('div');
        elem.classList.add('tooltip_elem');
        elem.innerText = text;
        parent.append(elem);
        elem.style.top = `${x}px`;
        elem.style.left = `${y}px`;
    }

    const hide = () => {
        const tooltip = document.querySelector('.tooltip_elem');
        if (!tooltip) return;
        tooltip.remove();
    }

    links.forEach(el => el.addEventListener('mouseover', show));
    links.forEach(el => el.addEventListener('mouseleave', hide));

}

tooltips('.tooltip');