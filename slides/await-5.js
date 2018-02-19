const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Async5;

function Async5(state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex items-center vh-100 ">
            <ul class=" list pl0 light-gray center ">
                <li class="pa3 pa4-ns">
                <pre class="code bg-black-80 pa4 f4 f3-l center green">
<code>// Patron: Async IIFE
const task1 = <span class="blue">(async function (){</span>
  // your code as a task
  try{
    const internalTask1 = await intTask1();
    const internalTask2 = await intTask2();
    return [internalTask1, internalTask2];
  } catch(e){
    console.log(e);
    return [];
  }
<span class="blue">})()</span>

(async function() {
  // main
  task1();
  task2();
})()
</code>
                </pre>
                </li>
            </ul>
        </article>
    </main>
    `
}

Async5.centered = false;
Async5.backgroundColor = 'bg-dark-blue';
Async5.color = 'washed-red';
Async5.title = 'Async Tour: async/await';

