import React from "react";
import BasicGrid from "../ui/BasicGrid";

function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside className="flex flex-col justify-center items-center">
            <div>
                <BasicGrid />
            </div>
            <div className="flex justify-center items-center">
            <img className="w-16 mix-blend-color" src="https://th.bing.com/th/id/OIP.OjumLBFieAdP5YO_e6N7wwHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="gdg-logo" />
            <h1 className="text-2xl">Developer's Student Club</h1>
            </div>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
