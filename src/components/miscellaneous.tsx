import React, {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

import handbook_2 from "../assets/handbook_2.png";
import marketplace_2 from "../assets/marketplace_2.png";
import github_2 from "../assets/github_2.png";
import thumb from "../assets/players.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import handbookCover from "@images/handbookCover.jpg";
import canIuse from "@images/canIuse.jpg";
import utility from "@images/utility.png";
// import utility from '../assets/utility.png;
import wiki from "@images/wiki.png";
import colorBar from "@images/color_bar.jpg";

gsap.registerPlugin(ScrollTrigger);

const features1 = [
  {
    name: "FOR DJS",
    description:
      "Create rapid edits and quickly download multiple arrangements of my track for your own djing, performance and content creation.",
  },
  {
    name: "FOR PRODUCERS",
    description:
      "No more digital service providers taking fees to distribute access mechanisms for our music. ",
  },
  {
    name: "FOR COLLABS",
    description:
      "A framework we can collaborate within - musicians, designers, developers - creating unique and meaningful, collectible art works. ",
  },
  {
    name: "FOR CULTURE",
    description:
      "Building the bottom of a funnel for independent music producers, while supporting 1 of 1 selector djs creating unique dance-floor experiences.",
  },
];
const features2 = [
  {
    name: "TEZOS BLOCKCHAIN",
    description: "Proof-of-stake protocol for smart contract development.",
  },
  { name: "FA2 CONTRACT", description: "Equivalent to ERC-721 on Ethereum." },
  {
    name: "INTERACTIVE OBJKT",
    description:
      "Following all best practices for interactive creative leveraging HTML.",
  },
  // { name: 'BUY, SELL & DL', description: 'As a self-custodied token *Anywhere' },
];

const miscellaneous = () => {
  return (
    <section className="bg-black pt-0 px-0 pb-0 rounded-br mt-0 mx-2 md:mx-0">
      {/* <img src={colorBar} alt="color bar" className="w-full"/> */}

      {/* <div className=" mx-auto my-auto flex rounded-md shadow-sm align-middle center sm:max-w-sm">
<img src="https://i.postimg.cc/zfDJcy2h/load.gif" alt="load" className=""/>
</div>

<div className="mb-14 mx-3">

<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-0 px-4 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 mt-0 mb-8 lg:mb-0 "><div>

<dl className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

{features1.map((feature) => (
<div key={feature.name} className="">
<dt className="font-mathias text-2xl lg:text-4xl text-yellow-75 text-center">{feature.name}</dt>
<dd className="mt-2 text-sm text-gray-500 text-center">{feature.description}</dd>
</div>
))}
</dl>

</div>
<img src={utility} alt="load" className="main_image ml-auto mr-auto"/>

<div className="bg-yellow-75 p-10 rounded-lg">

<div className="font-mathias mb-8 text-center text-5xl text-black">
TECH
</div>
<dl className="mt-22 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
{features2.map((feature) => (
<div key={feature.name} className="border-tpt-4">
<dt className="font-mathias text-2xl  lg:text-4xl text-black ml-auto text-center">{feature.name}</dt>
<dd className="mt-2 text-sm text-gray-500 text-center">{feature.description}
</dd>

</div>

))}

<div className="ml-auto mr-auto">

<div className="font-mathias mb-0 text-center align-middle text-center text-5xl ml-auto mr-auto text-black text-2xl  lg:text-4xl">
LIMITATIONS
</div> 
<div className="mt-2 mb-4 text-sm text-gray-500 w-full text-center ml-auto mr-auto content-center mt-0 px-6">
See what Tezos Maketplaces you can unlock and download from EditTrax players on.</div>

<img src={canIuse} alt="load" className=""/>
</div>

<div className="bg-yellow-75 p-0 rounded-lg text-center text-xs">
<b>Resources:</b><br></br>
Tezos.com<br></br>
Opentezos.com<br></br>
Teia.art (Github)
</div>

</dl>
</div>
</div>
</div>

<div className="mx-auto md:max-w-6xl gap-0 flex flex-col xlg:flex-row items-center">
<dl className="w-full md:w-1/2 flex col align-middle items-center mt-0">
</dl>
*/}

      <div className=" mx-auto my-auto flex rounded-md shadow-sm align-middle center sm:max-w-sm mt-28 md:mt-0">
        <img
          src="https://i.postimg.cc/zfDJcy2h/load.gif"
          alt="load"
          className=""
        />
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
        <div className="">
          <div className="font-mathias mb-0 text-center align-middle text-center text-5xl ml-auto mr-auto text-yellow-75 mt-24">
            HIT THE WIKI <br></br>FOR SUPPORT
            <br></br>
          </div>

          <div className="mt-2 text-sm text-gray-500 w-full text-center ml-auto mr-auto content-center mt-0 px-6">
            Real-time project information, updates and FAQ.
            <a
              href="https://tell.ie/bai_ee/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {/* Bai-ee */}
            </a>
            &nbsp;
            <img
              src={wiki}
              alt="load"
              className="mt-4 w-72 ml-auto mr-auto mb-4"
            />
            <a
              href="https://iris-termite-e82.notion.site/OBJKT-612561-824dbe0144744143b43ee26f79f6c50a"
              target="_blank"
              rel="noreferrer"
              className="uppercase font-mathias"
            >
              <button className="bg-red-900 text-white text-xl py-2 px-4 rounded-lg font-sans mb-16">
                EditTrax.Wiki
              </button>
            </a>
          </div>
        </div>

        <div className="">
          <div className="font-mathias mb-0 text-center align-middle text-center text-5xl ml-auto mr-auto text-yellow-75 mt-0 md:mt-24">
            SUBSCRIBE <br></br>FOR NEW TRAX
          </div>

          <div className="mt-2 text-sm text-gray-500 w-full text-center ml-auto mr-auto content-center mt-0 px-6">
            Respectful updates / music and features.
            <a
              href="https://tell.ie/bai_ee/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {/* Bai-ee */}
            </a>
            &nbsp;
          </div>

          <iframe
            height="400px"
            src="https://cc76d0e7.sibforms.com/serve/MUIEABmPTk29QfL4yduTrrV_o12F8R0MeVMsDaQLt3I-jyNcLLMlD8iYTPuzZ3_je75sgz9XqKNwsY_khnb8qbt25ijulHmNf0nf_202ssBaBvrWVIjbKUlsaNMqU1NzpiZgLcGX8JLRE-Vxc1m-BRJXwXg6iD87OimUFLAyxtZ24Vk9Pn0m25j5fRYT2haz3_RpIOC6VKGmE-EK"
            scrolling="auto"
            className="newsletter block ml-auto mr-auto w-full -mt-12 bg-transparent"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default miscellaneous;
