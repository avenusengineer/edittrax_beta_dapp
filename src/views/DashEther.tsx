import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useWeb3React } from "@web3-react/core";

const DashEther = (): JSX.Element => {
  const { account } = useWeb3React();

  return (
    <div className="bg-black text-white">
      <iframe
        src={`https://beyond.mypinata.cloud/ipfs/QmUuUq3A1fCyy6upyDSFifh3ocn6HAdg8MkYQckeq3WaFC/index.html?owner=0xCE2C1De9b86a6c57A3f0b027eE9db90142c8c958&viewer=${account}&tokenURI=https%3A%2F%2Fbeyond.mypinata.cloud%2Fipfs%2FQmdaobcmz2or4zPGR62PQcmdpqKxGUYdE5L5yWk1r7VrtP`}
        className="w-full h-iframe "
      />
    </div>
  );
};

export default DashEther;
