# tArallel
bring many async prozesses in sync, 

Recently i had a task to with a complex structure, with uploading Computing some data, uploading the results as well, for many elements, that should provide a single callback. now i came to this result to solve the problem relatively simple

## usage:
	```js
	var tArallel = new TArallel(function() {
		alert('all done')
	});
	tArallel.do(function(done) {
		somethingAsync(done)
	})
	//or
	tArallel.do(function(done) {
		somethingAsync(function() {
			DoSomethingSpecific();
			done();
		})
	});
	```