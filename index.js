function distanceFromHqInBlocks(blocks) {
  if (blocks < 42) {
    return -blocks + 42;
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

  }
}
