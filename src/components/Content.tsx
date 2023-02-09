import { Link } from "react-router-dom";
import React, {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import handbookCover from "@images/handbookCover.jpg";
import masterPlay from "@images/master_play.png";
import loopPlay from "@images/loop_play.png";
import unlock from "@images/unlock.png";
import editLoop from "@images/edit_loop.png";
import lock from "@images/lock.png";
import original from "@images/original.png";
import utility from "@images/utility.png";
import play_bg from "@images/play_bg.jpg";
import canIuse from "@images/canIuse.jpg";
import useAnalyticsEventTracker from "Modal/analytics";
import Modal from "../Modal/Modal";
import thumb from "@images/thumbnail.jpg";
import all_markets from "@images/all_markets.png";
import all_devices from "@images/all_devices.png";
import { scrollTop } from "utils/scroll";
// import player_thumbnail from "@images/et01_instructions.png";
import howToImage from "../Modal/image_popup_howTo";
import et01_head from "@images/square_alpha_test.png";
import AudioPlayer from "react-h5-audio-player"; // import react audio module
import "react-h5-audio-player/lib/styles.css"; //css of it
// import Marketplaces from "../Modal/Marketplaces";
import { disableScroll, enableScroll } from "utils/scroll";
import et04 from "../assets/square_download_mechanism.png";
import et03 from "../assets/square_boxxed.png";
import et02 from "../assets/square_burnt.png";
import et01 from "../assets/square_alpha_test.png";
import DropDown from "../components/DropDown";
import Collapsible from "react-collapsible";
import ConnectWallet from "../components/ConnectWallet";
import colorBar from "@images/color_bar.png";

// media player data Type
type musicData = {
  trackName: string;
  artistName: string;
  src: string;
};

// media player data
const musicTracks: musicData[] = [
  {
    trackName: "ACID BEACH",
    artistName: "Bai-ee",
    src: "https://github.com/Bai-ee/edittrax_beta_dapp-crypto-angel/blob/master/src/assets/Bai-ee_(Acid_Beach)Preview.mp3?raw=true",
  },
  {
    trackName: "BOXXED",
    artistName: "Bai-ee",
    src: "https://github.com/Bai-ee/edittrax_beta_dapp-crypto-angel/blob/master/src/assets/Bai-ee_(Boxxed)Preview.mp3?raw=true",
  },
  {
    trackName: "BURNT",
    artistName: "Bai-ee",
    src: "https://github.com/Bai-ee/edittrax_beta_dapp-crypto-angel/blob/master/src/assets/Bai-ee_(Burnt)Preview.mp3?raw=true",
  },
  {
    trackName: "NO MILLS",
    artistName: "Bai-ee",
    src: "https://github.com/Bai-ee/edittrax_beta_dapp-crypto-angel/blob/master/src/assets/Bai-ee_(No_Mills)Preview.mp3?raw=true",
  },
  {
    trackName: "testest",
    artistName: "Bai-ee",
    src: "https://github.com/Bai-ee/edittrax_beta_dapp-crypto-angel/blob/master/src/assets/Bai-ee_(No_Mills)Preview.mp3?raw=true",
  },
];

type WalletProps = {
  // origEdit: string | undefined,
  // loopPlay: string | undefined,
  // editLoop: string | undefined,
  // masterPlay:  string | undefined,
  // lock:  string | undefined,
  // lokt_612561={result?.lokt_612561}
  metadata_url: string | undefined;
  creative_url: string | undefined;
  collect_url: string | undefined;
  floor_price: string | undefined;
  mint_price: string | undefined;
  lokt_612561: string | undefined;
  release_art: string | undefined;
  player_thumbnail: string | undefined;
  tokendId: string | undefined;
  artist: string | undefined;
  titleHardCode: string | undefined;
  square: string | undefined;
  unlockable: string | undefined;
  title: string | undefined;
  keyValue: string[] | undefined;
  description: string | undefined;
  mintedDate: string | undefined;
  ipfs: string | undefined;
  address: string | undefined;
};

gsap.registerPlugin(ScrollTrigger);

const Content = (props: WalletProps) => {
  // console.log(props.collect_url);

  const data = useRef(null);

  useEffect(() => {
    const dat = data.current;
    gsap.fromTo(
      dat,
      { opacity: 1, y: 75 },
      {
        opacity: 1,
        y: 0,
        duration: 0.25,
        scrollTrigger: {
          trigger: dat,
          scrub: 1,
        },
      }
    );
  });

  const gaEventTracker = useAnalyticsEventTracker("Contact us");

  const [show, setShow] = useState<boolean>(false);

  // const openInNewTab = url => {
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // };

  return (
    <section className="bg-yellow-75 flex flex-col items-center gap-0 px-0 py-9 pb-0 mb-0 md:mb-0 md:pb-0 md:mx-0 order-last">
      <div className="flex flex-col items-center gap-0 md:flex-row md:gap-8 mb-0 mt-4 lg:mt-14">
        <img
          src={props.release_art}
          alt="rotating head"
          className="w-md max-w-xs rounded-md shadow-2xl"
        />
        <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
          <div className="font-mathias text-7xl font-extrabold mt-8 text-center">
            {props.titleHardCode}
          </div>

          <div className="flex col">
            <div className="font-mathias mt-0 text-3xl text-center">
              Producer: &nbsp;
            </div>
            <a
              href="https://tell.ie/bai_ee/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              <div className="font-mathias mt-0 text-3xl text-center hover:opacity-50">
                {props.artist}
              </div>
            </a>
          </div>

          <div className="mt-0 flex flex-wrap mb-0 sm:mb-0 pt-0 justify-center md:justify-left h-auto w-96">
            <div className="mt-2 flex flex-wrap mb-0 sm:mb-2 pt-0 h-auto justify-center lg:justify-start">
              {props.keyValue?.map((item, i) => (
                <button
                  className="rounded-3xl flex content-center text-yellow-75 px-2 py-1 text-xxs gap-y-1 ml-1 mt-1 mt-0 outline_button uppercase"
                  key={i}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lightblue py-4 px-4 md:px-12 lg:px-20 mb-0 w-screen ">
        <div className="mx-auto gap-0 sm:gap-16 flex flex-col lg:flex-row ">
          <dl className="w-full lg:w-2/3 pt-16">
            <Collapsible
              className="outline_button_meta bg-yellow-75 text-black text-center w-34 rounded-md mb-24 shadow-2xl mt-36 lg:mt-34 cursor-pointer hover:opacity-50"
              trigger="Metadata"
            >
              <div className="font-mathias mt-8 text-4xl  text-center px-4 py-2 text-black rounded-md ">
                OBJKT #{props.tokendId}
              </div>

              <div className="font-mathias mt-6">
                <button
                  className="bg-black text-center px-4 py-2 text-yellow-75 rounded-md hover:opacity-50"
                  onClick={() => window.open(props.metadata_url, "_blank")}
                >
                  Metadata on IPFS
                </button>
              </div>

              <div className="font-mathias mt-2 ">
                <button
                  className="bg-black text-center px-4 py-2 text-yellow-75 rounded-md hover:opacity-50"
                  onClick={() => window.open(props.creative_url, "_blank")}
                >
                  Creative on IPFS
                </button>
              </div>

              <div className="font-mathias mt-2 mb-2 text-lg mt-10 text-left">
                Description
              </div>

              <p className="text-justify">{props.description}</p>

              <h2 className="font-mathias mt-2 mb-2 text-lg mt-10 text-left">
                Collector Rights
              </h2>

              <p className="text-justify mb-6">
                Owners of OBJKT #{props.tokendId} are allowed to create,
                download and dj edits of its contained track "BURNT". Collectors
                are not allowed to repackage edits for sale or distribution.
                Assume no other rights
              </p>

              <h2 className="font-mathias mt-2 mb-2 text-lg mt-10 text-left">
                Thumbnail
              </h2>
              <img
                src={props.player_thumbnail}
                alt="icon1"
                className="w-full pb-4 md:ml-0 shadow-2xl rounded-md"
              />
            </Collapsible>

            <div className="bg-transparent mx-0 rounded-lg mb-4 w-auto rounded-sm px-0 mt-4 px-0 lg:mt-8 mt-42">
              <div className="grid grid-cols-1 gap-2 mx-0 max-w-screen-xl hover:scale-75 h-auto">
                <h2 className="font-mathias md:mt-0 w-full text-3xl sm:text-2xl w-full lg:text-4xl xl:text-4xl font-extrabold align-middle mb-0 pt-2">
                  {/* <a href="https://objkt.com/asset/hicetnunc/612561"  target="_blank" rel="noreferrer" className=""> */}
                  <button
                    className=" w-34 text-center bg-orange-900 py-4 w-full px-6 text-yellow-75 rounded-md  hover:opacity-50 shadow-2xl mb-0"
                    onClick={() => window.open(props.collect_url, "_blank")}
                  >
                    COLLECT
                  </button>
                  {/* </a> */}
                </h2>

                <h2 className="font-mathias w-full text-3xl sm:text-2xl lg:text-4xl xl:text-4xl font-extrabold align-middle mb-4">
                  <ConnectWallet />
                  <h2 className="font-mathias align-middle flex content-center col mt-2 text-3xl lg:text-4xl xl:text-4xl font-extrabold mb-0">
                    <button
                      className="outline_button_main w-34 text-center bg-black py-4 w-full px-6 text-yellow-75 rounded-md  hover:opacity-50 shadow-2xl mb-4"
                      // onClick={() => openInNewTab('https://google.com')}
                      onClick={() => scrollTop()}
                    >
                      DOWNLOAD
                    </button>
                  </h2>
                  {/* <button className="bg-orange-900 w-34 text-center w-full py-4 px-4  text-yellow-75 rounded-md hover:opacity-50 shadow-2xl" onClick={()=> {setShow(true); disableScroll();}}>
      Connect & Download
      </button> */}
                  &nbsp;<br></br>
                </h2>
              </div>
            </div>
          </dl>

          <dl className="w-full md:w-full ml:auto mr:auto mb-28">
            <h2 className="font-mathias  bg-yellow-75 text-center w-34  text-black rounded-md lg:mt-0 mb-4 lg:mb-32 shadow-2xl mt-5 lg:mt-24">
              Genesis Collection
            </h2>

            {/* Player 1 */}

            <div className="mb-2 bg-black rounded-lg border-5 px-2 border-yellow-75 shadow-2xl lg:mt-32">
              <div className="text-yellow-75 h-24 sm:h-28 border-0 border-yellow-75 flex flex-row rounded-md items-center font-mathias justify-evenly py-0 px-0 md:p-4 bg-transparent player1">
                <img
                  src={et01}
                  alt="icon1"
                  className="w-20 p-0 ml-1 sm:ml-10 md:ml-0 shadow-2xl rounded-md"
                />
                <div className="flex-row flex m-0 w-full justify-around md:mt-0">
                  <div className="text-left w-auto pl-2 player_name">
                    <div>{musicTracks[0].trackName}</div>
                    <div>{musicTracks[0].artistName}</div>
                    <div className="text-xxs">Acid House</div>
                  </div>
                  <div className="border-2 align-middle border-yellow-75 pt-2 sm:px-2 text-yellow-75 shadow-4xl leading-3 rounded-md px-2 py-1 mt-auto mb-auto hover:text-gray-300">
                    <Link to="/edit-trax/et001">
                      <button
                        className="uppercase leading-tight h-4 mt-auto text-sm"
                        onClick={() => scrollTop()}
                      >
                        LOAD
                      </button>
                    </Link>
                  </div>
                  <AudioPlayer
                    autoPlay
                    style={{ backgroundColor: "#ffffff" }} // media player background color
                    src={musicTracks[0].src} // media source
                    showJumpControls={false} // Jump control remove
                    showFilledProgress={false} // show filled process color
                    customVolumeControls={[]} // Volume control remove
                    customAdditionalControls={[]} // addition control remove
                  />
                </div>
              </div>
            </div>

            <div className="mb-2 bg-black rounded-lg border-5 px-2 border-yellow-75 shadow-2xl ">
              <div className="text-yellow-75 h-24 sm:h-28 border-0 border-yellow-75 flex flex-row rounded-md items-center font-mathias justify-evenly py-0 px-0 md:p-4 bg-transparent player1">
                <img
                  src={et03}
                  alt="icon1"
                  className="w-20 p-0 ml-1 sm:ml-10 md:ml-0 shadow-2xl rounded-md"
                />
                <div className="flex-row flex m-0 w-full justify-around md:mt-0">
                  <div className="text-left w-auto pl-2 player_name">
                    <div>{musicTracks[1].trackName}</div>
                    <div>{musicTracks[1].artistName}</div>
                    <div className="text-xxs">Beat Track</div>
                  </div>
                  <div className="border-2 align-middle border-yellow-75 pt-2 sm:px-2 text-yellow-75 shadow-4xl leading-3 rounded-md px-2 py-1 mt-auto mb-auto hover:text-gray-300">
                    <Link to="/edit-trax/et003">
                      <button
                        className="uppercase leading-tight h-4 mt-auto text-sm"
                        onClick={() => scrollTop()}
                      >
                        LOAD
                      </button>
                    </Link>
                  </div>
                  <AudioPlayer
                    autoPlay
                    style={{ backgroundColor: "#ffffff" }} // media player background color
                    src={musicTracks[1].src} // media source
                    showJumpControls={false} // Jump control remove
                    showFilledProgress={false} // show filled process color
                    customVolumeControls={[]} // Volume control remove
                    customAdditionalControls={[]} // addition control remove
                  />
                </div>
              </div>
            </div>

            <div className="mb-2 bg-black  rounded-lg border-5 px-2 border-yellow-75 shadow-2xl ">
              <div className="text-yellow-75 h-24 sm:h-28 border-0 border-yellow-75 flex flex-row rounded-md items-center font-mathias justify-evenly py-0 px-0 md:p-4 bg-transparent player1">
                <img
                  src={et02}
                  alt="icon1"
                  className="w-20 p-0 ml-1 sm:ml-10 md:ml-0 shadow-2xl rounded-md"
                />

                <div className="flex-row flex m-0 w-full justify-around md:mt-0">
                  <div className="text-left w-auto pl-2 player_name">
                    <div>{musicTracks[2].trackName}</div>
                    <div>{musicTracks[2].artistName}</div>
                    <div className="text-xxs">Acid Techno</div>
                  </div>
                  <div className="border-2 align-middle border-yellow-75 pt-2 sm:px-2 text-yellow-75 shadow-4xl leading-3 rounded-md px-2 py-1 mt-auto mb-auto hover:text-gray-300">
                    <Link to="/edit-trax/et002">
                      <button
                        className="uppercase leading-tight h-4 mt-auto text-sm"
                        onClick={() => scrollTop()}
                      >
                        LOAD
                      </button>
                    </Link>
                  </div>
                  <AudioPlayer
                    autoPlay
                    style={{ backgroundColor: "#ffffff" }} // media player background color
                    src={musicTracks[2].src} // media source
                    showJumpControls={false} // Jump control remove
                    showFilledProgress={false} // show filled process color
                    customVolumeControls={[]} // Volume control remove
                    customAdditionalControls={[]} // addition control remove
                  />
                </div>
              </div>
            </div>

            <div className="mb-2 bg-black  rounded- border-5 px-2 border-yellow-75 shadow-2xl rounded-md">
              <div className="text-yellow-75 h-24 sm:h-28 border-0 border-yellow-75 flex flex-row rounded-lg items-center font-mathias justify-evenly py-0 px-0 md:p-4 bg-transparent player1">
                <img
                  src={et04}
                  alt="icon1"
                  className="w-20 p-0 ml-1 sm:ml-10 md:ml-0 shadow-2xl rounded-md"
                />

                <div className="flex-row flex m-0 w-full justify-around md:mt-0">
                  <div className="text-left w-auto pl-2 player_name">
                    <div>{musicTracks[3].trackName}</div>
                    <div>{musicTracks[3].artistName}</div>
                    <div className="text-xxs">Acid Techno</div>
                  </div>
                  <div className="border-2 align-middle border-yellow-75 pt-2 sm:px-2 text-yellow-75 shadow-4xl leading-3 rounded-md px-2 py-1 mt-auto mb-auto hover:text-gray-300">
                    <Link to="/edit-trax/et004">
                      <button
                        className="uppercase leading-tight h-4 mt-auto text-sm"
                        onClick={() => scrollTop()}
                      >
                        LOAD
                      </button>
                    </Link>
                  </div>
                  <AudioPlayer
                    autoPlay
                    style={{ backgroundColor: "#ffffff" }} // media player background color
                    src={musicTracks[3].src} // media source
                    showJumpControls={false} // Jump control remove
                    showFilledProgress={false} // show filled process color
                    customVolumeControls={[]} // Volume control remove
                    customAdditionalControls={[]} // addition control remove
                  />
                </div>
              </div>
            </div>

            {/* <div className="mb-2 bg-black  rounded- border-5 px-2 border-yellow-75 shadow-2xl rounded-md">
              <div className="text-yellow-75 h-24 sm:h-28 border-0 border-yellow-75 flex flex-row rounded-lg items-center font-mathias justify-evenly py-0 px-0 md:p-4 bg-transparent player1">
                <img
                  src={et04}
                  alt="icon1"
                  className="w-20 p-0 ml-1 sm:ml-10 md:ml-0 shadow-2xl rounded-md"
                />

                <div className="flex-row flex m-0 w-full justify-around md:mt-0">
                  <div className="text-left w-auto pl-2 player_name">
                    <div>{musicTracks[4].trackName}</div>
                    <div>{musicTracks[4].artistName}</div>
                    <div className="text-xxs">Acid Techno</div>
                  </div>
                  <div className="border-2 align-middle border-yellow-75 pt-2 sm:px-2 text-yellow-75 shadow-4xl leading-3 rounded-md px-2 py-1 mt-auto mb-auto hover:text-gray-300">
                    <Link to="/edit-trax/et005">
                      <button
                        className="uppercase leading-tight h-4 mt-auto text-sm"
                        onClick={() => scrollTop()}
                      >
                        LOAD
                      </button>
                    </Link>
                  </div>
                  <AudioPlayer
                    autoPlay
                    style={{ backgroundColor: "#ffffff" }} // media player background color
                    src={musicTracks[3].src} // media source
                    showJumpControls={false} // Jump control remove
                    showFilledProgress={false} // show filled process color
                    customVolumeControls={[]} // Volume control remove
                    customAdditionalControls={[]} // addition control remove
                  />
                </div>
              </div>
            </div> */}

          </dl>
        </div>
      </div>

      <img
        src={colorBar}
        alt="color bar"
        className="w-full h-3 pt-o mt-0 bottom-0"
      />
    </section>
  );
};

export default Content;
