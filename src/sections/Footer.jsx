import React from "react";

function Footer() {
  return (
    <footer
      className="min-h-32 bg-black flex flex-col md:flex-row justify-between items-center px-32"
      id="footer"
    >
      <h3 className="text-white font-bold text-lg">ibrahimozkan.xyz</h3>
      <a href="http://">
        <h3 className="text-white text-sm">
          View source code on <span className="underline">Github</span>
        </h3>
      </a>
    </footer>
  );
}

export default Footer;
