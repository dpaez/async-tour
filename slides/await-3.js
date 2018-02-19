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
        <article class="flex items-center">
            <ul class=" list pl0 f2-l f3 light-gray center">
                <li class="pa3 pa4-ns">
                <pre class="code bg-black-80 pa3 f3 f2-l center green">
<code><span class="blue">async</span> function getData(userId){
  const response = <span class="pink">await</span> fetch('https://example.com/' + userId);
  const result = <span class="pink">await</span> response.json();
  return result;
}
</code>
                </pre>
                </li>
                <li class="tc yellow">
                    VS
                </li>
                <li class="pa3 pa4-ns">
                <pre class="code bg-black-80 pa3 f3 f2-l center green">
<code>function getData(userId){
  return fetch('https://example.com/' + userId)
    .then(function (response) {
      return response.json()
    })
}
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

