const _0x405d10 = _0x3a1a;
(function (_0x1369e1, _0x571c7a) {
  const _0x1a418e = _0x3a1a,
    _0x45836f = _0x1369e1();
  while (!![]) {
    try {
      const _0x1bf635 =
        -parseInt(_0x1a418e(0x218)) / 0x1 +
        (parseInt(_0x1a418e(0x208)) / 0x2) *
          (-parseInt(_0x1a418e(0x207)) / 0x3) +
        -parseInt(_0x1a418e(0x206)) / 0x4 +
        (-parseInt(_0x1a418e(0x228)) / 0x5) *
          (parseInt(_0x1a418e(0x1fe)) / 0x6) +
        -parseInt(_0x1a418e(0x227)) / 0x7 +
        -parseInt(_0x1a418e(0x23f)) / 0x8 +
        parseInt(_0x1a418e(0x225)) / 0x9;
      if (_0x1bf635 === _0x571c7a) break;
      else _0x45836f["push"](_0x45836f["shift"]());
    } catch (_0x1e6420) {
      _0x45836f["push"](_0x45836f["shift"]());
    }
  }
})(_0x3fe9, 0x4ee67);
import { Howl, Howler } from "howler";
import _0x4196b9 from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away-extreme.css";
const mask = document[_0x405d10(0x24b)](_0x405d10(0x240)),
  start = new Date()["getTime"](),
  updateMousePos = (_0x5ce3b4, _0x45109a) => {
    const _0x57fcfc = _0x405d10;
    let _0x572b1f = parseInt((_0x5ce3b4 / window["innerWidth"]) * 0x64),
      _0x53985a = parseInt((_0x45109a / window[_0x57fcfc(0x23c)]) * 0x64);
    mask[_0x57fcfc(0x1ed)]["setProperty"]("--mouse-x", _0x572b1f + "%"),
      mask["style"][_0x57fcfc(0x1f6)](_0x57fcfc(0x219), _0x53985a + "%");
  };
document[_0x405d10(0x216)](_0x405d10(0x22b), (_0x21685c) => {
  const _0x40390d = _0x405d10;
  updateMousePos(_0x21685c["clientX"], _0x21685c[_0x40390d(0x203)]);
}),
  document[_0x405d10(0x216)]("touchmove", (_0x23749d) => {
    const _0x4cc7e1 = _0x405d10;
    _0x23749d[_0x4cc7e1(0x211)][_0x4cc7e1(0x226)] > 0x0 &&
      updateMousePos(
        _0x23749d[_0x4cc7e1(0x211)][0x0][_0x4cc7e1(0x23b)],
        _0x23749d[_0x4cc7e1(0x211)][0x0][_0x4cc7e1(0x203)],
      );
  });
let light = ![],
  light2 = ![],
  count = 0x0,
  addedBoop = ![],
  clickedBoop = ![],
  boops = 0x0,
  muted = ![],
  endingUnlocked = ![];
const flashlight = new Howl({ src: [_0x405d10(0x238)], volume: 0.2 }),
  playFlashlight = () => {
    setTimeout(() => {
      const _0x51c9a4 = _0x3a1a;
      flashlight[_0x51c9a4(0x1ff)]();
    }, 0x64);
  },
  magic = new Howl({ src: [_0x405d10(0x1f3)], volume: 0.03, loop: !![] }),
  magicstart = new Howl({ src: [_0x405d10(0x201)], volume: 0.03 }),
  boop = new Howl({ src: [_0x405d10(0x21d)], volume: 0.02 }),
  torch = new Howl({ src: ["/audio/switchtrimmed.mp3"], volume: 0.1 }),
  lights = new Howl({ src: [_0x405d10(0x1eb)], volume: 0.1 }),
  transition = new Howl({ src: [_0x405d10(0x224)], volume: 0.2 }),
  text = new Howl({ src: [_0x405d10(0x246)], volume: 0.1 }),
  click = new Howl({ src: [_0x405d10(0x229)], volume: 0.1 }),
  click2 = new Howl({ src: [_0x405d10(0x21c)], volume: 0.1 }),
  nice = new Howl({ src: ["/audio/nice.mp3"], volume: 0.3 }),
  smoke = new Howl({ src: ["/audio/420.mp3"], volume: 0.1 }),
  mute = () => {
    const _0x598ae8 = _0x405d10;
    flashlight[_0x598ae8(0x222)](0x0),
      magic[_0x598ae8(0x222)](0x0),
      magicstart[_0x598ae8(0x222)](0x0),
      boop[_0x598ae8(0x222)](0x0),
      torch["volume"](0x0),
      lights[_0x598ae8(0x222)](0x0),
      transition[_0x598ae8(0x222)](0x0),
      text[_0x598ae8(0x222)](0x0),
      click[_0x598ae8(0x222)](0x0),
      click2[_0x598ae8(0x222)](0x0),
      nice[_0x598ae8(0x222)](0x0),
      smoke[_0x598ae8(0x222)](0x0),
      (muted = !![]),
      document[_0x598ae8(0x24b)]("sound-on")[_0x598ae8(0x1fb)][
        _0x598ae8(0x236)
      ](_0x598ae8(0x20a)),
      document[_0x598ae8(0x24b)](_0x598ae8(0x242))[_0x598ae8(0x1fb)][
        _0x598ae8(0x236)
      ](_0x598ae8(0x237)),
      document["getElementById"](_0x598ae8(0x20f))[_0x598ae8(0x1fb)][
        _0x598ae8(0x1fc)
      ](_0x598ae8(0x237)),
      document[_0x598ae8(0x24b)](_0x598ae8(0x242))[_0x598ae8(0x1fb)][
        _0x598ae8(0x1fc)
      ](_0x598ae8(0x20a));
  },
  unmute = () => {
    const _0x4d9753 = _0x405d10;
    click2[_0x4d9753(0x222)](0.1),
      click2["play"](),
      flashlight["volume"](0.2),
      magic[_0x4d9753(0x222)](0.03),
      magicstart[_0x4d9753(0x222)](0.03),
      boop[_0x4d9753(0x222)](0.02),
      torch[_0x4d9753(0x222)](0.1),
      lights[_0x4d9753(0x222)](0.1),
      transition["volume"](0.2),
      text["volume"](0.1),
      click[_0x4d9753(0x222)](0.1),
      nice["volume"](0.3),
      smoke[_0x4d9753(0x222)](0.1),
      (muted = ![]),
      document[_0x4d9753(0x24b)]("sound-on")[_0x4d9753(0x1fb)][
        _0x4d9753(0x236)
      ](_0x4d9753(0x237)),
      document[_0x4d9753(0x24b)](_0x4d9753(0x242))["classList"][
        _0x4d9753(0x236)
      ](_0x4d9753(0x20a)),
      document[_0x4d9753(0x24b)](_0x4d9753(0x20f))["classList"][
        _0x4d9753(0x1fc)
      ](_0x4d9753(0x20a)),
      document[_0x4d9753(0x24b)](_0x4d9753(0x242))["classList"]["add"](
        _0x4d9753(0x237),
      );
  };
let t = 0x0;
const intervalFn = () => {
    const _0x32b3f8 = _0x405d10;
    mask[_0x32b3f8(0x1ed)][_0x32b3f8(0x1f6)](
      _0x32b3f8(0x1f0),
      0x78 + 0x1e * Math[_0x32b3f8(0x234)](t * 0.008) + "px",
    ),
      (t += 0x1);
  },
  startInterval = () => {
    interval === null && (interval = setInterval(intervalFn, 0xa));
  },
  stopInterval = () => {
    interval !== null && (clearInterval(interval), (interval = null));
  };
_0x4196b9(document[_0x405d10(0x24b)](_0x405d10(0x23e)), {
  content: _0x405d10(0x22e),
  placement: window["innerWidth"] > 0x300 ? _0x405d10(0x204) : _0x405d10(0x20c),
  allowHTML: !![],
  animation: _0x405d10(0x213),
});
let interval = setInterval(intervalFn, 0xa);
function _0x3a1a(_0x2acc20, _0x1f71d7) {
  const _0x3fe932 = _0x3fe9();
  return (
    (_0x3a1a = function (_0x3a1af9, _0x5ccd22) {
      _0x3a1af9 = _0x3a1af9 - 0x1eb;
      let _0x5e0677 = _0x3fe932[_0x3a1af9];
      return _0x5e0677;
    }),
    _0x3a1a(_0x2acc20, _0x1f71d7)
  );
}
document["getElementById"](_0x405d10(0x23e))[_0x405d10(0x216)](
  _0x405d10(0x1fa),
  () => {
    muted ? unmute() : mute();
  },
),
  document[_0x405d10(0x216)]("click", () => {
    const _0x3c3654 = _0x405d10,
      _0x51b31d = document["getElementById"]("footer");
    !_0x51b31d["classList"][_0x3c3654(0x217)](_0x3c3654(0x20e))
      ? _0x51b31d[_0x3c3654(0x1fb)][_0x3c3654(0x1fc)]("fade")
      : (_0x51b31d["style"][_0x3c3654(0x239)] = 0x0);
    const _0x378ed8 = document[_0x3c3654(0x24b)]("sound");
    !_0x378ed8[_0x3c3654(0x1fb)]["contains"](_0x3c3654(0x20e))
      ? _0x378ed8[_0x3c3654(0x1fb)][_0x3c3654(0x1fc)]("fade")
      : (_0x378ed8[_0x3c3654(0x1ed)][_0x3c3654(0x239)] = 0x0);
    count >= 0xa &&
      document[_0x3c3654(0x24b)]("count")["classList"][_0x3c3654(0x1fc)](
        _0x3c3654(0x231),
      );
    !clickedBoop &&
      (!light
        ? (startInterval(),
          magicstart[_0x3c3654(0x1ff)](),
          magic["play"](),
          document[_0x3c3654(0x24b)]("mask")[_0x3c3654(0x1fb)][
            _0x3c3654(0x1fc)
          ](_0x3c3654(0x235)),
          (light = !![]))
        : (stopInterval(),
          magicstart[_0x3c3654(0x1f8)](),
          magic[_0x3c3654(0x1f8)](),
          count < 0x64 && playFlashlight(),
          document[_0x3c3654(0x24b)](_0x3c3654(0x240))["classList"][
            _0x3c3654(0x236)
          ](_0x3c3654(0x235)),
          (light = ![])));
    count >= 0x64 &&
      (stopInterval(),
      !light2 ? (torch[_0x3c3654(0x1ff)](), (light2 = !![])) : (light2 = ![]),
      magic["volume"](0x0),
      magicstart[_0x3c3654(0x222)](0x0),
      (document[_0x3c3654(0x22a)]["style"][_0x3c3654(0x1f1)] =
        _0x3c3654(0x23d)),
      document["body"][_0x3c3654(0x1fb)][_0x3c3654(0x236)](_0x3c3654(0x1f2)),
      document[_0x3c3654(0x22a)][_0x3c3654(0x1fb)][_0x3c3654(0x1fc)](
        _0x3c3654(0x230),
      ),
      mask[_0x3c3654(0x1ed)][_0x3c3654(0x1f6)](
        _0x3c3654(0x1f0),
        window[_0x3c3654(0x245)] > 0x300 ? _0x3c3654(0x233) : _0x3c3654(0x1ef),
      ),
      (document["getElementById"](_0x3c3654(0x248))[_0x3c3654(0x1ed)][
        _0x3c3654(0x20b)
      ] = "block"),
      !addedBoop &&
        ((addedBoop = !![]),
        document[_0x3c3654(0x24b)]("snoot")["addEventListener"](
          _0x3c3654(0x1fa),
          () => {
            const _0x5ccd6b = _0x3c3654;
            (clickedBoop = !![]),
              boop[_0x5ccd6b(0x1ff)](),
              (document[_0x5ccd6b(0x24b)](_0x5ccd6b(0x248))["style"][
                _0x5ccd6b(0x20b)
              ] = _0x5ccd6b(0x1f9)),
              boops === 0x0 &&
                (lights[_0x5ccd6b(0x1ff)](), text[_0x5ccd6b(0x1ff)]()),
              (boops += 0x1);
          },
        )));
    clickedBoop &&
      (torch[_0x3c3654(0x222)](0x0),
      magic["stop"](),
      document[_0x3c3654(0x24b)](_0x3c3654(0x20d))[_0x3c3654(0x1fb)]["add"](
        _0x3c3654(0x231),
      ),
      (document[_0x3c3654(0x22a)][_0x3c3654(0x1ed)]["backgroundImage"] =
        _0x3c3654(0x21a)),
      mask[_0x3c3654(0x1fb)][_0x3c3654(0x236)](_0x3c3654(0x240)),
      (document["getElementById"](_0x3c3654(0x1ec))[_0x3c3654(0x1ed)][
        _0x3c3654(0x239)
      ] = _0x3c3654(0x244)),
      (document[_0x3c3654(0x22a)][_0x3c3654(0x1ed)][_0x3c3654(0x215)] =
        _0x3c3654(0x23a)));
    const _0x2d277b = [
        { range: [0xa, 0x14], image: _0x3c3654(0x21b), text: _0x3c3654(0x1f7) },
        {
          range: [0x14, 0x32],
          image: "/bar_final_2.webp",
          text: "Now\x20hold\x20on\x20there,\x20buckaroo!\x20We\x20ain\x27t\x20open\x20yet.\x20Try\x20back\x20in\x20a\x20bit,\x20would\x20ya?",
        },
        {
          range: [0x32, 0x64],
          image: _0x3c3654(0x21b),
          text: "Persistent,\x20ain\x27t\x20ya?\x20Much\x20obliged,\x20but\x20the\x20shop\x27s\x20still\x20closed.\x20Patience\x20is\x20a\x20virtue,\x20friend.",
        },
        {
          range: [0x64, 0xc8],
          image: "/bar_final_2.webp",
          text: _0x3c3654(0x241),
        },
        {
          range: [0xc8, 0x12c],
          image: _0x3c3654(0x21b),
          text: _0x3c3654(0x1fd),
        },
        {
          range: [0x12c, 0x190],
          image: _0x3c3654(0x243),
          text: "Landsakes!\x20You\x27re\x20as\x20stubborn\x20as\x20a\x20mule.\x20Still\x20closed,\x20pardner.\x20Come\x20back\x20when\x20the\x20rooster\x20crows!",
        },
        {
          range: [0x190, 0x1f4],
          image: _0x3c3654(0x21b),
          text: _0x3c3654(0x1f4),
        },
        {
          range: [0x1f4, 0x3e8],
          image: _0x3c3654(0x243),
          text: _0x3c3654(0x249),
        },
        {
          range: [0x3e8, 0x1388],
          image: _0x3c3654(0x21b),
          text: "You\x27ve\x20got\x20the\x20spirit!\x20But\x20no\x20luck\x20this\x20time\x20either.\x20The\x20shop\x27s\x20closed.\x20Try\x20once\x20more\x20much\x20later!",
        },
        {
          range: [0x1388, 0x98967f],
          image: _0x3c3654(0x243),
          text: _0x3c3654(0x22d),
        },
      ],
      _0x1eeb22 = (_0x35f3dc) => {
        const _0x38c921 = _0x3c3654;
        for (const _0x460404 of _0x2d277b) {
          if (
            _0x35f3dc >= _0x460404[_0x38c921(0x209)][0x0] &&
            _0x35f3dc < _0x460404[_0x38c921(0x209)][0x1]
          ) {
            document["getElementById"]("text")[_0x38c921(0x205)] !==
              _0x460404[_0x38c921(0x221)] && text[_0x38c921(0x1ff)]();
            (document[_0x38c921(0x22a)]["style"][_0x38c921(0x1f1)] =
              _0x38c921(0x22f) + _0x460404["image"] + "\x27)"),
              (document[_0x38c921(0x24b)]("text")["innerHTML"] =
                _0x460404[_0x38c921(0x221)]);
            break;
          }
        }
      };
    _0x1eeb22(boops),
      (count += 0x1),
      (document[_0x3c3654(0x24b)](_0x3c3654(0x1f5))[_0x3c3654(0x205)] = count),
      (document[_0x3c3654(0x24b)]("boopcount")["innerHTML"] = boops),
      boops >= 0x1388 && (endingUnlocked = !![]);
  });
const konamiPattern = [
    _0x405d10(0x232),
    _0x405d10(0x232),
    _0x405d10(0x223),
    "ARROWDOWN",
    _0x405d10(0x214),
    _0x405d10(0x202),
    _0x405d10(0x214),
    "ARROWRIGHT",
    "B",
    "A",
  ],
  nicePattern = ["6", "9"],
  blazePattern = ["4", "2", "0"];
let currentKonami = 0x0,
  currentNice = 0x0,
  currentBlaze = 0x0;
function _0x3fe9() {
  const _0x9b8255 = [
    "ARROWDOWN",
    "/audio/mus_cymbal.ogg",
    "18579465WykPnt",
    "length",
    "3586009yOyAuU",
    "169170QnqiIR",
    "/audio/click.mp3",
    "body",
    "mousemove",
    "keydown",
    "Alright,\x20alright,\x20you\x27ve\x20worn\x20me\x20down!\x20I\x20admire\x20your\x20persistence.\x20Tell\x20you\x20what,\x20if\x20you\x20can\x20find\x20the\x20last\x20secret,\x20I\x27ll\x20have\x20a\x20little\x20something\x20extra\x20for\x20ya\x20as\x20a\x20reward\x20for\x20your\x20patience\x20and\x20determination.\x20See\x20you\x20soon,\x20pardner!",
    "For\x20best\x20user\x20experience,\x20please\x20keep\x20the\x20audio\x20on!",
    "url(\x27",
    "bg-[20%_center]",
    "fade-immediate",
    "ARROWUP",
    "100vh",
    "sin",
    "mask2",
    "remove",
    "hidden",
    "/audio/flashlight.mp3",
    "opacity",
    "default",
    "clientX",
    "innerHeight",
    "url(\x27/bar_final_.webp\x27)",
    "sound",
    "4675584WhtQvu",
    "mask",
    "You\x27re\x20really\x20keen,\x20huh?\x20But\x20I\x27m\x20afraid\x20the\x20doors\x20are\x20still\x20shut\x20tight.\x20Come\x20back\x20later!",
    "sound-off",
    "/bar_final_2.webp",
    "80%",
    "innerWidth",
    "/audio/snd_select.wav",
    "url(\x27/bar_420.webp\x27)",
    "snoot",
    "Goodness\x20gracious!\x20I\x20appreciate\x20your\x20tenacity,\x20but\x20we\x27re\x20closed\x20tighter\x20than\x20a\x20drum.\x20Patience!",
    "indexOf",
    "getElementById",
    "/audio/switchtrimmed.mp3",
    "dialogue",
    "style",
    "toUpperCase",
    "25vh",
    "--radius",
    "backgroundImage",
    "bg-center",
    "/audio/magicnormalized.mp3",
    "Gotta\x20hand\x20it\x20to\x20ya,\x20your\x20determination\x20sure\x20is\x20admirable!\x20But\x20no\x20can\x20do,\x20we\x27re\x20still\x20closed.\x20Maybe\x20take\x20a\x20coffee\x20break?",
    "count",
    "setProperty",
    "Wow,\x20you\x27re\x20an\x20impatient\x20fellow,\x20aren\x27t\x20ya?\x20Sorry,\x20pardner\x20—\x20I\x20appreciate\x20the\x20enthusiasm,\x20but\x20the\x20shop\x27s\x20closed!",
    "stop",
    "none",
    "click",
    "classList",
    "add",
    "Well,\x20ain\x27t\x20you\x20a\x20determined\x20one!\x20Though\x20I\x20reckon\x20we\x27re\x20still\x20closed\x20—\x20maybe\x20take\x20a\x20walk\x20and\x20check\x20back\x20soon.",
    "6EaKjPc",
    "play",
    "location",
    "/audio/magicstart.mp3",
    "ARROWRIGHT",
    "clientY",
    "left",
    "innerHTML",
    "1093948UmdToS",
    "3fabZzb",
    "560026lSzFkl",
    "range",
    "block",
    "display",
    "bottom",
    "boopcount",
    "fade",
    "sound-on",
    "key",
    "touches",
    "<span>Sure\x20is\x20<span\x20class=\x27font-semibold\x27>blazing</span>\x20hot\x20down\x20South\x20this\x20time\x20of\x20year!</span>",
    "shift-away-extreme",
    "ARROWLEFT",
    "cursor",
    "addEventListener",
    "contains",
    "57141vCfZxE",
    "--mouse-y",
    "url(\x27/bar_final_2.webp\x27)",
    "/bar_final_.webp",
    "/audio/click2.mp3",
    "/audio/boop.wav",
    "fade-to-white",
    "replace",
    "<span>Nice.</span>",
    "text",
    "volume",
  ];
  _0x3fe9 = function () {
    return _0x9b8255;
  };
  return _0x3fe9();
}
const konamiHandler = async (_0x1dc944) => {
    const _0x2aea13 = _0x405d10;
    endingUnlocked && click[_0x2aea13(0x1ff)]();
    if (
      konamiPattern[_0x2aea13(0x24a)](
        _0x1dc944[_0x2aea13(0x210)][_0x2aea13(0x1ee)](),
      ) < 0x0 ||
      _0x1dc944[_0x2aea13(0x210)][_0x2aea13(0x1ee)]() !==
        konamiPattern[currentKonami][_0x2aea13(0x1ee)]()
    ) {
      currentKonami = 0x0;
      return;
    }
    (currentKonami += 0x1),
      konamiPattern[_0x2aea13(0x226)] === currentKonami &&
        ((currentKonami = 0x0),
        endingUnlocked &&
          (transition[_0x2aea13(0x1ff)](),
          document[_0x2aea13(0x22a)][_0x2aea13(0x1fb)]["add"](_0x2aea13(0x21e)),
          (endingUnlocked = ![]),
          setTimeout(() => {
            const _0x5485ce = _0x2aea13;
            window[_0x5485ce(0x200)][_0x5485ce(0x21f)](
              atob("aHR0cHM6Ly9kaXNjb3JkLmdnL3VzVmhGcFNa"),
            );
          }, 0x1388)));
  },
  niceHandler = async (_0x2109d0) => {
    const _0x2a7351 = _0x405d10;
    if (
      nicePattern[_0x2a7351(0x24a)](
        _0x2109d0[_0x2a7351(0x210)][_0x2a7351(0x1ee)](),
      ) < 0x0 ||
      _0x2109d0["key"][_0x2a7351(0x1ee)]() !==
        nicePattern[currentNice][_0x2a7351(0x1ee)]()
    ) {
      currentNice = 0x0;
      return;
    }
    (currentNice += 0x1),
      nicePattern[_0x2a7351(0x226)] === currentNice &&
        ((currentNice = 0x0),
        clickedBoop &&
          (nice[_0x2a7351(0x1ff)](),
          (document["getElementById"](_0x2a7351(0x221))[_0x2a7351(0x205)] =
            _0x2a7351(0x220))));
  },
  blazeHandler = async (_0x5ce66f) => {
    const _0x25bb9a = _0x405d10;
    if (
      blazePattern[_0x25bb9a(0x24a)](
        _0x5ce66f[_0x25bb9a(0x210)][_0x25bb9a(0x1ee)](),
      ) < 0x0 ||
      _0x5ce66f[_0x25bb9a(0x210)]["toUpperCase"]() !==
        blazePattern[currentBlaze][_0x25bb9a(0x1ee)]()
    ) {
      currentBlaze = 0x0;
      return;
    }
    (currentBlaze += 0x1),
      blazePattern[_0x25bb9a(0x226)] === currentBlaze &&
        ((currentBlaze = 0x0),
        clickedBoop &&
          ((document[_0x25bb9a(0x22a)][_0x25bb9a(0x1ed)]["backgroundImage"] =
            _0x25bb9a(0x247)),
          smoke["play"](),
          (document["getElementById"]("text")[_0x25bb9a(0x205)] =
            _0x25bb9a(0x212))));
  };
document[_0x405d10(0x216)](_0x405d10(0x22c), (_0xd76a2c) => {
  konamiHandler(_0xd76a2c), niceHandler(_0xd76a2c), blazeHandler(_0xd76a2c);
});
