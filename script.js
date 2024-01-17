//your JS code here. If required.
function throttle(callback, delay) {
	let timeoutId;
    let lastArgs;
    let lastThis;
    let shouldRun;

	function withThrottle(...args) {
		if(!timeoutId) {
			callback.apply(this,args)
			lastArgs = null
			lastThis = null
			shouldRun = false

			timeoutId = setTimeout(() => {
				timeoutId = null;
				if (shouldRun) {
                    withThrottle.apply(lastThis, lastArgs);
                    lastArgs = null;
                    lastThis = null;
                    shouldRun = false;
                }
			},delay)
			
		}else {
            lastArgs = args;
            lastThis = this;
            shouldRun = true;
        }

		withThrottle.cancel = function () {
	        clearTimeout(timeoutId);
	        timeoutId = null;
	        lastArgs = null;
	        lastThis = null;
	        shouldRun = false;
	    }
	}
	return withThrottle
}

module.exports = throttle;
