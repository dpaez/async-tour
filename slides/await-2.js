const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Async2;

function Notes() {
    return html`
        <div>
            <h3>Referencias:</h3>
            <ul class="list pl0">
                <li class="f5 lh-copy bb b--white-30">
                Fetch standard <a href="https://fetch.spec.whatwg.org/#fetch-api" class="link gray no-underline underline-hover" rel="noopener noreferrer" target="_blank">API</a>
                </li>
            </ul>
        </div>
    `
}

function Async2(state, emitter) {

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
const user = getData(123);
// do something with user...
</code>
                </pre>
                </li>
            </ul>
        </article>
    </main>
    `
}

Async2.notes = Notes;
Async2.centered = false;
Async2.backgroundColor = 'bg-dark-blue';
Async2.color = 'washed-red';
Async2.title = 'Async Tour: async/await';
