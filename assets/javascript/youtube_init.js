function start() {
gapi.client.init({
    'apiKey': 'AIzaSyDhJXRi_rpiqcitHtraHZwlrXkGP8S5uA8',
  }).then(function() {
      loadAPIClientInterfaces();
  
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);