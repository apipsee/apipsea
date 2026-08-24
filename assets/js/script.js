/*
==================================================
SOCIAL BUTTON CLICK ANIMATION

This section controls the bounce animation
when a social media button is clicked.

To change the animation:
- Edit the CSS animation in style.css.
- Do not change the social media URLs here.
==================================================
*/

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const socialButtons = document.querySelectorAll(".social-button");

if (!prefersReduced) {
  socialButtons.forEach((button) => {
    // Use pointerdown so the animation begins before navigation occurs
    button.addEventListener("pointerdown", () => {
      button.classList.remove("bounce");
      // Trigger reflow to restart the animation
      void button.offsetWidth;
      button.classList.add("bounce");
    });

    button.addEventListener("animationend", () => {
      button.classList.remove("bounce");
    });
  });
}

console.log("Apip See website JavaScript connected successfully!");
