# 🚗 Scroll Car Hero Animation (Next.js + GSAP)

A scroll-driven hero section built with **Next.js (App Router)**, **Tailwind CSS**, **GSAP**, and **ScrollTrigger**.

As you scroll, a car moves left → right, a green trail expands behind it, headline letters reveal one-by-one, and statistic cards appear at specific scroll ranges.

## 🔥 Features

- Scroll-controlled car movement (GSAP + ScrollTrigger scrub)
- Pinned / sticky hero section during scroll
- Dynamic green “trail” synced to the car position
- Letter-by-letter headline reveal as the car passes
- Multiple statistic boxes revealed in sequence
- Smooth scroll-scrubbed animation (not time-based)
- Responsive layout using Tailwind CSS

## 🧠 How It Works (Simple)

- **ScrollTrigger** pins the hero section so it stays on screen while you scroll. [GSAP ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)  
- A **GSAP timeline** is scrubbed by scroll progress, so animation frames are controlled by the scrollbar.  
- On every scroll update:
  - Car `x` position changes
  - Trail width grows behind the car
  - Each letter checks if the car has passed it and toggles `opacity`
- Statistic cards fade/scale in at different scroll ranges.

## 🛠 Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger

## 📁 Project Structure
app/
page.tsx
globals.css
public/
car.png

Install dependencies:
npm install
Run the dev server:
npm run dev
Open:
http://localhost:3000

🧪 Learning Goals
This project helped practice:

Scroll-based UI interaction design

GSAP timelines and scroll-scrubbing

ScrollTrigger pinning and triggers

DOM-based reveal logic (position → visibility)

React + GSAP integration in a Next.js App Router project

