
import { Twitter, Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-b from-black/80 via-black/90 to-black text-gray-400 overflow-hidden">
      {/* 🔥 Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold tracking-widest text-white/5 select-none">
          PIKXL
        </h1>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-bold">AI Market</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Discover, buy, and sell AI-generated art, assets, and creative
              works from top creators worldwide.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/marketplace" className="hover:text-white transition">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="/creators" className="hover:text-white transition">
                  Creators
                </a>
              </li>
              <li>
                <a href="/featured" className="hover:text-white transition">
                  Featured
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-5 mb-4">
              <a href="#" className="hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm">
              Stay updated with the latest AI creations and drops.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AI Market. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ by Anshuman Singh</p>
        </div>
      </div>
    </footer>
  );
}
