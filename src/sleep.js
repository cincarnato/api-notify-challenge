const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomSleep = (max) => sleep(Math.random() * max);

export default sleep;
export { sleep, randomSleep };
