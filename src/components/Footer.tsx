import et_horiz from "@images/et_horizontal.png";

const Footer = () => {
  return (
    <footer className="bg-black p-10 dark:bg-gray-900 lg:mt-18">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 flex flex-col align-middle items-center sm:items-start mb-24">
        <a href="https://edittraxnft.on.fleek.co/" target="_blank"  rel="noreferrer"className="flex items-center">
            <img src={et_horiz} alt="logo" id="logo_test" className="w-44 mb-8 ms:mb-0 w-42 mt-8 sm:w-44"/>
        </a>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:gap-8 sm:grid-cols-4 text-center md:text-left">
            <div className="mb-6 md:mb-0 flex flex-col align-middle items-center sm:items-start">
                <h2 className="font-mathias mb-6 text-lg font-semibold text-yellow-75 uppercase dark:text-white">ABOUT</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://iris-termite-e82.notion.site/OBJKT-612561-824dbe0144744143b43ee26f79f6c50a"  rel="noreferrer" target="_blank" className="hover:underline ">WIKI</a>
                    </li>
                    <li>
                        <a href="https://edittraxnft.on.fleek.co/" target="_blank"  rel="noreferrer" className="hover:underline">Website</a>
                    </li>
                </ul>
            </div>
            <div className="mb-6 md:mb-0 flex flex-col align-middle items-center sm:items-start">
            <h2 className="font-mathias mb-6 text-lg font-semibold text-yellow-75 uppercase dark:text-white">ONBOARD</h2>
            <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                    <a href="https://www.figma.com/proto/3nCbiV2YWZC8nz0820lStQ/EDITTRAX-Deck-2022?page-id=0%3A1&node-id=1%3A326&viewport=528%2C428%2C0.03&scaling=scale-down" target="_blank"  rel="noreferrer" className="hover:underline">Handbook</a>
                </li>
                <li className="mb-4">
                    <a href="https://docs.google.com/forms/d/1GIY4O4xvrsbwUDKSiFzEXJ8Lxv4MSG7TmhZY6FvKcrI/edit" target="_blank" rel="noreferrer"  className="hover:underline">Checklist</a>
                </li>
            </ul>
            </div>
            <div className="mb-6 md:mb-0 flex flex-col align-middle items-center sm:items-start">
                <h2 className="font-mathias mb-6 text-lg font-semibold text-yellow-75 uppercase dark:text-white">Social</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                        <a href="https://twitter.com/edittrax" target="_blank" rel="noreferrer" className="hover:underline ">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.spatial.io/s/Bai-ees-Digital-Scene-6341a2a2e290f800019fb559?share=3463503426886487892" target="_blank"  rel="noreferrer" className="hover:underline">Spatial</a>
                    </li>
                </ul>
            </div>
            <div className="mb-6 md:mb-0 flex flex-col align-middle items-center sm:items-start">
                <h2 className="font-mathias mb-6 text-lg font-semibold text-yellow-75 uppercase dark:text-white">CONTACT</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="mailto:edittrax@protonmail.com" target="_blank"  rel="noreferrer" className="hover:underline ">Email</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://calendly.com/bai-ee/30min?month=2022-10" target="_blank"  rel="noreferrer" className="hover:underline ">Calendly</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 text-yellow-75 sm:mx-auto lg:my-8" />
    <div className="flex col w-full items-center content-center flex-col md:flex-row sm:flex sm:items-start sm:justify-between lg:content-justify">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©2022 <a href="" target="_blank"  className="hover:underline">EditTrax™</a>
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://mobile.twitter.com/edittrax" target="_blank"  rel="noreferrer" className="text-yellow-75 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span className="sr-only">Twitter page</span>
            </a>
            <a href="https://github.com/Bai-ee" target="_blank"  rel="noreferrer" className="text-yellow-75 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                <span className="sr-only">GitHub account</span>
            </a>
        </div>
    </div>
</footer>
  );
};

export default Footer;
