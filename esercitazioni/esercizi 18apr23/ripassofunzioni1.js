function fn1( x, y ) {
    if( typeof x != 'number' || typeof y != 'number' ) {
      return;
    }
  
    return x + y
  }
  
  const r1 = fn1(10, 4)
  console.log( r1 )
  console.log( fn1('ciao', ' js') )
  