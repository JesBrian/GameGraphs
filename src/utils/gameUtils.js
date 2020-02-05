
const getImgRes = (game, imgs) => {
  let imgsPath = {};
  
  imgs.forEach(key => {
    imgsPath[key] = require(`../assets/games/${game}/img/${key}.png`);
  });
  
  return imgsPath;
};

export {
  getImgRes
};
