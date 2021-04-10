import React, { useEffect, useState } from 'react';

import IPFS, { CID } from 'ipfs-core';

function App() {

  const [cid, setCid] = useState<CID>();

  useEffect(() => {
    (async () => {
      const ipfs = await IPFS.create();
      const { cid } = await ipfs.add("helloooo ");
      setCid(cid);
    })();
  },[])


  return (
    <div className="App">
      <div>Cid is: {cid?.toString()} </div>
    </div>
  );
}

export default App;
