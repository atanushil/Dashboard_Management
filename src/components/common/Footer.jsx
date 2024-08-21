
import {
  discordBW,
  githubBW,
  linkedinBW,
  location,
  mail,
  phone,
  twitterBW,
  discord,
  github,
  linkedin,
  twitter,
} from "../../utils";
import { gsap } from "gsap";

const Footer = () => {
  const handleMouseEnter = (platform) => {
    gsap.to(`.${platform}-img`, { opacity: 0, duration: 0.2 });
    gsap.to(`.${platform}-hover`, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.in",
    });
  };

  const handleMouseLeave = (platform) => {
    gsap.to(`.${platform}-img`, { opacity: 1, duration: 0.2 });
    gsap.to(`.${platform}-hover`, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleCopy = async () => {
    try {
      const textToCopy = document.getElementById("copySpan").textContent;
      await navigator.clipboard.writeText(textToCopy);
      alert("Copied to clipboard: " + textToCopy);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleLocationClick = () => {

    const locationQuery = "Purba Bardhaman, West Bengal";
    // Create a Google Maps search URL
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationQuery)}`;
    // Open the Google Maps URL in a new tab
    window.open(googleMapsURL, '_blank');
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/webdev-atanushil/",
      imgSrc: linkedinBW,
      hoverImg: linkedin,
      alt: "LinkedIn",
      name: "linkedin",
    },
    {
      href: "https://github.com/atanushil",
      imgSrc: githubBW,
      hoverImg: github,
      alt: "GitHub",
      name: "github",
    },
    {
      href: "https://discord.com/login?redirect_to=%2Fchannels%2F%40me",
      imgSrc: discordBW,
      hoverImg: discord,
      alt: "Discord",
      name: "discord",
    },
    {
      href: "https://x.com/atanushil358",
      imgSrc: twitterBW,
      hoverImg: twitter,
      alt: "Twitter",
      name: "twitter",
    },
  ];

  return (
    <footer className="bg-slate-50 shadow-lg text-grey py-2 px-4 bottom-0 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Name and Description */}
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-2xl font-bold uppercase hidden lg:block">
            Atanu Shil
          </h2>
          <p className="text-md font-thin mt-2 hidden lg:block">
            A passionate developer specializing in React and Tailwind CSS,
            creating responsive websites with backend and database integration.
          </p>
        </div>

        {/* Address, Contact Number, and Email */}
        <div className="text-center lg:text-left flex-1">
          <p
            className="text-md items-center gap-2 hidden lg:flex cursor-pointer hover:text-gray-500"
            onClick={handleLocationClick}
          >
            <img src={location} alt="Location" className="w-8 h-8" />
            <span>Purba Bardhaman, West Bengal, India</span>
          </p>
          <p
            className="text-md items-center gap-2 hidden lg:flex cursor-pointer hover:text-gray-500"
            onClick={handleCopy}
          >
            <img src={phone} alt="Phone" className="w-8 h-8" />
            <span id="copySpan" className="copy-text">
              +91 9832118794
            </span>
          </p>
          <p className="text-md hover:text-gray-500">
            <a
              href="mailto:atanushil358@gmail.com"
              className="flex items-center gap-2"
            >
              <img src={mail} alt="Mail" className="w-8 h-8" />
              <span>atanushil358@gmail.com</span>
            </a>
          </p>
        </div>

        {/* Quick Access Links */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl font-semibold mt-2 hidden lg:block">
            Follow me on
          </h3>
          <div className="mt-4 flex space-x-4 justify-center lg:justify-start">
            {socialLinks.map(({ href, imgSrc, hoverImg, alt, name }) => (
              <a
                key={name}
                href={href}
                className="block relative"
                onMouseEnter={() => handleMouseEnter(name)}
                onMouseLeave={() => handleMouseLeave(name)}
              >
                <img src={imgSrc} alt={alt} className={`w-8 h-8 ${name}-img`} />
                <img
                  src={hoverImg}
                  alt={`${alt} hover`}
                  className={`w-8 h-8 absolute top-0 left-0 ${name}-hover opacity-0 transform -translate-y-5`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-red-400 text-sm mt-2">
        © 2024 Atanu Shil. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
