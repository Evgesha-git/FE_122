const tabs = function (selector) {
    const tabContainer = document.querySelectorAll(selector);

    const tabHandler = function (butons, contents) {
        butons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                butons.forEach(function (elem) {
                    elem.classList.remove('active');
                    btn.classList.add('active');
                });

                const indexTab = btn.dataset.tab

                contents.forEach(function (elem) {
                    if (elem.dataset.tab === indexTab) {
                        elem.classList.add('active')
                    } else {
                        elem.classList.remove('active');
                    }
                })
            });
        });
    }

    tabContainer.forEach(function (tab) {
        const tabButtons = tab.querySelectorAll('.tab');
        const contents = tab.querySelectorAll('.content');

        tabHandler(tabButtons, contents)
    });
}

// tabs('.tabs-container');

const tabsV2 = function (selector) {
    const tabContainer = document.querySelectorAll(selector);

    const showContent = function (content, j) {
        for (let i = 0; i < content.children.length; i++) {
            if (i === j) {
                content.children[i].classList.add('active')
            } else {
                content.children[i].classList.remove('active');
            }
        }

    }

    const createTab = function(count){
        let li = document.createElement('li');
        li.classList.add('tab');
        li.innerText = `tab ${count}`
        return li
    }

    const createContent = function(text){
        let li = document.createElement('li');
        li.classList.add('content');
        li.innerText = text;
        return li
    }

    const tabHandler = function (btns, contents) {
        btns.addEventListener('click', function (e) {
            let btn = e.target;
            if (!btn.classList.contains('add')) {
                for (let i = 0; i < btns.children.length; i++) {
                    if (btns.children[i] === btn){
                        btn.classList.add('active');
                        showContent(contents, i);
                    }else{
                        btns.children[i].classList.remove('active');
                    }
                }
            }else{
                let text = prompt();
                let count = btns.children.length;
                let tab = createTab(count);
                btn.before(tab);
                let content = createContent(text);
                contents.append(content);
            }
        });
    }

    tabContainer.forEach(function (tab) {
        const tabButtons = tab.querySelector('.tabs');
        const contents = tab.querySelector('.tab-content');

        tabHandler(tabButtons, contents)
    });
}

tabsV2('.tabs-container');

/**
 * На дом
 * Сделать галерею фото (попробовать). Пример - https://html5css.ru/howto/howto_js_portfolio_filter.php
 * Выполняется по аналогии с табами первой версии (с атрибутом data-)
 */