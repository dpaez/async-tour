const html = require('choo/html')

module.exports = AsyncIntro

function AsyncIntro (state, emitter) {

    return html`
    <header class="vh-100 bg-light-yellow dt w-100">
        <div 
          style="background:url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D) no-repeat center right;background-size: cover;" 
          class="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 class="f2-m f-subheadline-ns lh-title fw9">Async/Await</h1>
          <h2 class="f6 f2-l fw6 white-80">Mantenibilidad FTW</h2>
        </div>
    </header>
    `
}

AsyncIntro.paddings = false;
AsyncIntro.backgroundColor = 'bg-dark-gray';
AsyncIntro.color = 'dark-blue';
AsyncIntro.title = 'Async Tour: Async/Await intro';


