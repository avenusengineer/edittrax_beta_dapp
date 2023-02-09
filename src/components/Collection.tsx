import { Link } from "react-router-dom";

import QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj from "../assets/QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj.jpeg";
import QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1 from "../assets/QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1.jpeg";
import QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
import founder from "../assets/founder.png";
// import QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ from "../assets/QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ.jpeg";
import icon0 from "../assets/icon0.png";
import icon1 from "../assets/icon1.png";
// import et01 from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
import et02 from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
import et01 from "../assets/square_burnt.png";
import et00 from "../assets/square_alpha_test.png";
import AudioPlayer from 'react-h5-audio-player'; // import react audio module 
import 'react-h5-audio-player/lib/styles.css'; //css of it
import thumb from "@images/thumbnail.jpg";
import et01_thumb from "@images/et001_thumbnail.jpg";


import React, { useState, useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { type } from "os";

import { scrollTop } from "utils/scroll";

gsap.registerPlugin(ScrollTrigger)

// media player data Type
type musicData = {
  trackName: string;
  artistName: string;
  src: string;
}

// media player data
const musicTracks: musicData[] = [
  // {

  //   trackName: "ACID BEACH",
  //   artistName: 'Bai-ee',
  //   src: "https://github.com/CryptoAngel1024/edittrax_beta_dapp/blob/master/src/assets/Bai-ee_(Burnt).mp3?raw=true"
  //   //MY REPO LINK: https://github.com/Bai-ee/edittrax_beta_dapp-crypto-angel/blob/master/src/assets/Bai-ee_(Acid_Beach)_RADIO.mp3?raw=true
  // },
  // {
  //   trackName: "BURNT",
  //   artistName: 'Bai-ee',
  //   src: "https://github.com/CryptoAngel1024/edittrax_beta_dapp/blob/master/src/assets/Bai-ee_(Acid_Beach)_RADIO.mp3?raw=true"
  //       //MY REPO LINK: https://github.com/Bai-ee/edittrax_beta_dapp-crypto-angel/blob/master/src/assets/Bai-ee_(Burnt).mp3?raw=true
  // },   
  // {
  //   trackName: "BOXXED",
  //   artistName: 'Bai-ee',
  //   src: "https://ipfs.io/ipfs/QmVvvb2wbNgcQVsBVqPnKD5CQFXzr6fuRapviVyfKcEJ26?filename=Bai-ee_(Acid_Beach)_RADIO.mp3"
  // },
  // {
  //   trackName: "UNTITLED",
  //   artistName: 'Bai-ee',
  //   src: "https://ipfs.io/ipfs/QmVvvb2wbNgcQVsBVqPnKD5CQFXzr6fuRapviVyfKcEJ26?filename=Bai-ee_(Acid_Beach)_RADIO.mp3"
  // },
]


const Collection = () => {
  const collection = useRef(null);

  useEffect(() => {
    const col = collection.current;
    gsap.fromTo(col, {opacity:1, y:75}, {opacity:1, y:0, duration:0.25,
      scrollTrigger: {  
        trigger:col,
        scrub: 1,
      }
    });
  });

  return (

    <section className="bg-black m-0 mb-0 sm:mt-0 md:mx-0 items-center flex flex-col justify-center pl-4 pr-4">
    {/* <div className="font-mathias mt-24 mb-0 mx-6 text-center text-yellow-75 text-5xl sm:text-7xl">
            GENESIS COLLECTION
          </div> */}
    <div className="relative sm:mt-12 min-w-0 break-words gap-0 bg-black w-full mb-6 shadow-lg rounded-xl mt-4 text-yellow-75 flex flex-col lg:flex-row content-center">
      
      <div className="px-0 flex flex-col sm:flex-row items-center">

        <div className="flex flex-wrap justify-center flex-col w-1/2">
          
          <div className="mr-auto ml-auto mt-0 mb-0 ml-0 gap-2 flex w-auto flex-col mx-0 h-auto items-center">

            {/* <img src={thumb} alt="founder_pic" className="w-2xl"/> */}

            <div className="w-full text-center mt-0 opacity-0 h-0 md:ml-12">

                <div className="flex justify-center lg:pt-4 pt-8 pb-0 hidden">
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                        <span className="text-sm text-slate-400">Photos</span>
                    </div>
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                        <span className="text-sm text-slate-400">Followers</span>
                    </div>
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                        <span className="text-sm text-slate-400">Following</span>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mr-auto mt-0 mb-0 ml-0 gap-2 flex flex-col mx-0 h-auto items-center lg:items-left hidden">
            <div className="w-full lg:w-2/3 lg:px-0">
              <div className="pl-0 gap-0 flex flex-row items-center">
                <div className="text-center sm:text-left mt-0 w-full">
                  {/* <h3 className="font-mathias text-5xl text-slate-700 font-bold leading-normal -mb-4 text-center sm:text-left">BAI-EE</h3> */}
                  <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase mt-2">
                      {/* <i className="font-mathias fas text-left mb-0 fa-map-marker-alt mr-0 text-slate-400 opacity-75"></i> */}
                      {/* Chicago, Il */}
                  </div>
                </div>
              </div>
              {/* <p className="font-light leading-relaxed text-slate-600 mb-4 text-justify text-xs ">   Bai-ee is a House Dj/producer, Live Performance Act and Record Label Owner based in Chicago. His Genesis Collection consists of 4 original tracks available for the first time as collectible music. Customize each track fro your own performance within within these interactive Music OBJKTs.</p> */}
              {/* <div className="pl-0 gap-1 flex flex-row lg:content-left">
                <a href="https://objkt.com/asset/hicetnunc/612561"  target="_blank" rel="noreferrer" className="font-mathias bg-yellow-75 w-auto text-center px-4 py-1 text-black text-xs rounded-md hover:opacity-50">
                  Website
                </a>
                <a href="https://objkt.com/asset/hicetnunc/612561"  target="_blank" rel="noreferrer" className="font-mathias bg-yellow-75 w-auto text-center px-4 py-1 text-black text-xs rounded-md hover:opacity-50">
                  Twitter
                </a>
                <a href="https://objkt.com/asset/hicetnunc/612561"  target="_blank" rel="noreferrer" className="font-mathias bg-yellow-75  w-auto text-center px-4  py-1 text-black text-xs rounded-md hover:opacity-50">
                  Discogs
                </a>
              </div> */}
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};


export default Collection;
