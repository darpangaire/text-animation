function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;
  let splittedText = h1Text.split("");

  let clutter = "";

  halfLen = Math.floor(splittedText.length) / 2;
  splittedText.forEach((elem, idx) => {
    if (elem === " ") {
      clutter += `<span class="space">&nbsp;</span>`;
    } else if (halfLen > idx) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 60,
  opacity: 0,
  scale: 0.8,
  rotation: 75,
  stagger: 0.3,
  duration: 0.6,
  ease: "power2.out",
});

gsap.from("h1 .b", {
  y: 60,
  opacity: 0,
  scale: 0.8,
  rotation: -75,
  duration: 1,
  ease: "power2.out",
  delay: 0.5,
  stagger: -0.2,
  duration: 0.6,
});

gsap.to("h1 span", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 1.5,
  ease: "sine.inOut",
});
