module.exports = function reverse (n) {
  let str = n.toString();
  let z = '';
  for(let i = str.length - 1; i >=0; i--) {
      z+=str[i];
      res = parseInt(z);
  }
  return res;
}
