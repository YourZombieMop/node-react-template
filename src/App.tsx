import React, { FC, ReactElement } from 'react';

const App: FC = (): ReactElement => {
  return (
    <>
      <header><h1>Title</h1></header>
      <main>
        <p>Text</p>
      </main>
      <footer><small>Copyright</small></footer>
    </>
  );
}

export default App;