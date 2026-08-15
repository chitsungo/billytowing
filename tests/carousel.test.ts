import assert from "node:assert/strict";
import test from "node:test";

import { getCarouselIndex } from "../app/carousel.ts";
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
