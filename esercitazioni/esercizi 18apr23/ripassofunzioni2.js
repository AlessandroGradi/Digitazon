function fn1(a /* array */) {
    if( !Array.isArray(a) ) {
      console.log('Errore! Il dato non è un array')
      return
    }
  
    for(let i = 0; i < a.length; i++) {
      console.log( 'iterazione ' + i + ': ' + a[i] )
    }
  }
  
  fn1( 10 )
  fn1( [10, 20, 30] )
  fn1( ['ciao', 'js', 10, 30] )


  //array in ingresso