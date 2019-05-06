var tvShowApi = require('./tvshow_api');

// tvShowApi.getShowInfo(82, function(showInfo) {
//   console.log(showInfo);
// });

tvShowApi.getCastInfo(82, function(showInfo) {
  console.log(showInfo[0].character.image.medium);
  // for (var castMemberObj of showInfo) {
  //   // console.log(castMemberObj.person.name);

  // }
});
