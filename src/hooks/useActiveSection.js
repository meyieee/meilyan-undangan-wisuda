import { useEffect, useState } from "react";

const SECTIONS = ["home", "details", "gallery"];

export default function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const visible = new Map(SECTIONS.map((id) => [id, 0]));

    const pickActive = () => {
      let bestId = "home";
      let bestScore = -1;

      for (const section of sections) {
        const ratio = visible.get(section.id) ?? 0;
        const score = ratio > 0 ? ratio + section.offsetTop * 0.000001 : 0;
        if (score > bestScore) {
          bestScore = score;
          bestId = section.id;
        }
      }

      setActive(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        pickActive();
      },
      {
        rootMargin: "-12% 0px -28% 0px",
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const onHashChange = () => {
      const id = window.location.hash.replace("#", "");
      if (SECTIONS.includes(id)) setActive(id);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return active;
}
