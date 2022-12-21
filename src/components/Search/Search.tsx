import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [value, setValue] = useState('');

  const onClick = async () => {
    const result = await axios.get(`https://viacep.com.br/ws/${value}/json/`);
  
    console.log(result);
  }

  return (
    <section>
      <form onSubmit={() => onClick()}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Digite o CEP aqui" className='input input-bordered input-accent m-5'/>
        <button type='submit' className='btn btn-accent'>
          Pesquisar
        </button>
      </form>
    </section>
  );
}

export default Search;
