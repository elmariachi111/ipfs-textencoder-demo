import IPFS, { CID } from 'ipfs-core';
import { useEffect, useState } from 'react';

export default function Home() {

  const [theCid, setCid] = useState<CID>();

  useEffect(() => {
    (async () => {
      const ipfs = await IPFS.create();
      const { cid } = await ipfs.add("helloooo ");
      setCid(cid);
    })();
  }, [])

  
  return ( 
      <main>
        cid1 {theCid?.toString()}
    </main>
  )
}
