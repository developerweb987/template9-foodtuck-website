import AboutUsSection from "./AboutFooter";
import HelpSection from "./HelpFooter";
import RecentPostsSection from "./RecentPostFooter";
import SocialIcons from "./SocialIconsFooter";
import UsefulLinksSection from "./UseFullLinkFooter";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      {/* Subscribe Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Subscribe Now Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Side: Heading and Paragraph */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold text-white mb-4">Still You Need Our Support?</h3>
            <p className="text-md text-gray-400">
              Don&apos;t wait, make a smart &amp; logical quote here. It&apos;s pretty easy.
            </p>
          </div>

          {/* Right Side: Subscription Input and Button */}
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-l-xl text-gray-700 border-2 border-[#FF9F0D] focus:outline-none"
            />
            <button className="px-6 py-3 bg-[#FF9F0D] text-white font-bold rounded-r-xl hover:bg-[#e68907] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        {/* Divider Line after Subscribe Section */}
        <div className="border-t border-[#FF9F0D] my-8"></div>

        {/* Footer Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-[56px]">
          <AboutUsSection />
          <UsefulLinksSection />
          <HelpSection />
          <RecentPostsSection />
        </div>
      </div>

      {/* Footer Bottom: Copyright and Social Icons */}
      <div className="bg-[#4F4F4F] py-6 md:py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm md:text-base text-center md:text-left">
            Copyright © 2025 by HK. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
