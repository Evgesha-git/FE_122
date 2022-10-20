class Main {
    constructor() {
        this.main = document.createElement('main');
        this.main.classList.add('main');
        this.main.innerHTML = `<h1>Main</h1>`;
    }

    router() {
        let hash = location.hash.slice(1);

        if (!hash) hash = 'home';

        if (hash.indexOf('/') === -1) {
            import(`./${hash}.js`)
                .then(module => {
                    this.main.innerHTML = '';
                    console.log(module.default instanceof Function);
                    if (module.default instanceof Function) {
                        let component = new module.default();
                        this.main.append(component.init())
                    } else {
                        this.main.append(module.default);
                    }
                })
                .catch(error => {
                    this.main.innerHTML = '<h1>404</h1>'
                });
        } else {
            let index = hash.indexOf('/')
            let id = hash.slice(index + 1);
            import("./product.js")
                .then(module => {
                    this.main.innerHTML = '';
                    let product = new module.default(id);
                    this.main.append(product.init());
                })
                .catch(error => {
                    this.main.innerHTML = '<h1>404</h1>'
                });
        }
    }

    init() {
        window.addEventListener('hashchange', (e) => {
            this.router();
        });

        window.addEventListener('load', () => {
            const a = document.querySelectorAll('a[href="/"]');
            console.log(a);
            a.forEach(elem => {
                elem.addEventListener('click', e => {
                    e.preventDefault();
                    location.hash = '';
                });
            });
            this.router();
        });
        return this.main;
    }
}

export default new Main().init();