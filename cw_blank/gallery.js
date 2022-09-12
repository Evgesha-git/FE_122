const gallery = function(selector) {
    const container = document.getElementById(selector);
    const galleryPreview = container.querySelector('.gallery__preview');
    const close = galleryPreview.querySelector('.close');

    const elements = container.querySelector('.thumbs').children;

    const show = e => {
        e.preventDefault();

        let element = e.target;
        let imgRemove = galleryPreview.lastElementChild;

        if (imgRemove.classList.contains('img')){
            imgRemove.remove();
        }
        
        if (!element.href){
            element = element.parentNode
        }

        let href = element.href;
        let div = document.createElement('div');
        div.classList.add('img')
        let img = document.createElement('img');
        img.setAttribute('src', href);
        div.append(img);

        galleryPreview.append(div);
        galleryPreview.classList.remove('hide');
    }

    close.addEventListener('click', () => galleryPreview.classList.add('hide'));

    [...elements].forEach(el => el.addEventListener('click', show));
};

gallery('gallery'); // id