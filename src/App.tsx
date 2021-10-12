import React, { useState } from 'react';

const App: React.FC = () => {
  const [contents, setContents] = useState('');

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={contents}
          onChange={(event) => setContents(event.target.value)}
        />
        <input type="submit" value="저장" />
      </form>
    </div>
  );
};

export default App;
