let student = {
    'name': 'mario rossi',
    'age': 10,
    'sayHello': function() {
      console.log('ciao mi chiamo ' + this.name)
    }
  }
  
  student.sayHello()
  
  function fn() {
    console.log( 'valore: ' + this.innerWidth )
  }
  
  console.log( window.innerWidth )
  
  fn()
  

//   function fn2() {
//     console.log(this.name)
//   }

//   fn2.call(student)