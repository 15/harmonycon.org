import { Howl, Howler } from "howler";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away-extreme.css";

const mask = document.getElementById("mask");
const start = new Date().getTime();

const updateMousePos = (clientX, clientY) => {
  let x = parseInt((clientX / window.innerWidth) * 100);
  let y = parseInt((clientY / window.innerHeight) * 100);
  mask.style.setProperty("--mouse-x", x + "%");
  mask.style.setProperty("--mouse-y", y + "%");
};

document.addEventListener("mousemove", (event) => {
  updateMousePos(event.clientX, event.clientY);
});

document.addEventListener("touchmove", (event) => {
  if (event.touches.length > 0) {
    updateMousePos(event.touches[0].clientX, event.touches[0].clientY);
  }
});

let light = false;
let light2 = false;
let count = 0;
let addedBoop = false;
let clickedBoop = false;
let boops = 0;
let muted = false;
let endingUnlocked = false;

const flashlight = new Howl({
  src: ["/audio/flashlight.mp3"],
  volume: 0.2,
});

const playFlashlight = () => {
  setTimeout(() => {
    flashlight.play();
  }, 100);
};

const magic = new Howl({
  src: ["/audio/magicnormalized.mp3"],
  volume: 0.03,
  loop: true,
});
const magicstart = new Howl({
  src: ["/audio/magicstart.mp3"],
  volume: 0.03,
});

const boop = new Howl({
  src: ["/audio/boop.wav"],
  volume: 0.02,
});

const torch = new Howl({
  src: ["/audio/switchtrimmed.mp3"],
  volume: 0.1,
});

const lights = new Howl({
  src: ["/audio/switchtrimmed.mp3"],
  volume: 0.1,
});

const transition = new Howl({
  src: ["/audio/mus_cymbal.ogg"],
  volume: 0.2,
});

const text = new Howl({
  src: ["/audio/snd_select.wav"],
  volume: 0.1,
});

const click = new Howl({
  src: ["/audio/click.mp3"],
  volume: 0.1,
});

const click2 = new Howl({
  src: ["/audio/click2.mp3"],
  volume: 0.1,
});

const nice = new Howl({
  src: ["/audio/nice.mp3"],
  volume: 0.3,
});

const smoke = new Howl({
  src: ["/audio/420.mp3"],
  volume: 0.1,
});

const mute = () => {
  flashlight.volume(0);
  magic.volume(0);
  magicstart.volume(0);
  boop.volume(0);
  torch.volume(0);
  lights.volume(0);
  transition.volume(0);
  text.volume(0);
  click.volume(0);
  click2.volume(0);
  nice.volume(0);
  smoke.volume(0);

  muted = true;
  document.getElementById("sound-on").classList.remove("block");
  document.getElementById("sound-off").classList.remove("hidden");
  document.getElementById("sound-on").classList.add("hidden");
  document.getElementById("sound-off").classList.add("block");
};

const unmute = () => {
  click2.volume(0.1);
  click2.play();
  flashlight.volume(0.2);
  magic.volume(0.03);
  magicstart.volume(0.03);
  boop.volume(0.02);
  torch.volume(0.1);
  lights.volume(0.1);
  transition.volume(0.2);
  text.volume(0.1);
  click.volume(0.1);
  nice.volume(0.3);
  smoke.volume(0.1);
  muted = false;
  document.getElementById("sound-on").classList.remove("hidden");
  document.getElementById("sound-off").classList.remove("block");
  document.getElementById("sound-on").classList.add("block");
  document.getElementById("sound-off").classList.add("hidden");
};

let t = 0;
const intervalFn = () => {
  mask.style.setProperty("--radius", 120 + 30 * Math.sin(t * 0.008) + "px");
  t += 1;
};

const startInterval = () => {
  if (interval === null) {
    interval = setInterval(intervalFn, 10);
  }
};

const stopInterval = () => {
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
  }
};

tippy(document.getElementById("sound"), {
  content: `For best user experience, please keep the audio on!`,
  placement: window.innerWidth > 768 ? "left" : "bottom",
  allowHTML: true,
  animation: "shift-away-extreme",
});

let interval = setInterval(intervalFn, 10);

document.getElementById("sound").addEventListener("click", () => {
  muted ? unmute() : mute();
});

document.addEventListener("click", () => {
  const footer = document.getElementById("footer");

  if (!footer.classList.contains("fade")) {
    footer.classList.add("fade");
  } else {
    footer.style.opacity = 0;
  }

  const sound = document.getElementById("sound");
  if (!sound.classList.contains("fade")) {
    sound.classList.add("fade");
  } else {
    sound.style.opacity = 0;
  }

  if (count >= 10) {
    // window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    document.getElementById("count").classList.add("fade-immediate");
  }

  if (!clickedBoop) {
    if (!light) {
      startInterval();
      magicstart.play();
      magic.play();
      document.getElementById("mask").classList.add("mask2");
      light = true;
    } else {
      stopInterval();
      magicstart.stop();
      magic.stop();
      if (count < 100) {
        playFlashlight();
      }
      document.getElementById("mask").classList.remove("mask2");
      light = false;
    }
  }

  if (count >= 100) {
    stopInterval();
    if (!light2) {
      torch.play();
      light2 = true;
    } else {
      light2 = false;
    }
    magic.volume(0);
    magicstart.volume(0);
    document.body.style.backgroundImage = "url('/bar_final_.webp')";
    document.body.classList.remove("bg-center");
    document.body.classList.add("bg-[20%_center]");
    mask.style.setProperty(
      "--radius",
      window.innerWidth > 768 ? "100vh" : "25vh",
    );
    document.getElementById("snoot").style.display = "block";

    if (!addedBoop) {
      addedBoop = true;
      document.getElementById("snoot").addEventListener("click", () => {
        clickedBoop = true;
        boop.play();

        document.getElementById("snoot").style.display = "none";
        if (boops === 0) {
          lights.play();
          text.play();
        }
        boops += 1;
      });
    }
  }

  if (clickedBoop) {
    torch.volume(0);
    magic.stop();
    document.getElementById("boopcount").classList.add("fade-immediate");
    document.body.style.backgroundImage = "url('/bar_final_2.webp')";
    mask.classList.remove("mask");
    document.getElementById("dialogue").style.opacity = "80%";
    document.body.style.cursor = "default";
    // document.getElementById("count").classList.remove("fade-immediate");
  }

  const messages = [
    {
      range: [10, 20],
      image: "/bar_final_.webp",
      text: "Wow, you're an impatient fellow, aren't ya? Sorry, pardner — I appreciate the enthusiasm, but the shop's closed!",
    },
    {
      range: [20, 50],
      image: "/bar_final_2.webp",
      text: "Now hold on there, buckaroo! We ain't open yet. Try back in a bit, would ya?",
    },
    {
      range: [50, 100],
      image: "/bar_final_.webp",
      text: "Persistent, ain't ya? Much obliged, but the shop's still closed. Patience is a virtue, friend.",
    },
    {
      range: [100, 200],
      image: "/bar_final_2.webp",
      text: "You're really keen, huh? But I'm afraid the doors are still shut tight. Come back later!",
    },
    {
      range: [200, 300],
      image: "/bar_final_.webp",
      text: "Well, ain't you a determined one! Though I reckon we're still closed — maybe take a walk and check back soon.",
    },
    {
      range: [300, 400],
      image: "/bar_final_2.webp",
      text: "Landsakes! You're as stubborn as a mule. Still closed, pardner. Come back when the rooster crows!",
    },
    {
      range: [400, 500],
      image: "/bar_final_.webp",
      text: "Gotta hand it to ya, your determination sure is admirable! But no can do, we're still closed. Maybe take a coffee break?",
    },
    {
      range: [500, 1000],
      image: "/bar_final_2.webp",
      text: "Goodness gracious! I appreciate your tenacity, but we're closed tighter than a drum. Patience!",
    },
    {
      range: [1000, 5000],
      image: "/bar_final_.webp",
      text: "You've got the spirit! But no luck this time either. The shop's closed. Try once more much later!",
    },
    {
      range: [5000, 9999999],
      image: "/bar_final_2.webp",
      // text: "Alright, alright, you've worn me down! I admire your persistence. Tell you what, if you can find the last secret, I'll have a little something extra for ya as a reward for your patience and determination. Just message one of the mods on the <a class='hover:underline underline-offset-4 text-[#7289da]' href='https://discord.com/invite/UWSFnwz' target='blank'>HarmonyCon Discord</a> once you've found it to claim your prize. See you soon, pardner!",
      text: "Alright, alright, you've worn me down! I admire your persistence. Tell you what, if you can find the last secret, I'll have a little something extra for ya as a reward for your patience and determination. See you soon, pardner!",
    },
    // {
    //   range: [10000, 999999999],
    //   image: "/bar_final_.webp",
    //   text: "You're still here? It's over! Go home. Go!",
    // },
  ];

  const updateMessage = (boops) => {
    for (const message of messages) {
      if (boops >= message.range[0] && boops < message.range[1]) {
        if (document.getElementById("text").innerHTML !== message.text) {
          text.play();
        }
        document.body.style.backgroundImage = `url('${message.image}')`;
        document.getElementById("text").innerHTML = message.text;
        break;
      }
    }
  };
  updateMessage(boops);

  count += 1;
  document.getElementById("count").innerHTML = count;
  document.getElementById("boopcount").innerHTML = boops;

  if (boops >= 5000) {
    endingUnlocked = true;
  }
});

const konamiPattern = [
  "ARROWUP",
  "ARROWUP",
  "ARROWDOWN",
  "ARROWDOWN",
  "ARROWLEFT",
  "ARROWRIGHT",
  "ARROWLEFT",
  "ARROWRIGHT",
  "B",
  "A",
];

const nicePattern = ["6", "9"];
const blazePattern = ["4", "2", "0"];

let currentKonami = 0;
let currentNice = 0;
let currentBlaze = 0;

const konamiHandler = async (e) => {
  if (endingUnlocked) {
    click.play();
  }
  if (
    konamiPattern.indexOf(e.key.toUpperCase()) < 0 ||
    e.key.toUpperCase() !== konamiPattern[currentKonami].toUpperCase()
  ) {
    currentKonami = 0;
    return;
  }
  currentKonami += 1;
  if (konamiPattern.length === currentKonami) {
    currentKonami = 0;
    if (endingUnlocked) {
      transition.play();

      document.body.classList.add("fade-to-white");
      endingUnlocked = false;
      setTimeout(() => {
        window.location.replace(atob("aHR0cHM6Ly9kaXNjb3JkLmdnL3VzVmhGcFNa"));
      }, 5000);
    }
  }
};

const niceHandler = async (e) => {
  if (
    nicePattern.indexOf(e.key.toUpperCase()) < 0 ||
    e.key.toUpperCase() !== nicePattern[currentNice].toUpperCase()
  ) {
    currentNice = 0;
    return;
  }
  currentNice += 1;
  if (nicePattern.length === currentNice) {
    currentNice = 0;
    if (clickedBoop) {
      nice.play();
      document.getElementById("text").innerHTML = "<span>Nice.</span>";
    }
  }
};

const blazeHandler = async (e) => {
  if (
    blazePattern.indexOf(e.key.toUpperCase()) < 0 ||
    e.key.toUpperCase() !== blazePattern[currentBlaze].toUpperCase()
  ) {
    currentBlaze = 0;
    return;
  }
  currentBlaze += 1;
  if (blazePattern.length === currentBlaze) {
    currentBlaze = 0;

    if (clickedBoop) {
      document.body.style.backgroundImage = "url('/bar_420.webp')";
      smoke.play();
      document.getElementById("text").innerHTML =
        "<span>Sure is <span class='font-semibold'>blazing</span> hot down South this time of year!</span>";
    }
  }
};

document.addEventListener("keydown", (e) => {
  konamiHandler(e);
  niceHandler(e);
  blazeHandler(e);
});
