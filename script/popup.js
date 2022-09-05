function popup(selector){
    const elems = document.querySelectorAll(selector);

    const close = function(e){
        if (!e.target.classList.contains('popup') && !e.target.classList.contains('popup_close')) return;

        let popup = document.querySelector('.popup');
        if (!popup) return;
        popup.remove();
    }

    const show = function(content){
        let popupContainer = document.createElement('div');
        let popupClose = document.createElement('div');
        let popupModal = document.createElement('div');
        let popupContent = document.createElement('div');

        popupContainer.classList.add('popup');
        popupClose.classList.add('popup_close');
        popupModal.classList.add('popup_modal');
        popupContent.classList.add('popup_content');

        popupClose.innerHTML = '&#215;';
        popupContent.append(content);

        popupModal.append(popupClose, popupContent);
        popupContainer.append(popupModal);
        popupContainer.addEventListener('click', close);

        document.body.append(popupContainer);
        
    }
    
    const clickHandler = function(e){
        e.preventDefault();

        let elem = e.target;
        let type = elem.dataset.type;

        if (!type){
            let parent = elem.closest('[data-type]');
            
            if (!parent) return;

            type = parent.dataset.type;

            if(!type) return;

            elem = parent;
        }

        let content = '';

        if (type === 'img'){
            const href = elem.href;
            if (!href) return;

            let img = document.createElement('img');
            img.setAttribute('src', href);

            content = img;
        }

        if (type === 'text'){
            let text = elem.title;
            if(!text) return;
            content = text; 
        }

        if (type === 'content'){
            let id = elem.dataset.id;

            if (!id) return;

            if (id === 'video'){
                const idContent = document.getElementById(id).children[0];
                if(!idContent) return;
                content = idContent;
            }

            if(id === 'feedback'){
                const idContent = document.getElementById(id).children[0];
                if(!idContent) return;
                content = idContent;
            }
        }

        show(content);
    }

    elems.forEach(elem => {
        elem.addEventListener('click', clickHandler);
    });
}

popup('[data-type]');