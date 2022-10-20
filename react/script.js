/**
 * 1 - Создание элементов
 * 2 - Рендеринг элементов
 */

let main = document.createElement('div');
main.classList.add('main');
main.setAttribute('data-id', '324hk43');
main.innerHTML = 'Main element';

let h1 = document.createElement('h1');
h1.innerHTML = 'Main header';

let p = document.createElement('p');
p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, saepe.';

document.getElementById('root').append(main, h1, p);

//-----------------------------

let h1R = React.createElement('h1', { calssName: 'react-header' }, 'React header');
let pR = React.createElement('p', null, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, saepe.');
let mainR = React.createElement('div', {
    className: 'calss1 class2 class3',
    'data-id': '4k32jk4l',
}, [
    'Main react element',
    h1R,
    pR,
    React.createElement('img', {
        src: 'https://via.placeholder.com/40',
        alt: '#'
    }),
]);

ReactDOM.render(mainR, document.getElementById('root1'));

/**
 * 3 - Создание компонентов
 */

function Logo() {
    this.create = () => {
        this.elem = document.createElement('div');
        this.elem.classList.add('logo-vanila');
        this.elem.innerHTML = `
            <a href=''>
                <img src='https://via.placeholder.com/400x70' alt='###'/>
            </a>
        `;
        return this.elem;
    }
}

document.getElementById('root2').append(new Logo().create());

function ReactLogo() {
    const elem = React.createElement('div', {
        className: 'logo-react',
    },
        React.createElement('a', {
            href: '#',
        },
            React.createElement('img', {
                src: 'https://via.placeholder.com/500x100'
            })
        )
    );

    return elem;
}

ReactDOM.render(
    React.createElement('div', null, ReactLogo()),
    document.getElementById('root3')
);

/**
 * JSX => React
 */

ReactDOM.render(
    <React.Fragment>
        <div className="logo-jsx">
            <a href="#">
                <img src="https://via.placeholder.com/500x90" alt="" />
            </a>
        </div>
        <h1 className='jsx-header'>Lorem ipsum dolor sit amet.</h1>
    </React.Fragment>,
    document.getElementById('root4')
);

/**
 * 4 - пропсы
 * 5 - состояния компонетов
 * 6 - события
 */

function Header(props) {
    return (
        <div className="header">
            header content {props.content} {props.a + props.b}
        </div>
    )
}

class Main extends React.Component {
    constructor(props) {
        super();
    }
    //code
    render() {
        return (
            <div className="heaedr-class">
                Header class content {this.props.content} {this.props.a + this.props.b}
            </div>
        )
    }
}

function Block(props) {
    return (
        <div className="block">
            Block component child
            {props.children}
        </div>
    )
}

ReactDOM.render(
    <>
        <Block>
            <Header content={'content functional component'} a={3} b={7} />
        </Block>
        <Header content={'content functional component'} a={3} b={7} />
        <Main content={'content class component'} a={4} b={10} />
    </>,
    document.getElementById('root5')
)