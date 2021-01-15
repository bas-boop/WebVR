// vergeet niet terug naar 50 te zetten!!
const controls = new Controls(50);
controls.enableMovement();

// models
const kamer = new Model('assets/models/atelier/kamer.gltf');
kamer.setPosition(0, 1, -2.2);
kamer.setScale(400, 300, 400);

const kunst = new Model('assets/models/atelier/tafel.gltf');
kunst.setPosition(-0.6, 1.01, -4.75);
kunst.setScale(6, 6, 6);
kunst.setRotation(0, 0, 0);

const werkbank = new Model('assets/models/not-mine/workbench/scene.gltf');
werkbank.setPosition(-1.15, 1, -3.5);
werkbank.setScale(0.015, 0.015, 0.015);
werkbank.setRotation(0, 90, 0);

const tafel = new Model('assets/models/not-mine/table/scene.gltf');
tafel.setPosition(0.85, 1, -4.85);
tafel.setScale(0.6, 0.6, 0.6);

const stoel = new Model('assets/models/not-mine/chair/scene.gltf');
stoel.setPosition(1.05, 1.25, -4);
stoel.setScale(0.25, 0.25, 0.25);
stoel.setRotation(0, -120, 0);

const flesjes = new Model('assets/models/not-mine/bottle/scene.gltf');
flesjes.setPosition(0.55, 1.4, -4.9);
flesjes.setScale(0.001, 0.001, 0.001);
flesjes.setRotation(0, 0, 0);

const matras = new Model('assets/models/not-mine/mattress/scene.gltf');
matras.setPosition(1.40, 1.3, -2);
matras.setScale(0.01, 0.0055, 0.0075);
matras.setRotation(-65, 90, 0);

const klapstoelen = new Model('assets/models/not-mine/folding_chairs/scene.gltf');
klapstoelen.setPosition(-1, 1, 0);
klapstoelen.setScale(0.006, 0.006, 0.006);
klapstoelen.setRotation(0, 0, 0);

//verwarming
const verwarming01 = new Model('assets/models/not-mine/radiator/scene.gltf');
verwarming01.setPosition(-1.5, 1.75, -5.22);
verwarming01.setScale(0.01, 0.01, 0.01);

const verwarming02 = new Model('assets/models/not-mine/radiator/scene.gltf');
verwarming02.setPosition(-0.75, 1.75, -5.22);
verwarming02.setScale(0.01, 0.01, 0.01);

const verwarming03 = new Model('assets/models/not-mine/radiator/scene.gltf');
verwarming03.setPosition(0, 1.75, -5.22);
verwarming03.setScale(0.01, 0.01, 0.01);

const verwarming04 = new Model('assets/models/not-mine/radiator/scene.gltf');
verwarming04.setPosition(0.75, 1.75, -5.22);
verwarming04.setScale(0.01, 0.01, 0.01);

const verwarming05 = new Model('assets/models/not-mine/radiator/scene.gltf');
verwarming05.setPosition(1.5, 1.75, -5.22);
verwarming05.setScale(0.01, 0.01, 0.01);

//verf
const verf01 = new Model('assets/models/not-mine/paint_bucket/scene.gltf');
verf01.setPosition(-0.75, 1, -2.25);
verf01.setScale(0.2, 0.2, 0.2);

const verf02 = new Model('assets/models/not-mine/paint_can/scene.gltf');
verf02.setPosition(1, 1, -2);
verf02.setScale(0.05, 0.05, 0.05);
verf02.setRotation(0, 0, 0);

const verf03 = new Model('assets/models/not-mine/paint_drum/scene.gltf');
verf03.setPosition(-0.65, 1, 0.25);
verf03.setScale(0.1, 0.1, 0.1);

//pallet
const pallet01 = new Model('assets/models/not-mine/pallet/scene.gltf');
pallet01.setPosition(0.75, 1.25, 0.25);
pallet01.setScale(0.01, 0.01, 0.01);
pallet01.setRotation(-75, 55, 0);

const pallet02 = new Model('assets/models/not-mine/pallet_3/scene.gltf');
pallet02.setPosition(1, 1.55, 0.2);
pallet02.setScale(0.01, 0.01, 0.01);
pallet02.setRotation(0, 90, 0);

const pallet03 = new Model('assets/models/not-mine/pallet_2/scene.gltf');
pallet03.setPosition(1.1, 1.25, 0);
pallet03.setScale(0.01, 0.01, 0.01);
pallet03.setRotation(-85, 5, 0);

//doos
const doos01 = new Model('assets/models/not-mine/box/scene.gltf');
doos01.setPosition(1.15, 1.15, -3);
doos01.setScale(0.25, 0.25, 0.25);
doos01.setRotation(0, 0, 0);

const doos02 = new Model('assets/models/not-mine/box_2/scene.gltf');
doos02.setPosition(-1.15, 1.25, -1.5);
doos02.setScale(1, 1, 1);
doos02.setRotation(0, 90, 0);

const doos03 = new Model('assets/models/not-mine/box_3/scene.gltf');
doos03.setPosition(-1.1, 1.35, -1.5);
doos03.setScale(0.15, 0.15, 0.15);
doos03.setRotation(0, 0, 0);

//sky
const sad_frog = new Sky('assets/images/sampleImage.jpg');

//lamp
const lamp = new Light();
lamp.setPosition(0, 1.5, -2.5);

// listen for an event
kunst.addEventListener('click', () => console.log('ik snap niet hoe dit werkt'));