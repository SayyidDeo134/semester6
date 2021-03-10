import React, { useState } from 'react';

function Tentang() {
    const [count, setCount] = useState(0);
    
    function tambah() {
      setCount(count +1);
    }
    function kurang() {
      if ( count > 0 ){
        setCount(count -1);
      }
    }

    return (
      <div className="App">
          <h1>Tentang</h1>
          <p>Counter ke : {count}</p>
          <button onClick={tambah} className="btn btn-primary">Tambah</button>
          <button onClick={kurang} className="btn btn-success">Kurang</button>
      </div>
    );
  }
  
export default Tentang;
  