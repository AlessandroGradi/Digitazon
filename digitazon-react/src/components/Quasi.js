/*
scrivere un pulsante non cliccabile, quando l'utente ci arriva quasi sopra 
(come potete programmare questo "quasi"?) 
il pulsante si sposta in un punto random della pagina.
Meno semplice: scrivere un componente che rappresenti un post su un forum, 
ci deve essere il post iniziale e sotto tutti i commenti.
*/

import React, { useState } from 'react';

export default function Quasi() {
  const [posizione, setPosizione] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setButtonPosition({ x: left, y: top });
  };

  return (
    <div className="quasibottone" onMouseEnter={handleMouseEnter}>
      <button>Click</button>
    </div>
    );
}