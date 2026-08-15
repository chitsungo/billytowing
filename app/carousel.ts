export function getCarouselIndex(current: number, direction: number, count: number) {
  if (!Number.isInteger(count) || count <= 0) {
    throw new RangeError("Carousel slide count must be a positive integer");
  }

  const next = (current + direction) % count;
  return next < 0 ? next + count : next;
}

type SwipePoint = {
  x: number;
  y: number;
  time: number;
};

export function getSwipeDirection(start: SwipePoint, end: SwipePoint): -1 | 0 | 1 {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;
  const elapsed = Math.max(end.time - start.time, 1);
  const distance = Math.abs(deltaX);
  const isHorizontal = distance > Math.abs(deltaY) * 1.25;
  const isDeliberate = distance >= 44;
  const isQuickFlick = elapsed <= 350 && distance >= 28;

  if (!isHorizontal || (!isDeliberate && !isQuickFlick)) return 0;
  return deltaX < 0 ? 1 : -1;
}
