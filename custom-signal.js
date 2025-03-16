let currentValue = ''

// accepts an initial value --> to set internally managed data to an initial value
export function createSignal (initialValue) {
    let value = initialValue;

    // enabling reactivity
    const subscribers = [];

    // setter function
    function setValue(newValue) {
        value = newValue
        // assuming sub is a function to know when the signal value changed
        // after updating this global variable --> effect will be executed
        subscribers.forEach((sub) => sub())
    }

    // getter function
    function readValue() {
        subscribers.push(currentValue) 
        return value
    }

    return [readValue, setValue]
}

// wrap any code that reads a signal
export function effect(fn) {
    currentValue = fn;
 
    // func that will call the signal "readValue" func inside it
    fn();

    currentValue = null
}