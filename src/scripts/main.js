import { Howl, Howler } from "howler";

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

const torch = new Howl({
  src: ["/audio/torch.mp3"],
  volume: 0.1,
});

const transition = new Howl({
  src: ["/audio/mus_cymbal.ogg"],
  volume: 1.0,
});

const mute = () => {
  magic.volume(0);
  magicstart.volume(0);
  flashlight.volume(0);
  torch.volume(0);
  transition.volume(0);
  muted = true;
  document.getElementById("sound-on").classList.remove("block");
  document.getElementById("sound-off").classList.remove("hidden");
  document.getElementById("sound-on").classList.add("hidden");
  document.getElementById("sound-off").classList.add("block");
};

const unmute = () => {
  magic.volume(0.03);
  magicstart.volume(0.03);
  flashlight.volume(0.2);
  torch.volume(0.1);
  transition.volume(1.0);
  muted = false;
  document.getElementById("sound-on").classList.remove("hidden");
  document.getElementById("sound-off").classList.remove("block");
  document.getElementById("sound-on").classList.add("block");
  document.getElementById("sound-off").classList.add("hidden");
};

let t = 0;
const intervalFn = () => {
  mask.style.setProperty("--radius", 120 + 30 * Math.sin(t * 0.006) + "px");
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
      if (count < 20) {
        playFlashlight();
      }
      document.getElementById("mask").classList.remove("mask2");
      light = false;
    }
  }

  if (count >= 100) {
    stopInterval();
    torch.play();
    magic.volume(0);
    magicstart.volume(0);
    document.body.style.backgroundImage = "url('/bar_temp1.webp')";
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

        document.getElementById("snoot").style.display = "none";
        boops += 1;
      });
    }
  }

  if (clickedBoop) {
    torch.volume(0);
    magic.pause();
    magic.currentTime = 0;
    document.getElementById("boopcount").classList.add("fade-immediate");
    document.body.style.backgroundImage = "url('/bar_temp2.webp')";
    mask.classList.remove("mask");
    document.getElementById("dialogue").style.opacity = "80%";
    document.body.style.cursor = "default";
    // document.getElementById("count").classList.remove("fade-immediate");
  }

  const messages = [
    {
      range: [5, 10],
      image: "/bar_temp1.webp",
      text: "Wow, you're an impatient fellow, aren't ya? Sorry, pardner — I appreciate the enthusiasm, but the shop's closed!",
    },
    {
      range: [10, 20],
      image: "/bar_temp2.webp",
      text: "Now hold on there, buckaroo! We ain't open yet. Try back in a bit, would ya?",
    },
    {
      range: [20, 50],
      image: "/bar_temp1.webp",
      text: "Persistent, ain't ya? Much obliged, but the shop's still closed. Patience is a virtue, friend.",
    },
    {
      range: [50, 100],
      image: "/bar_temp2.webp",
      text: "You're really keen, huh? But I'm afraid the doors are still shut tight. Come back later!",
    },
    {
      range: [100, 200],
      image: "/bar_temp1.webp",
      text: "Well, ain't you a determined one! Though I reckon we're still closed — maybe take a walk and check back soon.",
    },
    {
      range: [200, 300],
      image: "/bar_temp2.webp",
      text: "Landsakes! You're as stubborn as a mule. Still closed, pardner. Come back when the rooster crows!",
    },
    {
      range: [300, 400],
      image: "/bar_temp1.webp",
      text: "Gotta hand it to ya, your determination sure is admirable! But no can do, we're still closed. Maybe take a coffee break?",
    },
    {
      range: [400, 500],
      image: "/bar_temp2.webp",
      text: "Goodness gracious! I appreciate your tenacity, but we're closed tighter than a drum. Patience!",
    },
    {
      range: [500, 1000],
      image: "/bar_temp1.webp",
      text: "You've got the spirit! But no luck this time either. The shop's closed. Try once more a bit later!",
    },
    {
      range: [1000, 9999],
      image: "/bar_temp2.webp",
      // text: "Alright, alright, you've worn me down! I admire your persistence. Tell you what, if you can find the last secret, I'll have a little something extra for ya as a reward for your patience and determination. Just message one of the mods on the <a class='hover:underline underline-offset-4 text-[#7289da]' href='https://discord.com/invite/UWSFnwz' target='blank'>HarmonyCon Discord</a> once you've found it to claim your prize. See you soon, pardner!",
      text: "Alright, alright, you've worn me down! I admire your persistence. Tell you what, if you can find the last secret, I'll have a little something extra for ya as a reward for your patience and determination. See you soon, pardner!",
    },
    // {
    //   range: [10000, 999999999],
    //   image: "/bar_temp1.webp",
    //   text: "You're still here? It's over! Go home. Go!",
    // },
  ];

  const updateMessage = (boops) => {
    for (const message of messages) {
      if (boops >= message.range[0] && boops < message.range[1]) {
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

  if (boops >= 1000) {
    endingUnlocked = true;
  }
});

const konamiPattern = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let currentKonami = 0;

const konamiHandler = async (e) => {
  if (
    konamiPattern.indexOf(e.key) < 0 ||
    e.key !== konamiPattern[currentKonami]
  ) {
    currentKonami = 0;
    return;
  }
  currentKonami += 1;
  if (konamiPattern.length === currentKonami) {
    currentKonami = 0;
    // do something with Konami code here.

    if (endingUnlocked) {
      transition.play();

      document.body.classList.add("fade-to-white");
      endingUnlocked = false;
      setTimeout(() => {
        window.location.replace(
          atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9pbnZpdGUvWmRhbVN4bVo="),
        );
      }, 5000);
    }
  }
};
document.addEventListener("keydown", konamiHandler);
