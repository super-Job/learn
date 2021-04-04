export { default as file } from './file';


function random(min = 0, max = 10) {
  return Math.trunc((Math.random() * (max - min + 1)) + min);
}

function getUuid() {
  const timestamp = Date.now();

  let uuid = `${timestamp.toString(32)}`;
  new Array(random(3, 5)).fill().forEach((_, index) => {
    uuid += `-${random((index + 1) * 10000, (index + 1) * 20000).toString(32)}`;
  })
  return uuid;
}

export {
  random,
  getUuid,

}