const VERSION = "0.8.0";

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
  play: "M8,5.14V19.14L19,12.14L8,5.14Z",
  pause: "M14,19H18V5H14M6,19H10V5H6V19Z",
  next: "M16,18H18V6H16M6,18L14.5,12L6,6V18Z",
  prev: "M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z",
  volume: "M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z",
  tv: "M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z",
  music: "M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z",
  help: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z",
};

const DEFAULT_CONFIG = {
  title: "Home",
  view_box: [55,-115,1460,1060],
  stack: {split_x:780,move:[-760,920],below:700},
  labels: [
    {text:"Main Floor",x:575,y:18},
    {text:"Basement",x:1163,y:18},
  ],
  glucose: {entity:"sensor.dexcom_glucose_value",trend:"sensor.dexcom_glucose_trend",low:70,high:180},
  weather: "weather.forecast_home",
  media: ["media_player.spotify",{entity:"media_player.bedroom_tv_2",name:"Bedroom TV"}],
  rooms: [
    {name:"Bedroom 1",rect:[77,47,330,352]},
    {name:"Closet",rect:[77,352,149,490],vertical:true},
    {name:"Bath",rect:[149,352,330,490]},
    {name:"Closet",rect:[330,95,422,149]},
    {rect:[330,47,376,95]},
    {rect:[376,47,422,95]},
    {name:"Hall",rect:[330,149,422,490],label_at:[376,420],motion:"binary_sensor.hallway1_motion",temperature:"sensor.living_room_temperature",humidity:"sensor.living_room_humidity"},
    {name:"Office",rect:[422,47,728,242],temperature:"sensor.temp_office_temperature",humidity:"sensor.temp_office_humidity"},
    {name:"Weston's Room",rect:[422,242,728,428],label_at:[575,264]},
    {name:"Closet",rect:[422,428,508,497]},
    {name:"Stairs",rect:[508,428,728,497]},
    {name:"Kitchen",rect:[77,490,355,650],label_at:[216,530]},
    {name:"Living Room",points:[[355,490],[422,490],[422,497],[728,497],[728,787],[355,787]],label_at:[620,590],temperature:"sensor.temp_livingrm_temperature",humidity:"sensor.temp_livingrm_humidity",motion:"binary_sensor.living_room_motion"},
    {name:"Dining Room",rect:[77,650,355,787],label_at:[216,628]},
    {name:"Server Room",rect:[837,47,1490,494],temperature:"sensor.temp_serverrack_temperature",humidity:"sensor.temp_serverrack_humidity"},
    {name:"Basement",rect:[837,494,1490,787]},
  ],
  walls: [[77,47,728,47],[728,47,728,787],[728,787,77,787],[77,787,77,47],[330,47,330,490],[77,352,330,352],[422,47,422,497],[422,242,728,242],[422,428,728,428],[422,497,728,497],[355,557,355,650],[77,490,330,490],[508,428,508,497],[149,352,149,490],[330,149,422,149],[330,95,422,95],[376,47,376,95],[837,47,1490,47],[1490,47,1490,787],[1490,787,837,787],[837,787,837,47],[837,494,1490,494]],
  half_walls: [],
  openings: [
    {name:"Front Door",type:"door",line:[450,787,527,787],entity:"binary_sensor.door_front_contact"},
    {name:"Patio Door",type:"door",line:[170,787,305,787]},
    {name:"Side Door",type:"door",line:[728,545,728,620]},
    {name:"Bedroom Sliding",type:"door",line:[152,47,250,47],entity:"binary_sensor.door_bedroomsliding_contact"},
    {name:"Office Window",type:"window",line:[575,47,675,47]},
    {name:"Bedroom 1 Door",line:[330,164,330,221]},
    {name:"Hall Closet Door",line:[350,149,402,149]},
    {name:"Bedroom 1 Closet Door",line:[330,55,330,87]},
    {name:"Office Closet Door",line:[422,55,422,87]},
    {name:"Bedroom 1 Closet Door",line:[90,352,136,352]},
    {name:"Bath Door",line:[330,372,330,430]},
    {name:"Office Door",type:"door",line:[422,164,422,221],entity:"binary_sensor.door_office_contact"},
    {name:"Weston's Room Door",line:[422,263,422,320]},
    {name:"Weston's Room Window",type:"window",line:[728,263,728,320]},
    {name:"Closet Door",line:[447,497,495,497]},
    {name:"Basement Door",type:"door",line:[657,497,710,497],entity:"binary_sensor.door_basement_contact"},
    {name:"Basement Door",line:[1096,494,1200,494]},
  ],
  devices: [
    {entity:"climate.living_room",name:"Thermostat",x:376,y:250},
    {entity:"camera.hallway_high_resolution_channel",name:"Hallway",x:376,y:-40,preview:true},
    {entity:"camera.westons_room_high_resolution_channel",name:"Weston's Room",detections:["binary_sensor.westons_room_baby_cry_detected","binary_sensor.westons_room_person_detected","binary_sensor.westons_room_animal_detected"],x:575,y:342,preview:true},
    {entity:"camera.backyard_high_resolution_channel",name:"Back Yard",motion:"binary_sensor.backyard_motion",detections:["binary_sensor.backyard_person_detected","binary_sensor.backyard_vehicle_detected","binary_sensor.backyard_animal_detected"],x:160,y:-38,preview:true},
    {entity:"camera.living_room_high_resolution_channel",name:"Living Room",x:630,y:710,preview:true},
    {entity:"camera.driveway_high_resolution_channel_2",name:"Front Yard",motion:"binary_sensor.driveway_motion_2",detections:["binary_sensor.driveway_person_detected","binary_sensor.driveway_vehicle_detected","binary_sensor.driveway_animal_detected"],x:160,y:874,preview:true},
    {entity:"camera.rack_01_front_mainstream",name:"Server Rack",motion:"binary_sensor.rack_01_rear_motion",x:1390,y:210,preview:true},
    {entity:"binary_sensor.hallway1_motion",x:376,y:330},
    {entity:"binary_sensor.living_room_motion",x:610,y:535},
  ],
};

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

const WEATHER_ICON = {
  "sunny": "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",
  "clear-night": "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",
  "cloudy": "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z",
  "partlycloudy": "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z",
  "partlycloudy-night": "M22,10.28C21.74,10.3 21.5,10.31 21.26,10.31C19.32,10.31 17.39,9.57 15.91,8.09C14.25,6.44 13.5,4.19 13.72,2C13.77,1.53 13.22,1 12.71,1C12.57,1 12.44,1.04 12.32,1.12C12,1.36 11.66,1.64 11.36,1.94C9.05,4.24 8.55,7.66 9.84,10.46C8.31,11.11 7.13,12.43 6.69,14.06L6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22H19A3,3 0 0,0 22,19A3,3 0 0,0 19,16C18.42,16 17.88,16.16 17.42,16.45L17.5,15.5C17.5,15.28 17.5,15.05 17.46,14.83C19.14,14.67 20.77,13.94 22.06,12.64C22.38,12.34 22.64,12 22.88,11.68C23.27,11.13 22.65,10.28 22.04,10.28M19,18A1,1 0 0,1 20,19A1,1 0 0,1 19,20H6A2,2 0 0,1 4,18A2,2 0 0,1 6,16H8.5V15.5C8.5,13.94 9.53,12.64 10.94,12.18C11.1,12.13 11.26,12.09 11.43,12.06C11.61,12.03 11.8,12 12,12C12.23,12 12.45,12.03 12.66,12.07C12.73,12.08 12.8,12.1 12.87,12.13C13,12.16 13.15,12.2 13.28,12.25C13.36,12.28 13.44,12.32 13.5,12.36C13.63,12.41 13.74,12.47 13.84,12.54C13.92,12.59 14,12.64 14.07,12.7C14.17,12.77 14.25,12.84 14.34,12.92C14.41,13 14.5,13.05 14.55,13.12C14.63,13.2 14.69,13.29 14.76,13.37C14.82,13.45 14.89,13.53 14.94,13.62C15,13.71 15.04,13.8 15.09,13.9C15.14,14 15.2,14.08 15.24,14.18C15.41,14.59 15.5,15.03 15.5,15.5V18M16.83,12.86C15.9,11.16 14.08,10 12,10H11.87C11.41,9.19 11.14,8.26 11.14,7.29C11.14,6.31 11.39,5.37 11.86,4.55C12.21,6.41 13.12,8.14 14.5,9.5C15.86,10.88 17.58,11.79 19.45,12.14C18.66,12.6 17.76,12.84 16.83,12.86Z",
  "rainy": "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59",
  "pouring": "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z",
  "snowy": "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z",
  "snowy-rainy": "M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z",
  "lightning": "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z",
  "lightning-rainy": "M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z",
  "fog": "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z",
  "windy": "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z",
  "windy-variant": "M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z",
  "hail": "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z",
  "exceptional": "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",
  "humidity": "M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",
};

const WEATHER_LABEL = {
  "clear-night": "Clear", cloudy: "Cloudy", exceptional: "Severe weather", fog: "Fog", hail: "Hail",
  lightning: "Lightning", "lightning-rainy": "Thunderstorms", partlycloudy: "Partly cloudy", pouring: "Heavy rain",
  rainy: "Rain", snowy: "Snow", "snowy-rainy": "Sleet", sunny: "Sunny", windy: "Windy", "windy-variant": "Windy",
};

const APP_NAMES = {
  "com.plexapp.android": "Plex",
  "com.netflix.ninja": "Netflix",
  "com.netflix.mediaclient": "Netflix",
  "com.google.android.youtube.tv": "YouTube",
  "com.google.android.youtube.tvkids": "YouTube Kids",
  "com.amazon.amazonvideo.livingroom": "Prime Video",
  "com.disney.disneyplus": "Disney+",
  "com.hulu.livingroomplus": "Hulu",
  "com.spotify.tv.android": "Spotify",
  "com.hbo.hbonow": "Max",
  "com.wbd.stream": "Max",
  "com.apple.atve.androidtv.appletv": "Apple TV",
  "com.peacocktv.peacockandroid": "Peacock",
  "com.cbs.ott": "Paramount+",
  "com.google.android.tvlauncher": "Home",
  "com.google.android.apps.tv.launcherx": "Home",
  "tv.twitch.android.app": "Twitch",
  "com.sling": "Sling",
  "com.google.android.youtube.tvunplugged": "YouTube TV",
  "org.jellyfin.androidtv": "Jellyfin",
  "org.xbmc.kodi": "Kodi",
};

function appName(v) {
  if (!v) return v;
  if (APP_NAMES[v]) return APP_NAMES[v];
  if (!/^[a-z0-9_]+(\.[a-z0-9_]+)+$/i.test(v)) return v;
  const skip = new Set(["com", "org", "tv", "net", "android", "app", "androidtv", "atv", "google", "apps"]);
  const part = v.split(".").find((p) => !skip.has(p.toLowerCase())) || v.split(".").pop();
  return part.charAt(0).toUpperCase() + part.slice(1);
}

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
  container: hv-card / inline-size;
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
  margin: 0; padding: 3px; border-radius: 10px; background: rgba(255,255,255,0.05);
}
.toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px 12px; margin-bottom: 12px; }
.toolbar .tabs.hidden + .chips { margin-left: 0; }
.tabs::-webkit-scrollbar { display: none; }
.tab {
  border: 0; background: none; color: var(--hv-muted); padding: 6px 12px; border-radius: 7px;
  font: inherit; font-size: 13px; cursor: pointer; white-space: nowrap; flex: none;
}
.tab.on { background: var(--hv-accent); color: #fff; }
.body { display: grid; grid-template-columns: minmax(0, 1fr); grid-template-areas: "main" "side" "log"; gap: 14px; align-items: start; }
.main { grid-area: main; min-width: 0; }
.body > .side { grid-area: side; }
.body > .log { grid-area: log; }
.plan-wrap { min-width: 0; }
.log {
  display: flex; flex-direction: column; box-sizing: border-box; max-height: 340px; padding: 10px 6px 6px;
  border-radius: 10px; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.03);
}
.log h3 { margin: 0 8px 6px; color: var(--hv-muted); font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.log ul { list-style: none; margin: 0; padding: 0; overflow-y: auto; scrollbar-width: thin; }
.log .day { padding: 10px 8px 4px; color: var(--hv-muted); font-size: 11px; font-weight: 600; }
.log .day:first-child { padding-top: 2px; }
.log .item {
  display: flex; align-items: center; gap: 10px; width: 100%; padding: 7px 8px; border: 0; border-radius: 8px;
  background: none; color: var(--hv-text); font: inherit; text-align: left; cursor: pointer;
}
.log .item:hover { background: rgba(255,255,255,0.05); }
.log .dot { display: grid; place-items: center; flex: none; width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.06); color: var(--hv-muted); }
.log .dot svg { width: 16px; height: 16px; fill: currentColor; }
.log .open .dot { color: var(--hv-open); background: rgba(255,90,95,0.14); }
.log .ok .dot { color: var(--hv-closed); background: rgba(62,207,142,0.12); }
.log .cool .dot { color: var(--hv-cool); background: rgba(90,180,255,0.12); }
.log .alert .dot { color: #fff; background: var(--hv-open); }
.log .txt { flex: 1; min-width: 0; font-size: 13px; line-height: 1.3; }
.log .when { flex: none; color: var(--hv-muted); font-size: 11px; white-space: nowrap; }
.log .empty { padding: 8px; color: var(--hv-muted); font-size: 13px; }
.side { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
.wx {
  --wx: var(--hv-muted);
  padding: 12px 14px; border-radius: 10px; cursor: pointer;
  border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.03);
}
.c-sunny { --wx: #ffc35a; }
.c-clear-night { --wx: #c7d2fe; }
.c-partlycloudy { --wx: #ffd98a; }
.c-rainy, .c-pouring, .c-snowy-rainy { --wx: #5ab4ff; }
.c-snowy, .c-hail { --wx: #e6edf2; }
.c-lightning, .c-lightning-rainy, .c-exceptional { --wx: #ffb547; }
.c-cloudy, .c-fog, .c-windy, .c-windy-variant { --wx: #a9b4bf; }
.wx-now { display: flex; align-items: center; gap: 12px; }
.wx-ico { display: flex; color: var(--wx); }
.wx-ico svg { width: 40px; height: 40px; fill: currentColor; }
.wx-main { display: flex; flex-direction: column; min-width: 0; }
.wx-temp { font-size: 28px; font-weight: 700; line-height: 1; }
.wx-cond { margin-top: 3px; color: var(--hv-muted); font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wx-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; margin-left: auto; text-align: right; }
.wx-hilo { font-size: 13px; font-weight: 600; white-space: pre; }
.wx-extra { color: var(--hv-muted); font-size: 11px; white-space: nowrap; }
.wx-days { display: grid; grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); gap: 4px; margin-top: 12px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06); }
.wx-day { display: flex; flex-direction: column; align-items: center; gap: 3px; font-size: 12px; }
.wx-dn { color: var(--hv-muted); font-size: 11px; }
.wx-dico { display: flex; color: var(--wx); }
.wx-dico svg { width: 22px; height: 22px; fill: currentColor; }
.wx-dh { font-weight: 600; }
.wx-dl { color: var(--hv-muted); }
.wx-dp { min-height: 13px; color: #5ab4ff; font-size: 10px; }
.wx.missing { opacity: 0.6; border-style: dashed; }
.gl {
  --gl: var(--hv-closed);
  padding: 12px 14px 10px; border-radius: 10px; cursor: pointer;
  border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.03);
}
.gl.high { --gl: #ffb547; }
.gl.low, .gl.urgent { --gl: var(--hv-open); border-color: rgba(255,90,95,0.45); background: rgba(255,90,95,0.08); }
.gl.urgent { animation: glpulse 1.4s ease-in-out infinite; }
.gl.stale { --gl: var(--hv-muted); }
.gl-top { display: flex; justify-content: space-between; color: var(--hv-muted); font-size: 11px; }
.gl-name { font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.gl-main { display: flex; align-items: center; gap: 10px; margin: 4px 0 6px; }
.gl-val { color: var(--gl); font-size: 40px; font-weight: 700; line-height: 1; font-variant-numeric: tabular-nums; }
.gl-side { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.gl-side > span:first-child { display: flex; align-items: baseline; gap: 6px; color: var(--hv-muted); font-size: 12px; }
.gl-arrow { color: var(--gl); font-size: 22px; font-weight: 700; line-height: 1; }
.gl-arrow:empty { display: none; }
.gl-status { color: var(--gl); font-size: 12px; font-weight: 600; text-transform: capitalize; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.gl-spark { display: block; width: 100%; height: 56px; overflow: visible; }
.gl-band { fill: rgba(62,207,142,0.08); }
.gl-lim { stroke: rgba(255,255,255,0.12); stroke-dasharray: 3 3; vector-effect: non-scaling-stroke; }
.gl-line { fill: none; stroke: var(--gl); stroke-width: 2px; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
.gl-dot { fill: var(--gl); }
.gl-axis { display: flex; justify-content: space-between; margin-top: 2px; color: var(--hv-muted); font-size: 10px; }
.chip.gl-chip { font-weight: 600; font-variant-numeric: tabular-nums; }
.chip.gl-chip.in { color: var(--hv-closed); }
.chip.gl-chip.high { color: #ffb547; }
.chip.gl-chip.low, .chip.gl-chip.urgent { color: #fff; background: var(--hv-open); border-color: var(--hv-open); }
.chip.gl-chip.stale { color: var(--hv-muted); }
@keyframes glpulse { 50% { box-shadow: 0 0 0 4px rgba(255,90,95,0.25); } }
.np {
  display: grid; grid-template-columns: 56px minmax(0, 1fr); gap: 10px 12px; padding: 12px;
  border-radius: 10px; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.03);
}
.np .art {
  display: grid; place-items: center; width: 56px; height: 56px; border-radius: 6px; cursor: pointer;
  background: #000 center / cover no-repeat; color: var(--hv-muted);
}
.np .art svg { width: 24px; height: 24px; fill: currentColor; }
.np .meta { min-width: 0; align-self: center; cursor: pointer; }
.np .t, .np .a, .np .src { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.np .t { font-size: 14px; font-weight: 600; }
.np .a { margin-top: 2px; color: var(--hv-muted); font-size: 12px; }
.np .src { margin-top: 3px; color: var(--hv-muted); font-size: 11px; }
.np.spotify .src { color: #1db954; }
.np .ctrl .pw { display: none; color: var(--hv-muted); }
.np.power .ctrl .pw { display: grid; }
.np.on .ctrl .pw, .np.playing .ctrl .pw, .np.paused .ctrl .pw, .np.idle .ctrl .pw { color: var(--hv-closed); }
.np.off .prog, .np.off .ctrl button:not(.pw), .np.off .vol { display: none; }
.np .prog { grid-column: 1 / -1; display: flex; align-items: center; gap: 8px; color: var(--hv-muted); font-size: 10px; font-variant-numeric: tabular-nums; }
.np .bar { flex: 1; height: 4px; border-radius: 2px; background: rgba(255,255,255,0.1); overflow: hidden; }
.np .bar span { display: block; height: 100%; width: 0; background: var(--hv-text); transition: width 1s linear; }
.np .ctrl { grid-column: 1 / -1; display: flex; align-items: center; gap: 4px; }
.np .ctrl button {
  display: grid; place-items: center; width: 36px; height: 36px; border: 0; border-radius: 50%;
  background: none; color: var(--hv-text); cursor: pointer;
}
.np .ctrl button:hover { background: rgba(255,255,255,0.08); }
.np .ctrl svg { width: 22px; height: 22px; fill: currentColor; }
.np .ctrl .pp { width: 40px; height: 40px; background: var(--hv-text); color: var(--hv-bg); }
.np .ctrl .pp:hover { background: #fff; }
.np .vol { display: flex; align-items: center; gap: 6px; margin-left: auto; color: var(--hv-muted); }
.np .vol svg { width: 18px; height: 18px; fill: currentColor; }
.np .vol input { width: 90px; accent-color: var(--hv-text); }
.np.idle .prog, .np.missing .prog, .np.missing .ctrl { display: none; }
.np.idle .ctrl button:not(.pp) { opacity: 0.4; }
.np.missing { opacity: 0.6; border-style: dashed; }
@container hv-card (min-width: 860px) {
  .body { grid-template-columns: minmax(0, 1fr) var(--hv-side-width, 300px); grid-template-areas: "main side" "main log"; grid-template-rows: auto 1fr; }
  .body > .log { max-height: var(--hv-log-height, 460px); }
}
@container hv-card (min-width: 1240px) {
  .body { grid-template-columns: minmax(0, 1fr) var(--hv-log-width, 300px) var(--hv-side-width, 300px); grid-template-areas: "main log side"; grid-template-rows: auto; }
  .body > .log { max-height: var(--hv-log-height, 86vh); }
}
.plan {
  position: relative; margin: 0;
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
.room-label.vertical { writing-mode: vertical-rl; transform: translate(-50%, -50%) rotate(180deg); }
.room-label .meta {
  display: block; white-space: pre-line; margin-top: 2px; color: var(--hv-text);
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
    this._events = [];
    this._seen = new Map();
    this._historyLoaded = false;
    this._glPoints = null;
    this._config = config.walls || config.rooms ? config : { ...DEFAULT_CONFIG, ...config };
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
    this._mediaTick = setInterval(() => (this._medias || []).forEach((m) => this._renderProgress(m)), 1000);
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
    clearInterval(this._mediaTick);
    this._ro?.disconnect();
    this._unsubWeather();
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
      const moved = (cfg.walls || []).filter((w) => w[0] >= split_x && w[2] >= split_x).flatMap((w) => [w[1], w[3]]);
      const bottom = Math.max(vb[1] + vb[3], ...moved.map((y) => y + my + 24));
      vb = [vb[0], vb[1], vb[2] + mx, bottom - vb[1]];
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
      if (chip?.dataset.entity) this._moreInfo(chip.dataset.entity);
      else if (chip) this._setLayer(chip.dataset.layer);
    });
    const main = h("div", { class: "main" });
    if (cfg.title) main.append(head);

    this._tabs = h("div", { class: "tabs" });
    main.append(h("div", { class: "toolbar" }, this._tabs, this._chips));

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
      const label = h("div", { class: `room-label${room.vertical ? " vertical" : ""}`, style: pos(lx, ly) }, room.name || "", meta);
      if (room.name || room.temperature || room.humidity) overlay.append(label);
      return { cfg: room, poly, meta, narrow: x2 - x1 < 130 };
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
    main.append(h("div", { class: "plan-wrap" }, plan));
    const body = h("div", { class: "body" }, main);
    const side = h("div", { class: "side" });
    this._watch = this._watchList();
    this._log = null;
    this._glucose = cfg.glucose ? this._buildGlucose() : null;
    if (this._glucose) side.append(this._glucose.el);
    this._unsubWeather();
    this._weather = cfg.weather ? this._buildWeather(cfg.weather) : null;
    if (this._weather) side.append(this._weather.el);
    this._medias = [].concat(cfg.media || []).map((m) => this._buildMedia(typeof m === "string" ? { entity: m } : m));
    for (const m of this._medias) side.append(m.el);
    if (cfg.log !== false && this._watch.size) {
      this._logList = h("ul");
      this._log = h("aside", { class: "log" }, h("h3", {}, cfg.log_title || "Activity"), this._logList);
      body.append(this._log);
      this._logKey = "";
    }
    if (side.childElementCount) body.append(side);
    card.append(body);
    root.append(card);
    this._built = true;
    if (hass) {
      this._renderTabs();
      this._update();
      this._refreshCameras();
    }
  }

  _glucoseCfg() {
    const g = this._config.glucose;
    if (!g) return null;
    const c = typeof g === "string" ? { entity: g } : { ...g };
    if (!c.trend) {
      const guess = c.entity.replace(/_value$/, "_trend");
      if (guess !== c.entity) c.trend = guess;
    }
    return c;
  }

  _glucoseInfo() {
    const c = this._glucoseCfg();
    const st = c && this._hass?.states[c.entity];
    if (!st) return null;
    const unit = st.attributes.unit_of_measurement || "mg/dL";
    const mmol = /mmol/i.test(unit);
    const low = c.low ?? (mmol ? 3.9 : 70);
    const high = c.high ?? (mmol ? 10 : 180);
    const urgent = c.urgent_low ?? (mmol ? 3.1 : 55);
    let v = parseFloat(st.state);
    let lastKnown = false;
    if (Number.isNaN(v) && this._glPoints?.length) {
      v = this._glPoints[this._glPoints.length - 1][1];
      lastKnown = true;
    }
    const seen = Date.parse(st.last_reported || st.last_updated || st.last_changed);
    const stale = lastKnown || Number.isNaN(v) || Date.now() - seen > (c.stale_minutes ?? 15) * 60000;
    const trendState = this._hass.states[c.trend]?.state || "";
    const ARROWS = {
      rising_quickly: "⇈", rising: "↑", rising_slightly: "↗", steady: "→",
      falling_slightly: "↘", falling: "↓", falling_quickly: "⇊",
    };
    let range = "in";
    let label = "In range";
    if (stale) {
      range = "stale";
      label = "No recent data";
    } else if (v <= urgent) {
      range = "urgent";
      label = "Urgent low";
    } else if (v < low) {
      range = "low";
      label = "Low";
    } else if (v > high) {
      range = "high";
      label = "High";
    }
    return {
      entity: c.entity, name: c.name || "Glucose", unit, mmol, low, high, value: v, seen, stale, range, label, lastKnown,
      text: Number.isNaN(v) ? "--" : mmol ? v.toFixed(1) : String(Math.round(v)),
      arrow: stale ? "" : ARROWS[trendState] || "",
      trend: trendState.replace(/_/g, " "),
    };
  }

  _buildGlucose() {
    const name = h("span", { class: "gl-name" });
    const age = h("span", { class: "gl-age" });
    const val = h("span", { class: "gl-val" });
    const unit = h("span", { class: "gl-unit" });
    const arrow = h("span", { class: "gl-arrow" });
    const status = h("span", { class: "gl-status" });
    const spark = s("svg", { class: "gl-spark", viewBox: "0 0 300 64", preserveAspectRatio: "none" });
    const band = s("rect", { class: "gl-band", x: 0, width: 300 });
    const lineLow = s("line", { class: "gl-lim", x1: 0, x2: 300 });
    const lineHigh = s("line", { class: "gl-lim", x1: 0, x2: 300 });
    const path = s("polyline", { class: "gl-line" });
    const dot = s("circle", { class: "gl-dot", r: 3.5 });
    spark.append(band, lineLow, lineHigh, path, dot);
    const hours = this._glucoseCfg().hours || 3;
    const el = h("section", { class: "gl" },
      h("div", { class: "gl-top" }, name, age),
      h("div", { class: "gl-main" }, val, h("span", { class: "gl-side" }, h("span", {}, arrow, unit), status)),
      spark,
      h("div", { class: "gl-axis" }, h("span", {}, `${hours}h ago`), h("span", {}, "now")));
    el.addEventListener("click", () => this._moreInfo(this._glucoseCfg().entity));
    return { el, name, age, val, unit, arrow, status, band, lineLow, lineHigh, path, dot, hours };
  }

  async _loadGlucoseHistory() {
    const c = this._glucoseCfg();
    const g = this._glucose;
    if (!this._hass.callApi) return;
    const start = new Date(Date.now() - g.hours * 3600000).toISOString();
    try {
      const data = await this._hass.callApi("GET", `history/period/${start}?filter_entity_id=${c.entity}&minimal_response&no_attributes`);
      const pts = (data?.[0] || [])
        .map((x) => [Date.parse(x.last_changed), parseFloat(x.state)])
        .filter(([, v]) => !Number.isNaN(v));
      this._glPoints = [...pts, ...(this._glPoints || [])].sort((a, b) => a[0] - b[0]);
      this._renderGlucose();
    } catch (err) {
      console.warn("home-view-card: could not load glucose history", err);
    }
  }

  _renderGlucose() {
    const g = this._glucose;
    if (!g) return;
    const info = this._glucoseInfo();
    if (!info) {
      g.el.className = "gl stale";
      g.name.textContent = "Glucose";
      g.val.textContent = "--";
      g.status.textContent = `${this._glucoseCfg().entity} not found`;
      return;
    }
    if (this._glPoints === null) {
      this._glPoints = [];
      this._loadGlucoseHistory();
    }
    const st = this._hass.states[info.entity];
    const lc = Date.parse(st.last_changed);
    const last = this._glPoints[this._glPoints.length - 1];
    if (!info.lastKnown && !Number.isNaN(info.value) && (!last || last[0] < lc)) this._glPoints.push([lc, info.value]);

    g.el.className = `gl ${info.range}`;
    g.name.textContent = info.name;
    const seenAt = info.lastKnown ? this._glPoints[this._glPoints.length - 1][0] : info.seen;
    const mins = Math.floor((Date.now() - seenAt) / 60000);
    g.age.textContent = mins < 1 ? "just now" : mins < 60 ? `${mins}m ago` : `${Math.floor(mins / 60)}h ago`;
    g.val.textContent = info.text;
    g.unit.textContent = info.unit;
    g.arrow.textContent = info.arrow;
    g.status.textContent = info.trend && !info.stale ? `${info.label} · ${info.trend}` : info.label;

    const now = Date.now();
    const from = now - g.hours * 3600000;
    const pts = this._glPoints.filter(([t]) => t >= from);
    const vals = pts.map(([, v]) => v);
    const lo = Math.min(info.low - (info.mmol ? 1 : 20), ...vals);
    const hi = Math.max(info.high + (info.mmol ? 2 : 40), ...vals);
    const y = (v) => 60 - ((v - lo) / (hi - lo)) * 56;
    const x = (t) => ((t - from) / (now - from)) * 296 + 2;
    g.band.setAttribute("y", y(info.high));
    g.band.setAttribute("height", Math.max(0, y(info.low) - y(info.high)));
    for (const [line, v] of [[g.lineLow, info.low], [g.lineHigh, info.high]]) {
      line.setAttribute("y1", y(v));
      line.setAttribute("y2", y(v));
    }
    g.path.setAttribute("points", pts.map(([t, v]) => `${x(t).toFixed(1)},${y(v).toFixed(1)}`).join(" "));
    const end = pts[pts.length - 1];
    g.dot.style.display = end ? "" : "none";
    if (end) {
      g.dot.setAttribute("cx", x(end[0]));
      g.dot.setAttribute("cy", y(end[1]));
    }
  }

  _buildWeather(entity) {
    const ico = h("span", { class: "wx-ico" });
    const temp = h("span", { class: "wx-temp" });
    const cond = h("span", { class: "wx-cond" });
    const hilo = h("span", { class: "wx-hilo" });
    const extra = h("span", { class: "wx-extra" });
    const days = h("div", { class: "wx-days" });
    const el = h("section", { class: "wx" },
      h("div", { class: "wx-now" }, ico,
        h("div", { class: "wx-main" }, temp, cond),
        h("div", { class: "wx-right" }, hilo, extra)),
      days);
    el.addEventListener("click", () => this._moreInfo(entity));
    return { entity, el, ico, temp, cond, hilo, extra, days, key: "" };
  }

  _unsubWeather() {
    if (this._wxUnsub) {
      this._wxUnsub.then((f) => f()).catch(() => {});
      this._wxUnsub = null;
    }
  }

  _subscribeWeather() {
    const w = this._weather;
    const conn = this._hass.connection;
    if (this._wxUnsub || !conn?.subscribeMessage) return;
    const type = this._config.forecast_type || "daily";
    this._wxUnsub = conn.subscribeMessage(
      (ev) => {
        this._forecast = ev.forecast || [];
        w.key = "";
        this._renderWeather();
      },
      { type: "weather/subscribe_forecast", forecast_type: type, entity_id: w.entity }
    );
    this._wxUnsub.catch((err) => console.warn("home-view-card: forecast unavailable", err));
  }

  _wxIcon(condition) {
    const night = this._hass.states["sun.sun"]?.state === "below_horizon";
    if (condition === "partlycloudy" && night) return WEATHER_ICON["partlycloudy-night"];
    if (condition === "sunny" && night) return WEATHER_ICON["clear-night"];
    return WEATHER_ICON[condition] || WEATHER_ICON.cloudy;
  }

  _renderWeather() {
    const w = this._weather;
    if (!w) return;
    const st = this._hass.states[w.entity];
    if (!st) {
      w.el.className = "wx missing";
      w.temp.textContent = "--";
      w.cond.textContent = `${w.entity} not found`;
      return;
    }
    this._subscribeWeather();
    const a = st.attributes;
    const fc = this._forecast || a.forecast || [];
    const key = `${st.state}:${a.temperature}:${a.humidity}:${a.wind_speed}:${fc.length}:${fc[0]?.datetime}:${new Date().getDate()}`;
    if (key === w.key) return;
    w.key = key;
    w.el.className = `wx c-${st.state}`;
    w.ico.innerHTML = iconSvg(this._wxIcon(st.state));
    w.temp.textContent = a.temperature != null ? `${Math.round(a.temperature)}°` : "--";
    w.cond.textContent = WEATHER_LABEL[st.state] || st.state;
    const today = fc[0];
    w.hilo.textContent = today && today.temperature != null
      ? `H ${Math.round(today.temperature)}°${today.templow != null ? `  L ${Math.round(today.templow)}°` : ""}`
      : "";
    const bits = [];
    if (a.humidity != null) bits.push(`${Math.round(a.humidity)}% hum`);
    if (a.wind_speed != null) bits.push(`${Math.round(a.wind_speed)} ${a.wind_speed_unit || ""}`.trim());
    w.extra.textContent = bits.join(" · ");
    const n = this._config.forecast_days || 5;
    const todayStr = new Date().toDateString();
    w.days.replaceChildren(...fc.slice(0, n).map((d) => {
      const date = new Date(d.datetime);
      const name = date.toDateString() === todayStr ? "Today" : date.toLocaleDateString([], { weekday: "short" });
      const ic = h("span", { class: `wx-dico c-${d.condition}` });
      ic.innerHTML = iconSvg(WEATHER_ICON[d.condition] || WEATHER_ICON.cloudy);
      const rain = d.precipitation_probability;
      return h("div", { class: "wx-day", title: WEATHER_LABEL[d.condition] || d.condition || "" },
        h("span", { class: "wx-dn" }, name), ic,
        h("span", { class: "wx-dh" }, d.temperature != null ? `${Math.round(d.temperature)}°` : ""),
        h("span", { class: "wx-dl" }, d.templow != null ? `${Math.round(d.templow)}°` : ""),
        h("span", { class: "wx-dp" }, rain ? `${Math.round(rain)}%` : ""));
    }));
    w.days.classList.toggle("hidden", !fc.length);
  }

  _buildMedia(cfg) {
    const entity = cfg.entity;
    const art = h("div", { class: "art" });
    const title = h("div", { class: "t" });
    const artist = h("div", { class: "a" });
    const src = h("div", { class: "src" });
    const meta = h("div", { class: "meta" }, title, artist, src);
    const fill = h("span");
    const pos = h("span", { class: "pos" });
    const dur = h("span", { class: "dur" });
    const prog = h("div", { class: "prog" }, pos, h("div", { class: "bar" }, fill), dur);
    const btn = (cls, icon, label) => {
      const b = h("button", { class: cls, "aria-label": label, title: label });
      b.innerHTML = iconSvg(icon);
      return b;
    };
    const power = btn("pw", ICON.power, "Power");
    const prev = btn("", ICON.prev, "Previous");
    const pp = btn("pp", ICON.play, "Play/Pause");
    const next = btn("", ICON.next, "Next");
    const vol = h("input", { type: "range", min: 0, max: 100, step: 1, "aria-label": "Volume" });
    const volIcon = h("span", { class: "vi" });
    volIcon.innerHTML = iconSvg(ICON.volume);
    const ctrl = h("div", { class: "ctrl" }, power, prev, pp, next, h("div", { class: "vol" }, volIcon, vol));
    const el = h("section", { class: "np" }, art, meta, prog, ctrl);
    const call = (service, data = {}) => {
      this._fire("haptic", "light");
      this._hass.callService("media_player", service, { entity_id: entity, ...data });
    };
    power.addEventListener("click", () => call("toggle"));
    prev.addEventListener("click", () => call("media_previous_track"));
    pp.addEventListener("click", () => call("media_play_pause"));
    next.addEventListener("click", () => call("media_next_track"));
    vol.addEventListener("change", () => call("volume_set", { volume_level: Number(vol.value) / 100 }));
    art.addEventListener("click", () => this._moreInfo(entity));
    meta.addEventListener("click", () => this._moreInfo(entity));
    return { cfg, entity, el, art, title, artist, src, fill, pos, dur, pp, power, vol, pic: undefined };
  }

  _renderMedia() {
    for (const m of this._medias || []) this._renderOneMedia(m);
  }

  _renderOneMedia(m) {
    const st = this._hass.states[m.entity];
    if (!st) {
      m.el.className = "np missing";
      m.title.textContent = "Media player not found";
      m.artist.textContent = m.entity;
      m.src.textContent = "";
      return;
    }
    const a = st.attributes;
    const active = st.state === "playing" || st.state === "paused";
    const off = st.state === "off" || st.state === "standby" || DEAD_STATES.has(st.state);
    const canPower = ((a.supported_features || 0) & (128 | 256)) !== 0;
    const spotify = /spotify/i.test(m.entity) || /spotify/i.test(a.source || "");
    m.el.className = `np ${active ? st.state : off ? "off" : "idle"}${spotify ? " spotify" : ""}${canPower ? " power" : ""}`;
    const name = m.cfg.name || a.friendly_name;
    const app = appName(a.app_name);
    const source = appName(a.source);
    m.title.textContent = off
      ? "Off"
      : active
        ? a.media_title || app || source || "Playing"
        : app || (canPower ? "On" : "Nothing playing");
    m.artist.textContent = active ? [a.media_series_title || a.media_artist, a.media_album_name].filter(Boolean).join(" · ") : "";
    const via = !off && (source || app);
    m.src.textContent = [name, via && via !== m.title.textContent ? via : null].filter(Boolean).join(" · ");
    const pic = active && a.entity_picture ? (this._hass.hassUrl ? this._hass.hassUrl(a.entity_picture) : a.entity_picture) : null;
    if (pic !== m.pic) {
      m.pic = pic;
      m.art.style.backgroundImage = pic ? `url("${pic}")` : "";
      m.art.innerHTML = pic ? "" : iconSvg(spotify || !canPower ? ICON.music : ICON.tv);
    }
    m.pp.innerHTML = iconSvg(st.state === "playing" ? ICON.pause : ICON.play);
    if (this.shadowRoot.activeElement !== m.vol && a.volume_level != null) m.vol.value = Math.round(a.volume_level * 100);
    this._renderProgress(m);
  }

  _renderProgress(m) {
    const st = m && this._hass?.states[m.entity];
    if (!st) return;
    const a = st.attributes;
    const total = a.media_duration;
    if (!total || (st.state !== "playing" && st.state !== "paused")) {
      m.fill.style.width = "0%";
      m.pos.textContent = "";
      m.dur.textContent = "";
      return;
    }
    let p = a.media_position || 0;
    if (st.state === "playing" && a.media_position_updated_at) p += (Date.now() - Date.parse(a.media_position_updated_at)) / 1000;
    p = Math.min(Math.max(p, 0), total);
    const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
    m.fill.style.width = `${(p / total) * 100}%`;
    m.pos.textContent = fmt(p);
    m.dur.textContent = fmt(total);
  }

  _watchList() {
    const cfg = this._config;
    const m = new Map();
    for (const o of cfg.openings || []) {
      if (o.entity) m.set(o.entity, { type: o.type === "window" ? "window" : "door", name: o.name });
    }
    for (const r of cfg.rooms || []) {
      for (const e of [].concat(r.motion || [])) m.set(e, { type: "motion", name: r.name, where: "in" });
    }
    for (const d of cfg.devices || []) {
      const domain = d.entity.split(".")[0];
      if (domain === "camera") {
        const name = d.name || this._hass?.states[d.entity]?.attributes.friendly_name || d.entity;
        for (const e of [].concat(d.motion || [])) m.set(e, { type: "motion", name, where: "in", camera: d.entity });
        for (const e of [].concat(d.detections || [])) m.set(e, { type: "detect", name, camera: d.entity });
      } else if (domain === "binary_sensor" && !m.has(d.entity)) {
        const dc = this._hass?.states[d.entity]?.attributes.device_class;
        if (OPENING_CLASSES.has(dc)) m.set(d.entity, { type: dc === "window" ? "window" : "door", name: d.name });
        else if (MOTION_CLASSES.has(dc)) m.set(d.entity, { type: "motion", name: d.name, where: "in" });
      }
    }
    return m;
  }

  _describe(id, state) {
    const w = this._watch.get(id);
    if (!w || DEAD_STATES.has(state)) return null;
    const on = state === "on" || state === "open";
    const name = w.name || this._hass.states[id]?.attributes.friendly_name || id;
    if (w.type === "door" || w.type === "window") {
      const open = w.type === "window" ? ICON.windowOpen : ICON.doorOpen;
      const shut = w.type === "window" ? ICON.window : ICON.door;
      return on ? { text: `${name} opened`, tone: "open", icon: open } : { text: `${name} closed`, tone: "ok", icon: shut };
    }
    if (!on) return null;
    if (w.type === "motion") return { text: `Motion ${w.where || "in"} ${name}`, tone: "cool", icon: ICON.motion, target: w.camera };
    const m = id.match(/baby_cry|person|vehicle|animal|package|face|smoke|glass_break|motion/);
    const label = m ? DETECT_LABELS[m[0]] : this._hass.states[id]?.attributes.friendly_name || "Detection";
    const text = m?.[0] === "baby_cry" ? `Baby crying in ${name}` : `${label} in ${name}`;
    return { text, tone: "alert", icon: m?.[0] === "baby_cry" ? ICON.speaker : ICON.cctv, target: w.camera };
  }

  _pushEvent(id, state, when) {
    if (!this._describe(id, state)) return false;
    if (this._events.some((e) => e.id === id && e.when === when)) return false;
    this._events.push({ id, state, when });
    return true;
  }

  _trackEvents() {
    if (!this._watch?.size) return;
    let changed = false;
    for (const id of this._watch.keys()) {
      const st = this._hass.states[id];
      if (!st) continue;
      const prev = this._seen.get(id);
      if (prev && prev.lc !== st.last_changed && prev.state !== st.state) {
        changed = this._pushEvent(id, st.state, Date.parse(st.last_changed)) || changed;
      }
      this._seen.set(id, { lc: st.last_changed, state: st.state });
    }
    if (changed) this._trimEvents();
    if (!this._historyLoaded && this._log) {
      this._historyLoaded = true;
      this._loadHistory();
    }
  }

  _trimEvents() {
    this._events.sort((a, b) => b.when - a.when);
    this._events.length = Math.min(this._events.length, this._config.log_max || 60);
  }

  async _loadHistory() {
    const hass = this._hass;
    if (!hass.callApi) return;
    const hours = this._config.log_hours || 24;
    const start = new Date(Date.now() - hours * 3600000).toISOString();
    const ids = [...this._watch.keys()].filter((id) => hass.states[id]);
    if (!ids.length) return;
    try {
      const data = await hass.callApi(
        "GET",
        `history/period/${start}?filter_entity_id=${ids.join(",")}&minimal_response&no_attributes`
      );
      for (const list of data || []) {
        const id = list[0]?.entity_id;
        let prev = list[0]?.state;
        for (const s of list.slice(1)) {
          if (s.state !== prev) this._pushEvent(id, s.state, Date.parse(s.last_changed));
          prev = s.state;
        }
      }
      this._trimEvents();
      this._renderLog();
    } catch (err) {
      console.warn("home-view-card: could not load history", err);
    }
  }

  _renderLog() {
    if (!this._log) return;
    const now = new Date();
    const key = `${this._events.length}:${this._events[0]?.when}:${Math.floor(now / 60000)}`;
    if (key === this._logKey) return;
    this._logKey = key;
    const dayName = (d) => {
      const days = Math.round((new Date(now).setHours(0, 0, 0, 0) - new Date(d).setHours(0, 0, 0, 0)) / 86400000);
      if (days === 0) return "Today";
      if (days === 1) return "Yesterday";
      return d.toLocaleDateString([], { weekday: "long", month: "short", day: "numeric" });
    };
    const when = (ms) => {
      const min = Math.floor((now - ms) / 60000);
      if (min < 1) return "just now";
      if (min < 60) return `${min}m ago`;
      return new Date(ms).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    };
    const items = [];
    let lastDay = "";
    for (const e of this._events) {
      const info = this._describe(e.id, e.state);
      if (!info) continue;
      const day = dayName(new Date(e.when));
      if (day !== lastDay) {
        items.push(h("li", { class: "day" }, day));
        lastDay = day;
      }
      const dot = h("span", { class: "dot" });
      dot.innerHTML = iconSvg(info.icon);
      const btn = h("button", { class: `item ${info.tone}`, title: new Date(e.when).toLocaleString() }, dot,
        h("span", { class: "txt" }, info.text), h("span", { class: "when" }, when(e.when)));
      btn.addEventListener("click", () => this._moreInfo(info.target || e.id));
      items.push(h("li", {}, btn));
    }
    if (!items.length) items.push(h("li", { class: "empty" }, "Nothing yet. Door, motion and camera events will show up here."));
    this._logList.replaceChildren(...items);
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
      r.meta.textContent = bits.join(r.narrow ? "\n" : " · ");
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
    this._trackEvents();
    this._renderLog();
    this._renderMedia();
    this._renderGlucose();
    this._renderWeather();
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
    const gl = this._glucoseInfo();
    if (gl) {
      const el = h("button", { class: `chip gl-chip ${gl.range}`, "data-entity": gl.entity, title: `${gl.name}: ${gl.text}` });
      el.append(`${gl.text} ${gl.arrow}`.trim());
      out.push(el);
    }
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
