import assert from "node:assert/strict";
import test from "node:test";

import { getCarouselIndex, getSwipeDirection } from "../app/carousel.ts";
import { heroSlides } from "../app/data.ts";

test("hero carousel provides five complete message slots", () => {
  assert.equal(heroSlides.length, 5);
  for (const slide of heroSlides) {
    assert.ok(slide.eyebrow.trim());
    assert.ok(slide.title.trim());
    assert.ok(slide.body.trim());
    assert.ok(slide.image.src.trim());
  }
});

test("carousel navigation advances and wraps in both directions", () => {
  assert.equal(getCarouselIndex(0, 1, 4), 1);
  assert.equal(getCarouselIndex(3, 1, 4), 0);
  assert.equal(getCarouselIndex(0, -1, 4), 3);
  assert.equal(getCarouselIndex(1, -1, 4), 0);
});

test("carousel navigation remains correct after rapid repeated taps", () => {
  let active = 0;
  for (let tap = 0; tap < 11; tap += 1) {
    active = getCarouselIndex(active, 1, 4);
  }
  assert.equal(active, 3);
});

test("carousel navigation rejects an empty slide set", () => {
  assert.throws(() => getCarouselIndex(0, 1, 0), RangeError);
});

test("horizontal carousel swipes move in the expected direction", () => {
  assert.equal(
    getSwipeDirection({ x: 280, y: 300, time: 0 }, { x: 190, y: 306, time: 420 }),
    1,
  );
  assert.equal(
    getSwipeDirection({ x: 100, y: 300, time: 0 }, { x: 190, y: 294, time: 420 }),
    -1,
  );
});

test("short taps and vertical scrolling do not move the carousel", () => {
  assert.equal(
    getSwipeDirection({ x: 200, y: 300, time: 0 }, { x: 214, y: 304, time: 100 }),
    0,
  );
  assert.equal(
    getSwipeDirection({ x: 200, y: 220, time: 0 }, { x: 225, y: 340, time: 260 }),
    0,
  );
});

test("a quick deliberate flick changes slides", () => {
  assert.equal(
    getSwipeDirection({ x: 220, y: 300, time: 0 }, { x: 187, y: 303, time: 180 }),
    1,
  );
});
