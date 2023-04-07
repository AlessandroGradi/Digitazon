const obj = { a: 'a di obj1', fn: function() { console.log(${this.a})}}
const obj2 = { a: 'a di obj2' }

const x = 10
function fn() { console.log(${this.a}) }

fn()
fn.call( obj2 )


console.log(  )