const filter = function(selector) {
    const container = document.getElementById(selector);
    const buttons = container.querySelector('.portfolio__filter').children;
    const elements = container.querySelector('.portfolio__list').children;

    const show = (event) => {
        const button = event.target;
        const filter = button.dataset.filter;

        [...buttons].forEach(element => {
            if (element !== button){
                element.classList.remove('active');
            }else{
                element.classList.add('active');
            }
        })

        if (filter === 'all'){
            [...elements].forEach(element => element.classList.remove('hide'))
        }else{
            [...elements].forEach(element => {
                if (element.dataset.filter !== filter){
                    element.classList.add('hide');
                }else{
                    element.classList.remove('hide');
                }
            });

        }
    }

    [...buttons].forEach(el => el.addEventListener('click', show))
};

filter('portfolio'); // id