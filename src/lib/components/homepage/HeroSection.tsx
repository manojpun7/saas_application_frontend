"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] text-[#1e293b] mb-10 ">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 via-[#f8fafc] to-[#10b981]/5 -z-10"></div>

      {/* Floating circles */}
      <div
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#4f46e5]/10 -z-10"
        style={floatAnim}
      ></div>

      <div
        className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-[#10b981]/10 -z-10"
        style={floatReverseAnim}
      ></div>

      <div
        className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-[#4f46e5]/15 -z-10"
        style={floatAnim}
      ></div>

      <div
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-[#10b981]/15 -z-10"
        style={floatReverseAnim}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="text-center md:text-left">
            <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-[#4f46e5] uppercase rounded-full bg-[#4f46e5]/10 mb-4">
              Digital Excellence
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className={gradientText}>Transform</span> Your Brands{" "}
              <span className={gradientText}>Digital Presence</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We craft data-driven digital marketing strategies that drive
              growth, engagement, and measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="px-8 py-3.5 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#4f46e5] to-[#10b981]"
              >
                Get Started
              </a>

              <a
                href="#"
                className="px-8 py-3.5 rounded-lg border-2 border-[#4f46e5] text-[#4f46e5] font-semibold hover:bg-[#4f46e5]/5 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Client & rating */}
            <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
              {/* <div className="flex -space-x-2">
                {[
                  "https://randomuser.me/api/portraits/women/12.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/45.jpg",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="Client"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div> */}

              <div>
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>
                <p className="text-sm text-gray-600">Trusted by 500+ businesses worldwide</p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute -top-10 -left-10 w-32 h-32 rounded-2xl bg-[#4f46e5]/10 -z-10"
                style={floatAnim}
              ></div>

              <div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-2xl bg-[#10b981]/10 -z-10"
                style={floatReverseAnim}
              ></div>

              <Image
                src="/assets/heroimage.avif"
                alt="Digital Marketing"
                width={500}
                height={300}
                className="rounded-xl shadow-2xl border-8 border-white"
              />
            </div>

            <div className="absolute -bottom-8 left-1/4 bg-white px-4 py-2 rounded-lg shadow-md flex items-center">
              <div
                className="w-3 h-3 bg-green-500 rounded-full mr-2"
                style={pulseAnim}
              ></div>
              <span className="text-sm font-medium">+85% ROI</span>
            </div>

            <div className="absolute -top-8 right-1/4 bg-white px-4 py-2 rounded-lg shadow-md">
              <span className="text-sm font-medium">📈 3x Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Inline styles ---------------- */

const floatAnim = {
  animation: "floatAnim 6s ease-in-out infinite",
  transformOrigin: "center",
};

const floatReverseAnim = {
  animation: "floatReverseAnim 5s ease-in-out infinite",
  transformOrigin: "center",
};

const pulseAnim = {
  animation: "pulseAnim 1.5s infinite",
};

const gradientText =
  "bg-gradient-to-r from-[#4f46e5] to-[#10b981] bg-clip-text text-transparent";

/* Inject keyframes into the DOM */
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes floatAnim {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    @keyframes floatReverseAnim {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(20px); }
    }
    @keyframes pulseAnim {
      0%, 100% { opacity: 1; }
      50% { opacity: .4; }
    }
  `;
  document.head.appendChild(style);
}
