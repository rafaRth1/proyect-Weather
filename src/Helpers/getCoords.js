(function () {
   navigator.geolocation.getCurrentPosition(function (position) {
      localStorage.setItem(
         'coords',
         JSON.stringify({
            lat: position.coords.latitude,
            long: position.coords.longitude,
         })
      );
   });
})();
