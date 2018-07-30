function distanceFromHqInBlocks(blocks) {
  if (blocks < 42) {
    return 42 - blocks;
  }
  else {
    return blocks - 42;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, finish) {
  if (start > finish) {
    return (start - finish) * 264;
  }
  else {
    return (finish - start) * 264;
  }
}
