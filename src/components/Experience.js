import React, { useEffect } from "react";

const experienceData = [
  {
    title: "Founder & Web Developer",
    company: "Dashly Studio",
    location: "Remote",
    date: "AUG 2025 – PRESENT",
  },
  {
    title: "Public Relations Manager",
    company: "ProNGO!",
    location: "Remote",
    date: "JUN 2025 – DEC 2025",
  },
  {
    title: "Student Ambassador (Registration Support)",
    company: "University of Aberdeen",
    location: "Aberdeen, Scotland, UK",
    date: "JAN 2025 – PRESENT",
  },
  {
    title: "Office Administrator & Social Media Assistant",
    company: "JOR Property ltd",
    location: "Aberdeen, Scotland, UK",
    date: "MAR 2024 – SEP 2024",
  },
  {
    title: "Web Developer",
    company: "Freelance",
    location: "Remote",
    date: "JAN 2023 – PRESENT",
  },
  {
    title: "Personal Assistant",
    company: "Barwell Enterprises",
    location: "Aberdeen, Scotland, UK",
    date: "OCT 2022 – MAR 2023",
  },
  {
    title: "Administrative Assistant",
    company: "Egalite International",
    location: "Remote",
    date: "AUG 2022 – DEC 2022",
  },
];

export default function Experience() {
  useEffect(() => {
    const section = document.getElementById("experience");
    if (!section) return;

    const timeline = section.querySelector(".timeline");
    if (!timeline) return;

    const items = Array.from(timeline.querySelectorAll(".timeline-item"));
    const dots = Array.from(timeline.querySelectorAll(".timeline-dot"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      timeline.style.setProperty("--timeline-progress", "1");
      dots.forEach((dot) => {
        dot.classList.add("is-visible");
        dot.classList.add("is-active");
      });
      return;
    }

    timeline.classList.add("timeline-animate");

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
    const lerp = (start, end, factor) => start + (end - start) * factor;
    let animationFrameId = null;
    let currentProgress = 0;
    let targetProgress = 0;

    const getTargetProgress = () => {
      const rect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const travelDistance = rect.height + viewportHeight * 0.6;
      const passedDistance = viewportHeight * 0.8 - rect.top;
      return clamp(passedDistance / travelDistance, 0, 1);
    };

    const renderTimeline = (progress) => {
      const rect = timeline.getBoundingClientRect();
      const filledHeight = rect.height * progress;

      timeline.style.setProperty("--timeline-progress", progress.toFixed(3));

      dots.forEach((dot) => {
        const dotRect = dot.getBoundingClientRect();
        const dotCenterInTimeline = dotRect.top - rect.top + dotRect.height / 2;
        const isVisible = dot.classList.contains("is-visible");
        dot.classList.toggle("is-active", isVisible && dotCenterInTimeline <= filledHeight + 4);
      });
    };

    const animateProgress = () => {
      currentProgress = lerp(currentProgress, targetProgress, 0.14);

      if (Math.abs(targetProgress - currentProgress) < 0.0015) {
        currentProgress = targetProgress;
      }

      renderTimeline(currentProgress);

      if (currentProgress !== targetProgress) {
        animationFrameId = window.requestAnimationFrame(animateProgress);
      } else {
        animationFrameId = null;
      }
    };

    const requestUpdate = () => {
      targetProgress = getTargetProgress();
      if (animationFrameId !== null) return;
      animationFrameId = window.requestAnimationFrame(animateProgress);
    };

    const dotObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const dot = entry.target.querySelector(".timeline-dot");
          if (!dot) return;

          dot.classList.toggle("is-visible", entry.isIntersecting);
          if (!entry.isIntersecting) {
            dot.classList.remove("is-active");
          }
        });
        requestUpdate();
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    items.forEach((item) => dotObserver.observe(item));

    currentProgress = getTargetProgress();
    targetProgress = currentProgress;
    renderTimeline(currentProgress);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      dotObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section id="experience" className="about-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-location">{exp.location}</p>
              <p className="job-type">{exp.jobType}</p>
            </div>
            <div className="timeline-date">{exp.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
