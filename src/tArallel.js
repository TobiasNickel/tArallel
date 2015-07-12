/**
 *	@author: Tobias Nickel
 * 	@website: tnickel.de/
 *	@license: MIT
 *
 *	bring many async tasks in sync, to have a single callback
 */

 
 /**
  *@class
  *@constructor
  *usage:
  * var p = new TArallel(function(){alert('all done')});
  * p.do(function(done){
  *    somethingAsync(done)
  * })
  * //or
  * p.do(function(done){
  *     somethingAsync(function(){
  *		    DoSomethingSpecific();
  *         done();
  *     })
  * });
  * 
  */
function TArallel(done){
    this.onEnd=done;  
    this.doneCount=0;
    this.results = [];
}

TArallel.prototype.do = function(job){
    this.doneCount++;
    var that = this;
    job(function(){
       that.results.push(arguments);
        if(that.doneCount==that.results.length)
            that.onEnd(that.results)
    });
    return this;
}

/**
 * test, that needs jQuery
 */
 /*
 var p = new TArallel(function(){
    console.log('allDone');
});
 for(var i=0; i<20; i++){
    p.do(function(done){
        var j = i;
        $.get('/', function(){
            console.log('j:', j);
            done();
        });
    });
 }
/**/