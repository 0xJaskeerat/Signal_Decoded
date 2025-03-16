import { createSignal, effect } from "./custom-signal.js";

const [ count, setCount ] = createSignal(10);
const [ count2, setCount2 ] = createSignal(20);

// count() is the func, called inside effect --> calls signal's "readValue" function ("count()")
effect(() => console.log(count()))

setCount(100)

