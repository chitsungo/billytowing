export function getCarouselIndex(current: number, direction: number, count: number) {
  if (!Number.isInteger(count) || count <= 0) {
    throw new RangeError("Carousel slide count must be a positive integer");
  }

  const next = (current + direction) % count;
  return next < 0 ? next + count : next;
}
