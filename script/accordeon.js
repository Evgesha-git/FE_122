const accordeon = selector => {
    const container = document.querySelector(selector);
    const buttons = container.querySelectorAll('.button');
    const contents = container.querySelectorAll('.content')

    const show = e => {
        let button = e.target;
        let nextContent = button.nextElementSibling;

        contents.forEach(el => {
            if (el !== nextContent) el.classList.remove('active');
        });
        buttons.forEach(el => {
            if (el !== button) el.classList.remove('active');
        });

        button.classList.toggle('active');
        nextContent.classList.toggle('active');
    }

    buttons.forEach(el => el.addEventListener('click', show));
}

accordeon('.acc_container');