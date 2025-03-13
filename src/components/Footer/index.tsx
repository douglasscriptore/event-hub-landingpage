import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="text-orange-500">DEV</span>CON 2024
            </h3>
            <p className="text-gray-400 mb-4">
              The premier tech convention for developers, designers, and tech enthusiasts.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Icon icon="lucide:twitter" className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Icon icon="lucide:facebook" className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Icon icon="lucide:instagram" className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Icon icon="lucide:linkedin" className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-orange-500">Home</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-orange-500">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-orange-500">Speakers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-orange-500">Schedule</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-orange-500">Sponsors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Icon icon="lucide:map-pin" className="w-4 h-4 text-orange-500" />
                <span>Tech Convention Center, San Francisco</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Icon icon="lucide:mail" className="w-4 h-4 text-orange-500" />
                <span>info@devcon2024.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Icon icon="lucide:phone" className="w-4 h-4 text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with the latest news and announcements.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md">
                <Icon icon="lucide:send" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2024 DEVCON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}