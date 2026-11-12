const VERSION = "0.3.0";

const ICON = {
  door: "M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",
  doorOpen: "M12,3C10.89,3 10,3.89 10,5H3V19H2V21H22V19H21V5C21,3.89 20.11,3 19,3H12M12,5H19V19H12V5M5,11H7V13H5V11Z",
  window: "M21 20V2H3V20H1V23H23V20M19 4V11H13V4M5 4H11V11H5M5 20V13H11V20M13 20V13H19V20Z",
  windowOpen: "M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z",
  garage: "M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",
  garageOpen: "M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12Z",
  thermostat: "M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",
  fire: "M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",
  snowflake: "M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z",
  cctv: "M6.03 12.03L8.03 15.5L5.5 18.68L2 12.62L6.03 12.03M17 18V15.29C17.88 14.9 18.5 14.03 18.5 13C18.5 12.43 18.3 11.9 17.97 11.5L19.94 10.35C20.95 9.76 21.3 8.47 20.71 7.46L19.33 5.06C18.74 4.05 17.45 3.7 16.44 4.28L8.31 9C7.36 9.53 7.03 10.75 7.58 11.71L9.08 14.31C9.63 15.26 10.86 15.59 11.81 15.04L13.69 13.96C13.94 14.55 14.41 15.03 15 15.29V18C15 19.1 15.9 20 17 20H22V18H17Z",
  bulb: "M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",
  bulbOff: "M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",
  power: "M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",
  fan: "M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",
  lock: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",
  lockOpen: "M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",
  motion: "M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",
  thermometer: "M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",
  water: "M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z",
  waterAlert: "M10 3.25C10 3.25 16 10 16 14C16 17.31 13.31 20 10 20S4 17.31 4 14C4 10 10 3.25 10 3.25M20 7V13H18V7H20M18 17H20V15H18V17Z",
  smoke: "M12,18A6,6 0 0,0 18,12C18,8.68 15.31,6 12,6C8.68,6 6,8.68 6,12A6,6 0 0,0 12,18M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19M8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12Z",
  speaker: "M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z",
  help: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z",
};

const DEFAULT_PLAN = {view_box:[55,-115,1460,1060],stack:{split_x:780,move:[-760,920],below:700},labels:[{text:"Main Floor",x:402,y:18},{text:"Basement",x:1163,y:18}],rooms:[{name:"Bedroom 1",rect:[77,47,330,352]},{name:"Bath",rect:[77,352,330,490]},{name:"Hall",rect:[330,47,422,490],label_at:[376,420]},{name:"Office",rect:[422,47,728,242]},{name:"Weston's Room",rect:[422,242,728,428],label_at:[575,268]},{name:"Stairs",rect:[422,428,728,497]},{name:"Kitchen",rect:[77,490,355,650],label_at:[216,530]},{name:"Living Room",points:[[355,490],[422,490],[422,497],[728,497],[728,787],[355,787]],label_at:[620,590]},{name:"Dining Room",rect:[77,650,355,787],label_at:[216,628]},{name:"Server Room",rect:[837,47,1490,494]},{name:"Basement",rect:[837,494,1490,787]}],walls:[[77,47,728,47],[728,47,728,787],[728,787,77,787],[77,787,77,47],[330,47,330,490],[77,352,330,352],[422,47,422,497],[422,242,728,242],[422,428,728,428],[422,497,728,497],[355,557,355,650],[837,47,1490,47],[1490,47,1490,787],[1490,787,837,787],[837,787,837,47],[837,494,1490,494]],half_walls:[[77,490,332,490]],openings:[{name:"Front Door",type:"door",line:[450,787,527,787]},{name:"Patio Door",type:"door",line:[170,787,305,787]},{name:"Side Door",type:"door",line:[728,545,728,620]},{name:"Bedroom Sliding",type:"door",line:[152,47,250,47]},{name:"Office Window",type:"window",line:[575,47,675,47]},{name:"Bedroom 1 Door",line:[330,95,330,142]},{name:"Bath Door",line:[330,372,330,430]},{name:"Office Door",type:"door",line:[422,92,422,140]},{name:"Weston's Room Door",line:[422,263,422,320]},{name:"Closet Door",line:[447,497,495,497]},{name:"Basement Door",type:"door",line:[657,497,710,497]},{name:"Basement Door",line:[1096,494,1200,494]}]};

const OPEN_STATES = new Set(["on", "open", "opening", "closing", "unlocked", "unlocking", "jammed"]);
const DEAD_STATES = new Set(["unavailable", "unknown"]);
const OPENING_CLASSES = new Set(["door", "window", "garage_door", "opening"]);
const MOTION_CLASSES = new Set(["motion", "occupancy", "presence"]);
const ALARM_CLASSES = new Set(["smoke", "moisture", "gas", "carbon_monoxide", "safety", "problem", "tamper"]);
const TOGGLE_DOMAINS = new Set(["light", "switch", "fan", "input_boolean"]);

const LAYER_NAMES = {
  all: "All",
  doors: "Doors",
  climate: "Climate",
  cameras: "Cameras",
  lights: "Lights",
  motion: "Motion",
  sensors: "Sensors",
};

const DETECT_LABELS = {
  baby_cry: "Baby crying",
  person: "Person",
  vehicle: "Vehicle",
  animal: "Animal",
  package: "Package",
  face: "Face",
  smoke: "Smoke alarm",
  glass_break: "Glass break",
  motion: "Motion",
};

const SVG_NS = "http://www.w3.org/2000/svg";

function h(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === "class") node.className = v;
    else if (k === "style") node.style.cssText = v;
    else node.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat()) if (c != null) node.append(c);
  return node;
}

function s(tag, attrs = {}) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) if (v != null) node.setAttribute(k, v);
  return node;
}

const iconSvg = (path) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}"/></svg>`;

function since(iso) {
  const sec = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  if (sec < 60) return "just now";
  if (sec < 3600) return `${Math.floor(sec / 60)}m`;
  if (sec < 86400) return `${Math.floor(sec / 3600)}h`;
  return `${Math.floor(sec / 86400)}d`;
}

function roomPoints(room) {
  if (room.points) return room.points;
  const [x1, y1, x2, y2] = room.rect;
  return [[x1, y1], [x2, y1], [x2, y2], [x1, y2]];
}

function bounds(points) {
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}

function transform(viewBox, rotate) {
  const [vx, vy, w, hgt] = viewBox;
  const r = ((Number(rotate) % 360) + 360) % 360;
  const fn = (x, y) => {
    const u = x - vx;
    const v = y - vy;
    if (r === 90) return [hgt - v, u];
    if (r === 180) return [w - u, hgt - v];
    if (r === 270) return [v, w - u];
    return [u, v];
  };
  return { fn, size: r === 90 || r === 270 ? [hgt, w] : [w, hgt] };
}

const STYLE = `
:host {
  display: block;
  --hv-bg: #121418;
  --hv-surface: rgba(29, 33, 39, 0.92);
  --hv-grid: rgba(130, 180, 210, 0.05);
  --hv-wall: #a9dcef;
  --hv-wall-edge: #55788b;
  --hv-half: #9aa0a6;
  --hv-opening: #d38b1f;
  --hv-closed: #3ecf8e;
  --hv-open: #ff5a5f;
  --hv-text: #e6edf2;
  --hv-muted: #8b98a5;
  --hv-accent: #3d8bff;
  --hv-warm: #ffc35a;
  --hv-heat: #ff9a3c;
  --hv-cool: #5ab4ff;
}
ha-card {
  display: block;
  padding: 12px 12px 16px;
  background: var(--hv-bg);
  color: var(--hv-text);
  border-radius: var(--ha-card-border-radius, 12px);
  overflow: hidden;
  font-family: var(--paper-font-body1_-_font-family, Roboto, system-ui, sans-serif);
}
.head { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; margin-bottom: 10px; }
.title { font-size: 18px; font-weight: 600; margin-right: auto; }
.chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chip {
  display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 10px;
  border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.05);
  color: var(--hv-text); font: inherit; font-size: 13px; cursor: pointer; white-space: nowrap;
}
.chip svg { width: 16px; height: 16px; fill: currentColor; }
.chip.ok { color: var(--hv-closed); }
.chip.alert { color: var(--hv-open); background: rgba(255,90,95,0.12); border-color: rgba(255,90,95,0.35); }
.chip.warm { color: var(--hv-warm); }
.chip.heat { color: var(--hv-heat); }
.chip.cool { color: var(--hv-cool); }
.tabs {
  display: flex; gap: 2px; width: fit-content; max-width: 100%; box-sizing: border-box; overflow-x: auto; scrollbar-width: none;
  margin: 0 auto 12px; padding: 3px; border-radius: 10px; background: rgba(255,255,255,0.05);
}
.tabs::-webkit-scrollbar { display: none; }
.tab {
  border: 0; background: none; color: var(--hv-muted); padding: 6px 12px; border-radius: 7px;
  font: inherit; font-size: 13px; cursor: pointer; white-space: nowrap; flex: none;
}
.tab.on { background: var(--hv-accent); color: #fff; }
.plan {
  position: relative; margin: 0 auto;
  aspect-ratio: var(--ratio);
  width: min(100%, calc(var(--hv-max-height, 78vh) * var(--ratio)));
  container-type: inline-size;
}
.plan.full { width: 100%; }
svg.floor { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
svg.floor line, svg.floor polygon { vector-effect: non-scaling-stroke; }
.room { fill: transparent; transition: fill 0.4s; }
.room.motion { fill: rgba(90,180,255,0.08); }
.room.lit { fill: rgba(255,195,90,0.10); }
.room.click { cursor: pointer; }
.room.click:hover { fill: rgba(255,255,255,0.04); }
.wall-edge { stroke: var(--hv-wall-edge); stroke-width: 5px; stroke-linecap: square; }
.wall { stroke: var(--hv-wall); stroke-width: 2.5px; stroke-linecap: square; }
.half { stroke: var(--hv-half); stroke-width: 3.5px; stroke-linecap: round; opacity: 0.75; }
.opening .vis { stroke: var(--hv-opening); stroke-width: 4px; transition: stroke 0.3s, opacity 0.3s; }
.opening.closed .vis { stroke: var(--hv-closed); }
.opening.open .vis { stroke: var(--hv-open); stroke-width: 6px; animation: blink 1.6s ease-in-out infinite; }
.opening.dead .vis { stroke: var(--hv-muted); stroke-dasharray: 4 4; }
.opening .hit { stroke: transparent; stroke-width: 20px; }
.opening.bound .hit { cursor: pointer; }
.opening.dimmed { opacity: 0.3; }
.overlay { position: absolute; inset: 0; pointer-events: none; }
.overlay > * { position: absolute; transform: translate(-50%, -50%); pointer-events: auto; }
.room-label {
  pointer-events: none !important; text-align: center; white-space: nowrap;
  color: var(--hv-muted); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
}
.room-label .meta {
  display: block; margin-top: 2px; color: var(--hv-text);
  font-size: 12px; font-weight: 500; letter-spacing: 0; text-transform: none;
}
.room-label .meta:empty { display: none; }
.floor-label {
  pointer-events: none !important; white-space: nowrap; color: var(--hv-text);
  font-size: 13px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
}
.open-tag {
  pointer-events: none !important; white-space: nowrap; padding: 3px 7px; border-radius: 6px;
  background: var(--hv-open); color: #fff; font-size: 11px; font-weight: 600;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}
.dev {
  display: flex; align-items: center; justify-content: center; gap: 4px;
  box-sizing: border-box; height: 34px; min-width: 34px; padding: 0 7px; border-radius: 17px;
  border: 1px solid rgba(255,255,255,0.14); background: var(--hv-surface); color: var(--hv-muted);
  font-family: inherit; font-size: 13px; font-weight: 600; line-height: 1; cursor: pointer; user-select: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.45);
  transition: color 0.2s, background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.15s;
  -webkit-tap-highlight-color: transparent;
}
.dev:focus-visible { outline: 2px solid var(--hv-accent); outline-offset: 2px; }
@media (hover: hover) { .dev:hover { transform: translate(-50%, -50%) scale(1.08); } }
.dev .ico { display: flex; }
.dev svg, .dev ha-icon { width: 20px; height: 20px; fill: currentColor; --mdc-icon-size: 20px; flex: none; }
.dev .val:empty { display: none; }
.dev .val { color: var(--hv-text); padding-right: 2px; }
.dev .name {
  position: absolute; top: 100%; left: 50%; transform: translateX(-50%); margin-top: 4px;
  white-space: nowrap; color: var(--hv-text); font-size: 11px; font-weight: 500;
  text-shadow: 0 1px 3px #000; pointer-events: none;
}
.dev.on { color: var(--hv-warm); border-color: rgba(255,195,90,0.5); background: rgba(60,45,20,0.92); box-shadow: 0 0 16px rgba(255,195,90,0.35); }
.dev.closed { color: var(--hv-closed); }
.dev.open { color: var(--hv-open); border-color: rgba(255,90,95,0.55); box-shadow: 0 0 14px rgba(255,90,95,0.35); }
.dev.idle, .dev.cam { color: var(--hv-text); }
.dev.heating { color: var(--hv-heat); border-color: rgba(255,154,60,0.5); }
.dev.cooling { color: var(--hv-cool); border-color: rgba(90,180,255,0.5); }
.dev.active { color: var(--hv-cool); border-color: rgba(90,180,255,0.6); }
.dev.active::after {
  content: ""; position: absolute; inset: -6px; border-radius: 22px;
  border: 2px solid var(--hv-cool); animation: ping 1.6s ease-out infinite; pointer-events: none;
}
.dev.alert { color: #fff; background: var(--hv-open); border-color: var(--hv-open); }
.dev.missing, .dev.dead { opacity: 0.5; border-style: dashed; }
.dev.fan.on svg { animation: spin 1.4s linear infinite; }
.dev.preview { flex-direction: column; height: auto; width: var(--hv-preview-width, clamp(90px, 12cqw, 150px)); padding: 0; border-radius: 8px; overflow: hidden; }
.dev.preview .ico { display: none; }
.dev.preview img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; background: #000; }
.dev.preview .live {
  position: absolute; top: 5px; left: 5px; display: flex; align-items: center; gap: 4px;
  padding: 2px 5px; border-radius: 4px; background: rgba(0,0,0,0.6); color: #fff; font-size: 10px; letter-spacing: 0.04em;
}
.dev.preview .live::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--hv-open); }
.dev.preview .badge {
  position: absolute; top: 5px; left: 5px; display: none; max-width: calc(100% - 20px); padding: 2px 5px; border-radius: 4px;
  background: var(--hv-open); color: #fff; font-size: 10px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.dev.preview.detect .live { display: none; }
.dev.detect { color: var(--hv-open); border-color: var(--hv-open); box-shadow: 0 0 0 1px var(--hv-open), 0 0 18px rgba(255,90,95,0.45); }
.dev.preview.detect .badge { display: block; }
.dev.detect:not(.preview)::after, .dev.preview.detect .ico::after {
  content: ""; position: absolute; inset: -6px; border-radius: 22px;
  border: 2px solid var(--hv-open); animation: ping 1.6s ease-out infinite; pointer-events: none;
}
.dev.preview .name { position: static; transform: none; margin: 0; padding: 5px 6px; text-shadow: none; text-align: left; width: 100%; box-sizing: border-box; overflow: hidden; text-overflow: ellipsis; }
.hidden { display: none !important; }
@container (max-width: 520px) {
  .dev { height: 28px; min-width: 28px; padding: 0 5px; font-size: 12px; }
  .dev svg, .dev ha-icon { width: 16px; height: 16px; --mdc-icon-size: 16px; }
  .dev.active::after { inset: -4px; }
  .dev.preview { flex-direction: row; width: auto; height: 28px; padding: 0 5px; border-radius: 14px; color: var(--hv-text); }
  .dev.preview .ico { display: flex; }
  .dev.preview img, .dev.preview .live, .dev.preview .name, .dev.preview .badge { display: none !important; }
  .room-label { font-size: 9px; }
  .floor-label { font-size: 10px; }
  .room-label .meta { font-size: 11px; }
  .open-tag { font-size: 10px; padding: 2px 5px; }
  .open-tag .tn { display: none; }
}
@keyframes blink { 50% { opacity: 0.4; } }
@keyframes ping { from { opacity: 0.8; transform: scale(0.9); } to { opacity: 0; transform: scale(1.4); } }
@keyframes spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
`;

class HomeViewCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._layer = "all";
    this._built = false;
  }

  static getStubConfig() {
    return { title: "Home" };
  }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._config = config.walls || config.rooms ? config : { ...DEFAULT_PLAN, ...config };
    this._built = false;
    if (this._hass) this._build();
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._built && this._config) this._build();
    this._update();
  }

  get hass() {
    return this._hass;
  }

  getCardSize() {
    return 10;
  }

  getGridOptions() {
    return { columns: "full", rows: "auto", min_columns: 6 };
  }

  connectedCallback() {
    this._tick = setInterval(() => this._update(), 30000);
    this._camTick = setInterval(() => this._refreshCameras(), (this._config?.camera_refresh || 10) * 1000);
    this._ro = new ResizeObserver(() => {
      if (this._built && this._config?.stack && this._isStacked() !== this._stacked) this._build();
    });
    this._ro.observe(this);
    if (this._config?.rotate === "auto") {
      this._onResize = () => {
        const want = innerWidth > innerHeight ? 90 : 0;
        if (want !== this._rotation) this._build();
      };
      addEventListener("resize", this._onResize);
    }
  }

  disconnectedCallback() {
    clearInterval(this._tick);
    clearInterval(this._camTick);
    this._ro?.disconnect();
    if (this._onResize) removeEventListener("resize", this._onResize);
  }

  _autoViewBox() {
    const c = this._config;
    const pts = [];
    for (const w of [...(c.walls || []), ...(c.half_walls || [])]) pts.push([w[0], w[1]], [w[2], w[3]]);
    for (const r of c.rooms || []) pts.push(...roomPoints(r));
    for (const o of c.openings || []) pts.push([o.line[0], o.line[1]], [o.line[2], o.line[3]]);
    const [x1, y1, x2, y2] = bounds(pts);
    const pad = 24;
    return [x1 - pad, y1 - pad, x2 - x1 + pad * 2, y2 - y1 + pad * 2];
  }

  _isStacked() {
    const st = this._config.stack;
    return !!st && this.clientWidth > 0 && this.clientWidth < (st.below ?? 700);
  }

  _build() {
    const cfg = this._config;
    const hass = this._hass;
    this._rotation = cfg.rotate === "auto" ? (innerWidth > innerHeight ? 90 : 0) : Number(cfg.rotate || 0);
    let vb = cfg.view_box || this._autoViewBox();
    this._stacked = this._isStacked();
    let shift = (x, y) => [x, y];
    if (this._stacked) {
      const { split_x, move: [mx, my] } = cfg.stack;
      shift = (x, y) => (x >= split_x ? [x + mx, y + my] : [x, y]);
      vb = [vb[0], vb[1], vb[2] + mx, vb[3] + my];
    }
    const t = transform(vb, this._rotation);
    const fn = (x, y) => t.fn(...shift(x, y));
    const size = t.size;
    const [W, H] = size;
    const pos = (x, y) => {
      const [u, v] = fn(x, y);
      return `left:${(u / W) * 100}%;top:${(v / H) * 100}%`;
    };
    const line = (seg, cls) => {
      const [a, b] = [fn(seg[0], seg[1]), fn(seg[2], seg[3])];
      return s("line", { x1: a[0], y1: a[1], x2: b[0], y2: b[1], class: cls });
    };

    const root = this.shadowRoot;
    root.innerHTML = "";
    root.append(h("style", {}, STYLE));

    const card = h("ha-card");
    const head = h("div", { class: "head" });
    if (cfg.title) head.append(h("div", { class: "title" }, cfg.title));
    this._chips = h("div", { class: "chips" });
    this._chips.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (chip) this._setLayer(chip.dataset.layer);
    });
    head.append(this._chips);
    card.append(head);

    this._tabs = h("div", { class: "tabs" });
    card.append(this._tabs);

    const plan = h("div", { class: `plan${this._stacked ? " full" : ""}`, style: `--ratio:${W / H}` });
    const svg = s("svg", { class: "floor", viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: "xMidYMid meet" });
    const defs = s("defs");
    const pattern = s("pattern", { id: "hv-grid", width: 24, height: 24, patternUnits: "userSpaceOnUse" });
    pattern.append(s("path", { d: "M24 0H0V24", fill: "none", stroke: "var(--hv-grid)", "stroke-width": 1 }));
    defs.append(pattern);
    svg.append(defs, s("rect", { x: 0, y: 0, width: W, height: H, fill: cfg.grid === false ? "none" : "url(#hv-grid)" }));

    const overlay = h("div", { class: "overlay" });
    const roomLayer = s("g");
    const wallLayer = s("g");
    const openingLayer = s("g");
    svg.append(roomLayer, wallLayer, openingLayer);

    this._rooms = (cfg.rooms || []).map((room) => {
      const pts = roomPoints(room);
      const poly = s("polygon", { class: "room", points: pts.map((p) => fn(...p).join(",")).join(" ") });
      roomLayer.append(poly);
      const action = room.tap_action || (room.entity ? "more-info" : null);
      if (action) {
        poly.classList.add("click");
        poly.addEventListener("click", () => this._run(action, room.entity));
      }
      const [x1, y1, x2, y2] = bounds(pts);
      const [lx, ly] = room.label_at || [(x1 + x2) / 2, (y1 + y2) / 2];
      const meta = h("span", { class: "meta" });
      const label = h("div", { class: "room-label", style: pos(lx, ly) }, room.name || "", meta);
      if (room.name || room.temperature || room.humidity) overlay.append(label);
      return { cfg: room, poly, meta };
    });

    for (const l of cfg.labels || []) overlay.append(h("div", { class: "floor-label", style: pos(l.x, l.y) }, l.text));

    for (const w of cfg.walls || []) wallLayer.append(line(w, "wall-edge"));
    for (const w of cfg.walls || []) wallLayer.append(line(w, "wall"));
    for (const w of cfg.half_walls || []) wallLayer.append(line(w, "half"));

    const [cx, cy] = [vb[0] + vb[2] / 2, vb[1] + vb[3] / 2];
    this._openings = (cfg.openings || []).map((o) => {
      const g = s("g", { class: `opening ${o.type || "door"}` });
      const title = s("title");
      title.textContent = o.name || "";
      g.append(title, line(o.line, "vis"), line(o.line, "hit"));
      openingLayer.append(g);
      if (o.entity) g.addEventListener("click", () => this._run(o.tap_action || "more-info", o.entity));
      const [x1, y1, x2, y2] = o.line;
      const [mx, my] = [(x1 + x2) / 2, (y1 + y2) / 2];
      const len = Math.hypot(x2 - x1, y2 - y1) || 1;
      let [nx, ny] = [-(y2 - y1) / len, (x2 - x1) / len];
      if ((cx - mx) * nx + (cy - my) * ny < 0) [nx, ny] = [-nx, -ny];
      const off = o.tag_offset ?? 26;
      const tag = h("div", { class: "open-tag hidden", style: pos(mx + nx * off, my + ny * off) });
      overlay.append(tag);
      return { cfg: o, g, title, tag };
    });

    this._devices = (cfg.devices || []).map((d) => {
      const el = h("button", { class: "dev", style: pos(d.x, d.y), "aria-label": d.name || d.entity });
      const ico = h("span", { class: "ico" });
      const val = h("span", { class: "val" });
      const name = h("span", { class: "name" });
      const dev = { cfg: d, el, ico, val, name };
      if (d.icon) ico.append(h("ha-icon", { icon: d.icon }));
      if (d.preview && d.entity.startsWith("camera.")) {
        el.classList.add("preview");
        dev.img = h("img", { alt: "", loading: "lazy" });
        ico.innerHTML = iconSvg(ICON.cctv);
        dev.badge = h("span", { class: "badge" });
        el.append(ico, dev.img, h("span", { class: "live" }, "LIVE"), dev.badge, name);
      } else {
        el.append(ico, val);
        if (d.show_name ?? cfg.show_names) el.append(name);
      }
      this._bindPress(el, () => this._run(d.tap_action || this._defaultTap(dev), d.entity), () => this._moreInfo(d.entity));
      overlay.append(el);
      return dev;
    });

    plan.append(svg, overlay);
    card.append(plan);
    root.append(card);
    this._built = true;
    if (hass) {
      this._renderTabs();
      this._update();
      this._refreshCameras();
    }
  }

  _bindPress(node, onTap, onHold) {
    let timer;
    let held = false;
    const cancel = () => clearTimeout(timer);
    node.addEventListener("pointerdown", () => {
      held = false;
      timer = setTimeout(() => {
        held = true;
        onHold();
      }, 500);
    });
    node.addEventListener("pointerup", cancel);
    node.addEventListener("pointerleave", cancel);
    node.addEventListener("pointercancel", cancel);
    node.addEventListener("contextmenu", (e) => e.preventDefault());
    node.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!held) onTap();
    });
  }

  _kind(dev) {
    const st = this._hass?.states[dev.cfg.entity];
    const domain = dev.cfg.entity.split(".")[0];
    const dc = st?.attributes.device_class;
    if (domain === "climate") return { kind: "climate", layer: "climate" };
    if (domain === "camera") return { kind: "camera", layer: "cameras" };
    if (TOGGLE_DOMAINS.has(domain)) return { kind: "toggle", layer: "lights" };
    if (domain === "lock") return { kind: "lock", layer: "doors" };
    if (domain === "cover") return { kind: "opening", layer: "doors" };
    if (domain === "binary_sensor") {
      if (OPENING_CLASSES.has(dc)) return { kind: "opening", layer: "doors" };
      if (MOTION_CLASSES.has(dc)) return { kind: "motion", layer: "motion" };
      if (ALARM_CLASSES.has(dc)) return { kind: "alarm", layer: "sensors" };
      return { kind: "binary", layer: "sensors" };
    }
    if (domain === "sensor") return { kind: "value", layer: dc === "temperature" || dc === "humidity" ? "climate" : "sensors" };
    if (domain === "media_player") return { kind: "media", layer: "sensors" };
    return { kind: "generic", layer: "sensors" };
  }

  _detections(cfg) {
    const ids = [].concat(cfg.motion || [], cfg.detections || []);
    const label = (id) => {
      const m = id.match(/baby_cry|person|vehicle|animal|package|face|smoke|glass_break|motion/);
      if (m) return DETECT_LABELS[m[0]];
      return this._hass.states[id]?.attributes.friendly_name || id;
    };
    const hits = [...new Set(ids.filter((id) => this._hass.states[id]?.state === "on").map(label))];
    return hits.length > 1 ? hits.filter((x) => x !== "Motion") : hits;
  }

  _defaultTap(dev) {
    return this._kind(dev).kind === "toggle" ? "toggle" : "more-info";
  }

  _run(action, entity) {
    const a = typeof action === "string" ? { action } : action || {};
    switch (a.action) {
      case "none":
        return;
      case "toggle":
        this._fire("haptic", "light");
        this._hass.callService("homeassistant", "toggle", { entity_id: a.entity || entity });
        return;
      case "navigate":
        history.pushState(null, "", a.navigation_path);
        window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: false } }));
        return;
      case "call-service":
      case "perform-action": {
        const [domain, service] = (a.perform_action || a.service).split(".");
        this._hass.callService(domain, service, a.data || a.service_data || {}, a.target);
        return;
      }
      default:
        this._moreInfo(a.entity || entity);
    }
  }

  _moreInfo(entityId) {
    if (!entityId) return;
    this._fire("haptic", "selection");
    this._fire("hass-more-info", { entityId });
  }

  _fire(type, detail) {
    this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  }

  _layersPresent() {
    const set = new Set();
    if (this._openings.some((o) => o.cfg.entity)) set.add("doors");
    for (const d of this._devices) set.add(d.cfg.layer || this._kind(d).layer);
    return Object.keys(LAYER_NAMES).filter((k) => k === "all" || set.has(k));
  }

  _renderTabs() {
    const layers = this._layersPresent();
    this._tabs.classList.toggle("hidden", this._config.layers === false || layers.length < 3);
    this._tabs.replaceChildren(
      ...layers.map((k) => {
        const b = h("button", { class: `tab${k === this._layer ? " on" : ""}` }, LAYER_NAMES[k]);
        b.addEventListener("click", () => this._setLayer(k));
        return b;
      })
    );
  }

  _setLayer(layer) {
    if (!layer) return;
    this._layer = this._layer === layer && layer !== "all" ? "all" : layer;
    this._renderTabs();
    this._applyLayer();
  }

  _applyLayer() {
    const L = this._layer;
    for (const d of this._devices) {
      const layer = d.cfg.layer || this._kind(d).layer;
      d.el.classList.toggle("hidden", L !== "all" && layer !== L);
    }
    for (const o of this._openings) o.g.classList.toggle("dimmed", L !== "all" && L !== "doors");
  }

  _stateOf(entity) {
    const st = this._hass.states[entity];
    if (!st) return "missing";
    if (DEAD_STATES.has(st.state)) return "dead";
    return OPEN_STATES.has(st.state) ? "open" : "closed";
  }

  _name(entity, override) {
    return override || this._hass.states[entity]?.attributes.friendly_name || entity;
  }

  _update() {
    const hass = this._hass;
    if (!hass || !this._built) return;

    for (const r of this._rooms) {
      const on = (list) => [].concat(list || []).some((e) => hass.states[e]?.state === "on");
      r.poly.classList.toggle("lit", on(r.cfg.lights));
      r.poly.classList.toggle("motion", on(r.cfg.motion));
      const bits = [];
      const t = parseFloat(hass.states[r.cfg.temperature]?.state);
      if (!Number.isNaN(t)) bits.push(`${Math.round(t)}°`);
      const hum = parseFloat(hass.states[r.cfg.humidity]?.state);
      if (!Number.isNaN(hum)) bits.push(`${Math.round(hum)}%`);
      r.meta.textContent = bits.join(" · ");
    }

    const openNames = [];
    let watched = 0;
    for (const o of this._openings) {
      if (!o.cfg.entity) continue;
      watched++;
      const state = this._stateOf(o.cfg.entity);
      const st = hass.states[o.cfg.entity];
      const name = this._name(o.cfg.entity, o.cfg.name);
      o.g.setAttribute("class", `opening ${o.cfg.type || "door"} bound ${state}`);
      o.title.textContent = st ? `${name}: ${state === "open" ? "Open" : state === "closed" ? "Closed" : "Unavailable"} · ${since(st.last_changed)}` : `${o.cfg.entity} not found`;
      o.tag.classList.toggle("hidden", state !== "open" || o.cfg.show_tag === false);
      if (state === "open") {
        o.tag.replaceChildren(h("span", { class: "tn" }, `${name} · `), since(st.last_changed));
        openNames.push(name);
      }
    }

    let unlocked = 0;
    let locks = 0;
    let lightsOn = 0;
    let motion = 0;
    let climate = null;
    for (const d of this._devices) {
      const result = this._renderDevice(d);
      if (result.kind === "opening") {
        watched++;
        if (result.state === "open") openNames.push(this._name(d.cfg.entity, d.cfg.name));
      }
      if (result.kind === "lock") {
        locks++;
        if (result.state === "open") unlocked++;
      }
      if (result.kind === "toggle" && result.state === "on") lightsOn++;
      if ((result.kind === "motion" || result.kind === "camera") && result.state === "active") motion++;
      if (result.kind === "climate" && !climate) climate = hass.states[d.cfg.entity];
    }

    this._renderChips({ openNames, watched, locks, unlocked, lightsOn, motion, climate });
    if (!this._tabs.childElementCount) this._renderTabs();
    this._applyLayer();
  }

  _renderDevice(d) {
    const hass = this._hass;
    const st = hass.states[d.cfg.entity];
    const { kind } = this._kind(d);
    const name = this._name(d.cfg.entity, d.cfg.name);
    d.name.textContent = name;
    if (!st) {
      d.el.className = "dev missing";
      d.el.title = `${d.cfg.entity} not found`;
      if (!d.cfg.icon && !d.img) d.ico.innerHTML = iconSvg(ICON.help);
      return { kind, state: "missing" };
    }

    const a = st.attributes;
    const dc = a.device_class;
    const domain = d.cfg.entity.split(".")[0];
    let state = st.state;
    let icon = ICON.help;
    let val = "";
    let title = `${name}: ${st.state}`;
    let cls = "";

    switch (kind) {
      case "climate": {
        const action = a.hvac_action || (st.state === "off" ? "off" : "idle");
        state = action;
        cls = action === "heating" || action === "preheating" ? "heating" : action === "cooling" ? "cooling" : st.state === "off" ? "" : "idle";
        icon = cls === "heating" ? ICON.fire : cls === "cooling" ? ICON.snowflake : ICON.thermostat;
        if (a.current_temperature != null) val = `${Math.round(a.current_temperature)}°`;
        const target = a.temperature != null ? `${a.temperature}°` : a.target_temp_low != null ? `${a.target_temp_low}–${a.target_temp_high}°` : "";
        title = `${name}: ${val || "?"} now${target ? `, set to ${target}` : ""} (${st.state}${a.hvac_action ? `, ${a.hvac_action}` : ""})`;
        break;
      }
      case "camera": {
        cls = "cam";
        icon = ICON.cctv;
        const hits = this._detections(d.cfg);
        if (hits.length) {
          cls += " detect";
          state = "active";
        }
        if (d.badge) d.badge.textContent = hits.join(" · ");
        title = `${name}: ${hits.length ? hits.join(", ") : st.state}`;
        break;
      }
      case "toggle":
        cls = st.state === "on" ? "on" : "";
        if (domain === "fan") cls += " fan";
        icon = domain === "light" ? (st.state === "on" ? ICON.bulb : ICON.bulbOff) : domain === "fan" ? ICON.fan : ICON.power;
        title = `${name}: ${st.state === "on" ? "On" : "Off"}`;
        if (domain === "light" && st.state === "on" && a.brightness != null && d.cfg.show_brightness) val = `${Math.round((a.brightness / 255) * 100)}%`;
        break;
      case "lock":
        state = st.state === "locked" ? "closed" : DEAD_STATES.has(st.state) ? "dead" : "open";
        cls = state;
        icon = st.state === "locked" ? ICON.lock : ICON.lockOpen;
        title = `${name}: ${st.state}`;
        break;
      case "opening": {
        state = this._stateOf(d.cfg.entity);
        cls = state;
        const isOpen = state === "open";
        icon = dc === "window" ? (isOpen ? ICON.windowOpen : ICON.window) : dc === "garage_door" || dc === "garage" ? (isOpen ? ICON.garageOpen : ICON.garage) : isOpen ? ICON.doorOpen : ICON.door;
        title = `${name}: ${isOpen ? "Open" : "Closed"} · ${since(st.last_changed)}`;
        break;
      }
      case "motion":
        state = st.state === "on" ? "active" : "clear";
        cls = st.state === "on" ? "active" : "";
        icon = ICON.motion;
        title = `${name}: ${st.state === "on" ? "Detected" : "Clear"} · ${since(st.last_changed)}`;
        break;
      case "alarm":
        cls = st.state === "on" ? "alert" : "closed";
        icon = dc === "moisture" ? ICON.waterAlert : ICON.smoke;
        title = `${name}: ${st.state === "on" ? "ALERT" : "OK"}`;
        break;
      case "value":
        cls = "idle";
        icon = dc === "temperature" ? ICON.thermometer : dc === "humidity" ? ICON.water : ICON.help;
        val = hass.formatEntityState ? hass.formatEntityState(st) : `${st.state}${a.unit_of_measurement ? ` ${a.unit_of_measurement}` : ""}`;
        if (dc === "temperature" && !Number.isNaN(parseFloat(st.state))) val = `${Math.round(parseFloat(st.state))}°`;
        title = `${name}: ${val}`;
        break;
      case "media":
        cls = st.state === "playing" ? "on" : "";
        icon = ICON.speaker;
        break;
      default:
        cls = st.state === "on" ? "on" : "";
    }

    if (DEAD_STATES.has(st.state)) cls = "dead";
    d.el.className = `dev ${cls}${d.img ? " preview" : ""}`;
    d.el.title = title;
    if (!d.cfg.icon && !d.img) d.ico.innerHTML = iconSvg(icon);
    if (d.cfg.show_value === false) val = "";
    d.val.textContent = val;
    return { kind, state };
  }

  _renderChips({ openNames, watched, locks, unlocked, lightsOn, motion, climate }) {
    if (this._config.chips === false) {
      this._chips.replaceChildren();
      return;
    }
    const chip = (cls, icon, text, layer, title) => {
      const el = h("button", { class: `chip ${cls}`, "data-layer": layer, title: title || text });
      el.innerHTML = iconSvg(icon);
      el.append(text);
      return el;
    };
    const out = [];
    if (watched) {
      out.push(
        openNames.length
          ? chip("alert", ICON.doorOpen, `${openNames.length} open`, "doors", openNames.join(", "))
          : chip("ok", ICON.door, "All closed", "doors")
      );
    }
    if (locks) out.push(unlocked ? chip("alert", ICON.lockOpen, `${unlocked} unlocked`, "doors") : chip("ok", ICON.lock, "Locked", "doors"));
    if (climate) {
      const a = climate.attributes;
      const action = a.hvac_action;
      const cls = action === "heating" ? "heat" : action === "cooling" ? "cool" : "";
      const cur = a.current_temperature != null ? `${Math.round(a.current_temperature)}°` : "";
      const target = a.temperature != null ? ` → ${a.temperature}°` : "";
      out.push(chip(cls, cls === "heat" ? ICON.fire : cls === "cool" ? ICON.snowflake : ICON.thermostat, `${cur}${target}`, "climate"));
    }
    if (lightsOn) out.push(chip("warm", ICON.bulb, `${lightsOn} on`, "lights"));
    if (motion) out.push(chip("cool", ICON.motion, `Motion ${motion}`, "motion"));
    this._chips.replaceChildren(...out);
  }

  _refreshCameras() {
    if (!this._hass || !this._devices) return;
    for (const d of this._devices) {
      if (!d.img) continue;
      const pic = this._hass.states[d.cfg.entity]?.attributes.entity_picture;
      if (!pic) continue;
      const url = this._hass.hassUrl ? this._hass.hassUrl(pic) : pic;
      d.img.src = `${url}${url.includes("?") ? "&" : "?"}_t=${Date.now()}`;
    }
  }
}

customElements.define("home-view-card", HomeViewCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "home-view-card",
  name: "Home View",
  description: "Blueprint-style floor plan with live doors, climate, cameras and lights.",
  preview: false,
});

console.info(`%c HOME-VIEW-CARD %c ${VERSION} `, "background:#3d8bff;color:#fff;border-radius:3px 0 0 3px", "background:#121418;color:#a9dcef;border-radius:0 3px 3px 0");
