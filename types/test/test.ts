import Hydra from '../';

// To run these tests from the project root, use `npx tsc --noemit -p types/test/tsconfig.json`

// Test constructor
const hydra = new Hydra({
    canvas: document.createElement('canvas'),
    width: 800,
    height: 600
});

// Test chaining methods
hydra.osc(10, 0.1, 0.8)
    .rotate(0.5, 0.1)
    .kaleid(3)
    .out(0);

// Test properties
const fps: number = hydra.synth.fps;
const width: number = hydra.synth.width;

// Test utility methods
hydra.setResolution(1024, 768);
hydra.render();
hydra.loop();
hydra.stop();

// Test source generators
hydra.noise(0.5)
    .brightness(0.5)
    .contrast(1.2)
    .out();

// Test blend operations
hydra.osc().blend(hydra.noise(), 0.5).out();

// Test modulate operations
hydra.osc().modulateRotate(hydra.noise(), 0.5).out();