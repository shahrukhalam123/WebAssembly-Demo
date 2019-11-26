//code for import of web assembly  file into js

let mul;

function loadWasm(filename)
{
    return fetch(filename)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => { return new WebAssembly.Instance(module)})
};

loadWasm('test.wasm')
.then(instance => {
    mul = instance.exports._Z3mulii;
})

 