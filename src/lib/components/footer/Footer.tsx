import React from 'react';
import { Mail, Facebook, Instagram, Twitter, GitBranch } from 'lucide-react';

// --- Type Definitions for Props ---

/**
 * Props for the individual social media icon links.
 * icon is typed as React.ElementType to accept any component (like a Lucide icon).
 */
interface SocialIconLinkProps {
  href: string;
  icon: React.ElementType;
}

/**
 * Props for the navigation links in the footer columns.
 * children is used for the link text.
 */
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

// --- Helper Components ---

const SocialIconLink: React.FC<SocialIconLinkProps> = ({ href, icon: Icon }) => (
  <li>
    <a
      href={href}
      title=""
      className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-4 h-4" />
    </a>
  </li>
);

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a href={href} title={children as string} className="flex text-base text-gray-800 transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
      {children}
    </a>
  </li>
);

// --- Main Footer Component ---

const Footer: React.FC = () => {
  // Mock form submission handler
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscription attempted!");
    // In a real Footer, you would handle state and API calls here
  };

  return (
    <footer className="py-10 bg-gray-100  sm:pt-16 lg:pt-24  border-t border-gray-100">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Logo & Description Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <p className="font-extrabold text-3xl text-gray-900 tracking-tight">FooterLogo</p>

            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            {/* Social Icons - Using the SocialIconLink helper and Lucide icons */}
            <ul className="flex items-center space-x-3 mt-9">
              <SocialIconLink href="#" icon={Twitter} />
              <SocialIconLink href="#" icon={Facebook} />
              <SocialIconLink href="#" icon={Instagram} />
              <SocialIconLink href="#" icon={GitBranch} />
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

            <ul className="mt-6 space-y-4">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Works</FooterLink>
              <FooterLink href="#">Career</FooterLink>
            </ul>
          </div>

          {/* Help Links */}
          <div className="col-span-1">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

            <ul className="mt-6 space-y-4">
              <FooterLink href="#">Customer Support</FooterLink>
              <FooterLink href="#">Delivery Details</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>

          {/* Subscribe Form Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>

            <form onSubmit={handleSubscribe} className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 caret-blue-600 shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Subscribe
                <Mail className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider and Copyright */}
        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2024, All Rights Reserved by <span className="font-medium text-gray-800">Your Company Name</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;