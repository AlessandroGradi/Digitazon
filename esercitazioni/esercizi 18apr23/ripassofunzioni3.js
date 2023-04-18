let id = 1

function makePerson( n, ln ) {
  return {'id': id++, 'name': n, 'lastname': ln, 'race': 'human'}
}

const people = [makePerson('mario', 'rossi'), makePerson('luigi', 'verdi'), makePerson('peach', 'pink'), makePerson('anna', 'bianchi')]

people.forEach(function(el) {
  console.log( `ID matricola: ${el.id} Nome: ${el.name} Cognome: ${el.lastname} Race: ${el.race}` )
})

function getPersonById( _id, arr ) {
  for(let i = 0; i < arr.length; i++) {
    if( arr[i].id == _id ) 
      return arr[i]
  }
}

console.log( getPersonById(1, people) )
