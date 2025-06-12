import React from 'react';
import ShaderBackground from './ShaderBackground';

function App() {
  return (
    <>
      <ShaderBackground />
      <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        <h1>Halo, ini portofolio saya dengan background animasi keren!</h1>
        {/* Konten lain di sini */}
      </div>
    </>
  );
}

export default App;
