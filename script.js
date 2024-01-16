//your JS code here. If required.
function throttle(callback, delay) {
	let waitingargs;
	let shouldWait;
	let timeoutId;

	function throttler(...args) {
		if(shouldWait) {
			callback.call(this,args)
			shouldWait = false
			
			timeoutId = setTimeout(() => {
                shouldWait = true
                if (waitingArgs) {
                    // If there are waiting arguments, execute the callback with them
                    throttler.apply(this, waitingArgs)
                    waitingArgs = null
                }
            }, delay);
		} else {
            // If shouldWait is false, save the arguments for later execution
            waitingArgs = args
        }
	}
	return throttler
}

module.exports = throttle;
