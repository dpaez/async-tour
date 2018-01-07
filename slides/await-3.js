const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Async3;

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

function Async3(state, emitter) {

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
try {
    const user = getData(123);
    // do something with user...
} catch(err) {
    console.error(err):
}
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
getData(123)
    .then(function(user) {
        // do something with user...
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

Async3.centered = false;
Async3.backgroundColor = 'bg-dark-blue';
Async3.color = 'washed-red';
Async3.title = 'Async Tour: async/await';

