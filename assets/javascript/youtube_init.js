function start() {
gapi.client.init({
    'apiKey': 'AIzaSyDhJXRi_rpiqcitHtraHZwlrXkGP8S5uA8',
  }).then(function() {
      gapi.client.load('youtube','v3', function() {
          handleAPILoaded();
      })
  
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};

gapi.load('client', start);