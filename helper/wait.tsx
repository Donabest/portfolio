function wait(speed: number) {
  return new Promise((res) => setTimeout(res, speed));
}

export default wait;
