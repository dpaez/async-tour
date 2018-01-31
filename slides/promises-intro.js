const html = require('choo/html')

module.exports = PromisesIntro

function PromisesIntro (state, emitter) {

    return html`
    <header class="vh-100 bg-dark-gray dt w-100">
        <div
          style="background:url(https://images.unsplash.com/photo-1500487003906-9baadc8d610d?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D) no-repeat center right;background-size: cover;"
          class="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 class="f2-m f-subheadline-ns lh-title fw9">Promises</h1>
          <h2 class="f6 f2-l fw6 white-80">Encapsulando async</h2>
        </div>
    </header>
    `
}

PromisesIntro.paddings = false;
PromisesIntro.backgroundColor = 'bg-dark-gray';
PromisesIntro.color = 'light-purple';
PromisesIntro.title = 'Async Tour: promises intro';


