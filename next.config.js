const withImages = require('next-images');
module.exports = withImages({
   webpack(config, options) {
      return config
   }
})

module.exports = {
   env: {
      TMDB_AUTH: '1d69e8e42a1445689a9b53317cccb348',
   },
 }