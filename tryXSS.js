window.onload = () => {
  /**
   * value
   * 単純にvalueに表示されるだけ
   */ 
  document.querySelector('#inputTag').value = `<script>console.log(1)</script>`

  /**
   * innerHTML
   * <script>は無視
   */ 
  document.querySelector('#useInnerHtml').innerHTML = `<script>console.log(2)</script>
                                                      <span>hoge</span>`

  /**
   * outerHTML
   * <script>は無視
   */
  // document.querySelector('#useInnerHtml').outerHTML = `<script>console.log(3)</script>`
  // document.querySelector('#useInnerHtml').outerHTML = `<div>console.log(3)</div>`

  /**
   * appendChild
   * <script>が実行される
   */
  var script = document.createElement('script');
  script.innerHTML = `console.log(1234)`

  // document.body.appendChild(script)
  document.querySelector('#useInnerHtml').appendChild(script)
}