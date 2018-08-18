// var config = {
//     apiKey: "AIzaSyB1sV3YvbPdUlAkg6AL6O3SyIk_tQFUPNQ",
//     authDomain: "project-one-29a01.firebaseapp.com",
//     databaseURL: "https://project-one-29a01.firebaseio.com",
//     projectId: "project-one-29a01",
//     storageBucket: "",
//     messagingSenderId: "510205582320"
// };
// firebase.initializeApp(config);

// function getTubey(event) {
//     var text = $(event.target).text();
//     var userSubmit = $("<input>");
//     userSubmit.attr("type", "text");
//     userSubmit.addClass("usertext");
//     var ytrailer = $(this).attr("data-movie");
//     var queryURL = "https://youtube.com/watch?v=" + ytrailer + "&key=AIzaSyCiLx7vHvqWnU76n3X0I03awrOaV3pbk4Q";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             console.log(response);
//             console.log(queryURL);
//             var results = response.data;

//             for (i = 0; i < results.length; i++) {
//                 ytrailer = player.videoId;

//             }
//         });

//     $("#searchButton").on("click", function (event) {
//         document.preventDefault();
//         //loads the Iframe player API code asynchronously
//         var tag = document.createElement("script");
//         tag.src = "https://www.youtube.com/player_api";
//         var firstScriptTag = document.getElementsByTagName("script")[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//         var player;

//         function onYouTubeIframeAPIReady() {
//             player = new YT.Player("youtubeDiv", {
//                 height: "390",
//                 width: "640",
//                 videoId: "",
//                 events: {
//                     "onReady": onPlayerReady,
//                     "onStateChange": onPlayerStateChange
//                 }
//             });
//         };
//         function onPlayerReady(event) {
//             event.target.playVideo();
//         }
//         var done = false;
//         function onPlayerStateChange(event) {
//             if (event.data == YT.PlayerState.PLAYING && !done) {
//                 done = true;
//             }
//         }
//         function stopVideo() {
//             player.stopVideo();
//         }
//     });
// }
// function load() {
//     $(document.body).on("click", "#searchButton", getTubey);
// };

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
  }
  
  // Search for a specified string.
  function search() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet'
    });
  
    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $('#youtubeDiv').html('<pre>' + str + '</pre>');
    });
  }

  $("#search-button").on("click", function(event) {
      event.preventDefault();
      search();
  })

