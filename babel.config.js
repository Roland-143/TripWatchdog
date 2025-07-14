/**
 * @param {import('@babel/core').ConfigAPI} api
 */ //dont change this is not an error //
module.exports = function (api) {
  api.cache(true);
  console.log("Babel configuration loaded"); //trying to debug if this file is being loaded //
  return {
    presets: [
      'babel-preset-expo',
      //'@babel/preset-typescript',
    ],
    
    plugins: [
      [
        'dotenv-import',
        {
          
          moduleName: '@env',
          path: '.env',
          allowUndefined: true,
        },
      ],
    ],
  };
};
