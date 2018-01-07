const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Async4;

function Notes() {
    return html`
        <div>
            <h3>Referencias:</h3>
            <ul class="list pl0">
                <li class="f5 lh-copy bb b--white-30">
                </li>
            </ul>
        </div>
    `
}

function Async4(state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex">
            <ul class=" list pl0 f2-l f3 light-gray center">
                <li class="pa3 pa4-ns">
                <pre class="code bg-black-80 pa2 f3 center green">
<code><span class="blue">async</span> function getData(userId){
    const response = <span class="pink">await</span> fetch('https://myendpoint.com/' + userId);
    const result = <span class="pink">await</span> response.json();
    return result;
}
const user1 = getData(123);
const user2 = getData(456);
const user3 = getData(789); // sync, una busqueda desp de la otra. :/

// do something with the users...
</code>
                </pre>
                </li>
                <li class="tc yellow">
                    VS
                </li>
                <li class="pa3 pa4-ns">
                <pre class="code bg-black-80 pa2 f3 center green">
<code>function getData(userId){
    return fetch('https://myendpoint.com/' + userId)
        .then(function (response) {
            return response.json()
        })
}
Promise.all([  // busquedas en paralelo, pueden ser intercaladas en el event loop.
    getData(123),
    getData(456),
    getData(789)
])
.then(function(users) {
    // do something with users...
})
.catch(console.error);
</code>
                </pre>
                </li>
            </ul>
        </article>
    </main>
    `
}

Async4.centered = false;
Async4.backgroundColor = 'bg-dark-blue';
Async4.color = 'washed-red';
Async4.title = 'Async Tour: async/await';

