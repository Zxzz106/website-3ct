"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import General from "@/components/modules/home/general";
import News from "@/components/modules/home/news";
import About from "@/components/modules/home/about";
import Research from "@/components/modules/home/research";
import Members from "@/components/modules/home/members";
import Contact from "@/components/modules/home/contact";
import Links from "@/components/modules/home/links";

const SECTION_IDS = ["general", "news", "about", "research", "members", "contact", "links"];
const HEADER_HEIGHT = 72;

export default function HomeClient() {
  const scrollLockRef = useRef(false);

  // useEffect(() => {
  //   const handleWheel = (event: WheelEvent) => {
  //     // Ignore if scroll is already in progress
  //     if (scrollLockRef.current) {
  //       event.preventDefault();
  //       return;
  //     }

  //     // Only handle downward scrolling
  //     if (event.deltaY <= 0) return;

  //     const currentScroll = window.scrollY;
  //     const sections = SECTION_IDS
  //       .map((id) => ({
  //         id,
  //         element: document.getElementById(id),
  //         top: document.getElementById(id)?.offsetTop || 0,
  //       }))
  //       .filter((section) => section.element);

  //     if (sections.length === 0) return;

  //     // Find the current section
  //     let currentSectionIndex = -1;
  //     let nextSectionIndex = -1;

  //     for (let i = 0; i < sections.length; i++) {
  //       // Add buffer to account for header
  //       if (currentScroll + HEADER_HEIGHT >= sections[i].top - 10) {
  //         currentSectionIndex = i;
  //       } else {
  //         break;
  //       }
  //     }

  //     // Get the next section
  //     if (currentSectionIndex >= 0 && currentSectionIndex < sections.length - 1) {
  //       nextSectionIndex = currentSectionIndex + 1;
  //     } else if (currentSectionIndex === -1) {
  //       // User is above all sections, go to first
  //       nextSectionIndex = 0;
  //     } else {
  //       // Already at last section, do nothing
  //       return;
  //     }

  //     // Check if already at the next section
  //     const nextSection = sections[nextSectionIndex];
  //     const nextSectionTop = nextSection.top - HEADER_HEIGHT;

  //     // If already close to next section, don't snap
  //     if (Math.abs(currentScroll - nextSectionTop) < 50) {
  //       return;
  //     }

  //     // Prevent default scrolling and snap to next section
  //     event.preventDefault();
  //     scrollLockRef.current = true;

  //     nextSection.element?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });

  //     // Release lock after animation completes
  //     setTimeout(() => {
  //       scrollLockRef.current = false;
  //     }, 600);
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  return (
      <main className="w-full px-4 lg:px-6 space-y-6 h-full flex flex-col">
        <div>
          <General />
          <News />
          <About />
          <Research />
          <Members />
          <Contact />
          <Links />
        </div>
      </main>
  );
}
