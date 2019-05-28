'use strict'

const target = document.querySelector('#target')

target.innerHTML = `
	<ol>
		<li>Comment out <code>require('./example')</code> in <code>app.js</code></li>
		<li>Save</li>
		<li>Uncomment back <code>require('./example')</code></li>
		<li>Save</li>
	</ol>
	
	<h3>Expected</h3>
	
	<p>Page content is updated by HMR.</p>
	
	<h3>Actual</h3>
	
	<p>Full page reload with warning:</p>
	
	<pre>
		[HMR] Cannot apply update. Need to do a full reload!
		...
		[HMR] Error: Aborted because ./example.js is not accepted
		Update propagation: ./example.js
				at hotApply (http://localhost:8081/main.js:476:30)
				at http://localhost:8081/main.js:314:22
		...
	</pre>
`

if (module.hot) {
  module.hot.accept()

  module.hot.dispose(() => {
    target.innerHTML = '<code>example.js</code> has been disposed'
  })
}
