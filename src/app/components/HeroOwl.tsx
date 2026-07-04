import { useEffect, useState } from "react";
import { useColors } from "./ThemeContext";

const L_EYE = { cx: 454, cy: 353 };
const R_EYE = { cx: 553, cy: 353 };
const MAX_PUPIL_OFF = 18;
const MAX_IRIS_OFF = 8;

export function HeroOwl() {
  const { LIME, FORE, DARK } = useColors();
  const [[lPupX, lPupY], setLPup] = useState([0, 0]);
  const [[rPupX, rPupY], setRPup] = useState([0, 0]);
  const [[lIrisX, lIrisY], setLIris] = useState([0, 0]);
  const [[rIrisX, rIrisY], setRIris] = useState([0, 0]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const mx = (e.clientX / window.innerWidth) * 1024;
      const my = (e.clientY / window.innerHeight) * 1024;

      const calc = (cx: number, cy: number) => {
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 1) return { pup: [0, 0], iris: [0, 0] };
        const normDx = dx / dist;
        const normDy = dy / dist;
        return {
          pup: [normDx * Math.min(dist, MAX_PUPIL_OFF), normDy * Math.min(dist, MAX_PUPIL_OFF)],
          iris: [normDx * Math.min(dist, MAX_IRIS_OFF), normDy * Math.min(dist, MAX_IRIS_OFF)],
        };
      };

      const l = calc(L_EYE.cx, L_EYE.cy);
      const r = calc(R_EYE.cx, R_EYE.cy);
      setLPup(l.pup as [number, number]);
      setLIris(l.iris as [number, number]);
      setRPup(r.pup as [number, number]);
      setRIris(r.iris as [number, number]);
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g transform="translate(0,1024) scale(0.1,-0.1)">
        <path
          d="M4070 7333 c0 -28 3 -59 6 -68 10 -25 128 -105 210 -140 l74 -32 -59 -36 c-120 -75 -225 -217 -256 -348 -48 -205 7 -403 154 -550 118 -118 249 -172 416 -172 94 0 174 21 265 69 77 41 61 54 162 -133 40 -73 75 -133 78 -133 3 1 39 64 80 141 41 77 78 145 82 151 4 8 30 -1 76 -25 93 -49 170 -68 277 -68 429 -2 703 448 513 841 -37 76 -159 205 -227 239 l-43 23 77 33 c147 64 203 116 214 199 4 31 6 56 3 56 -2 0 -33 -27 -69 -60 -71 -67 -168 -120 -262 -145 -34 -8 -126 -22 -204 -29 -201 -20 -288 -53 -400 -156 -31 -28 -68 -71 -84 -95 -15 -25 -30 -45 -33 -45 -3 0 -25 27 -50 61 -67 92 -166 164 -284 205 -22 8 -106 21 -186 29 -229 22 -362 74 -477 188 l-53 51 0 -51z m655 -288 c147 -39 261 -134 328 -277 23 -48 48 -90 55 -92 21 -9 40 4 52 37 29 82 69 147 125 203 256 258 690 156 816 -192 17 -46 22 -82 22 -159 0 -77 -5 -113 -22 -159 -125 -346 -557 -448 -815 -193 -57 56 -83 99 -124 200 -25 59 -64 47 -94 -27 -90 -231 -345 -363 -583 -301 -250 66 -408 309 -365 564 47 281 331 467 605 396z m416 -787 c6 -13 27 -42 46 -65 l34 -42 -48 -91 c-26 -49 -52 -88 -56 -87 -5 1 -29 41 -54 88 l-46 86 35 44 c19 24 41 54 47 67 6 12 16 22 21 22 5 0 15 -10 21 -22z M4540 6707 c-98 -66 -95 -217 6 -274 49 -28 95 -29 150 -2 151 73 97 299 -71 299 -37 0 -61 -6 -85 -23z M5530 6708 c-57 -39 -75 -72 -75 -138 0 -97 58 -155 155 -155 66 0 99 18 138 76 31 44 28 129 -6 176 -45 63 -149 83 -212 41z M3731 6433 c-58 -78 -139 -237 -170 -333 -118 -364 -52 -786 167 -1077 159 -209 330 -324 846 -569 l209 -99 83 -174 c46 -95 84 -175 84 -177 0 -2 -325 -5 -721 -6 -675 -3 -723 -4 -733 -20 -8 -13 -8 -23 0 -35 10 -17 59 -18 753 -21 l741 -2 62 -125 c35 -69 65 -125 68 -125 3 0 33 56 68 125 l62 125 745 0 745 0 6 25 c14 57 46 55 -737 55 -396 0 -719 3 -718 8 0 4 40 85 87 181 l87 173 145 67 c470 218 634 315 785 465 130 129 215 261 274 428 43 125 63 251 64 403 0 252 -65 463 -210 682 -53 81 -85 105 -114 88 -6 -4 -37 -62 -69 -129 -31 -66 -151 -312 -265 -546 -115 -234 -360 -738 -546 -1120 l-338 -695 -72 0 -72 0 -310 635 c-170 349 -434 894 -588 1210 -153 316 -287 591 -296 610 -13 25 -26 36 -45 38 -23 3 -34 -6 -77 -65z m344 -628 c153 -313 360 -739 460 -945 101 -206 181 -377 179 -379 -6 -6 -176 89 -244 137 -146 103 -285 262 -362 417 -88 174 -124 309 -142 524 -9 118 -14 146 -28 155 -13 8 -23 8 -35 0 -16 -10 -18 -28 -17 -140 1 -296 93 -541 306 -819 l23 -30 -40 24 c-169 102 -324 240 -404 359 -62 92 -117 213 -148 327 -26 92 -28 114 -28 280 0 199 15 280 75 433 27 67 120 236 126 229 1 -1 127 -258 279 -572z m2455 421 c80 -162 110 -278 117 -456 13 -341 -101 -624 -338 -844 -61 -56 -193 -151 -258 -186 l-25 -13 22 29 c159 208 236 370 282 593 25 126 37 319 21 349 -14 27 -56 29 -69 5 -5 -10 -12 -79 -15 -153 -16 -368 -186 -697 -470 -911 -71 -54 -241 -149 -266 -149 -9 0 158 349 619 1290 312 638 289 594 305 580 8 -7 42 -67 75 -134z m-1380 -2311 c0 -11 -24 -55 -30 -55 -6 0 -30 44 -30 55 0 3 14 5 30 5 17 0 30 -2 30 -5z"
          fill={FORE}
          opacity="0.2"
        />
      </g>
      <circle cx={L_EYE.cx} cy={L_EYE.cy} r="70" fill={LIME} opacity="0.06" />
      <circle cx={L_EYE.cx} cy={L_EYE.cy} r="50" fill={LIME} opacity="0.1" />
      <circle cx={L_EYE.cx + lIrisX} cy={L_EYE.cy + lIrisY} r="30" fill={LIME} opacity="0.9" />
      <circle cx={L_EYE.cx + lPupX} cy={L_EYE.cy + lPupY} r="16" fill={DARK} />
      <circle cx={L_EYE.cx + lPupX} cy={L_EYE.cy + lPupY} r="9" fill="#0A1A00" />
      <circle cx={L_EYE.cx + 14 + lPupX} cy={L_EYE.cy - 13 + lPupY} r="5" fill={LIME} opacity="0.5" />
      <circle cx={R_EYE.cx} cy={R_EYE.cy} r="70" fill={LIME} opacity="0.06" />
      <circle cx={R_EYE.cx} cy={R_EYE.cy} r="50" fill={LIME} opacity="0.1" />
      <circle cx={R_EYE.cx + rIrisX} cy={R_EYE.cy + rIrisY} r="30" fill={LIME} opacity="0.9" />
      <circle cx={R_EYE.cx + rPupX} cy={R_EYE.cy + rPupY} r="16" fill={DARK} />
      <circle cx={R_EYE.cx + rPupX} cy={R_EYE.cy + rPupY} r="9" fill="#0A1A00" />
      <circle cx={R_EYE.cx + 14 + rPupX} cy={R_EYE.cy - 13 + rPupY} r="5" fill={LIME} opacity="0.5" />
    </svg>
  );
}