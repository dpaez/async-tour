const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Async21;

function Async21(state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex items-center vh-75">
            <ul class=" list pl0 light-gray center">
                <li class="pa3 pa4-ns">
                <pre class="code bg-black-80 pa4 f3 f2-l center green">
<code>// Manejo de errores
<span class="blue">async</span> function getData(userId){
  <span class="red">try </span>{
      const response = <span class="pink">await</span> fetch('https://example.com/' + userId);
      const result = <span class="pink">await</span> response.json();
      return result;
  }<span class="red"> catch (e) </span>{
    console.log('ERROR: ', e.message);
    throw e; // si queremos propagar el error
  }
}
</code>
                </pre>
                </li>
            </ul>
        </article>
    </main>
    `
}

Async21.centered = false;
Async21.backgroundColor = 'bg-dark-blue';
Async21.color = 'washed-red';
Async21.title = 'Async Tour: async/await';

