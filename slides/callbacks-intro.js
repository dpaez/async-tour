const html = require('choo/html')

module.exports = CallbacksIntro

function CallbacksIntro (state, emitter) {

    return html`
    <header class="vh-100 bg-light-green dt w-100">
        <div 
          style="background:url(https://images.unsplash.com/photo-1501533123-e62013cabb4f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D) no-repeat center right;background-size: cover;" 
          class="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 class="f2-m f-subheadline-ns lh-title fw9">Callbacks</h1>
          <h2 class="f6 f2-l fw6 white-80">Invirtiendo el control con funciones</h2>
        </div>
    </header>
    `
}

CallbacksIntro.paddings = false;
CallbacksIntro.backgroundColor = 'bg-dark-gray';
CallbacksIntro.color = 'washed-red';
CallbacksIntro.title = 'Async Tour: callbacks intro';


