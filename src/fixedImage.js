const Vue = require('vue')

var app = new Vue({
  el: '#app',
  template: `
  <div>
    <div class="col-sm-4"> 
      <a class="thumbnail">
        <div class="imageOuter" >
          <img src="img/cat1.jpg" class="squareImage img-responsive full-width" />
        </div>
      </a>
    </div>

    <div class="col-sm-4"> 
      <a class="thumbnail">
        <div class="imageOuter" >
          <img src="img/cat1.jpg" class="squareImage img-responsive full-width" />
        </div>
      </a>
    </div>

    <div class="col-sm-4"> 
      <a class="thumbnail">
        <div class="imageOuter" >
          <img src="img/cat1.jpg" class="squareImage img-responsive full-width" />
        </div>
      </a>
    </div>
  </div>
  `
})