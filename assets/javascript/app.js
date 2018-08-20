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
function awesome(e, t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{.*?}\}\}/g, function(e,r){return t[n][r]})}return res}
// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
  }
function onYouTubeIframeAPIReady() {
player = new YT.Player("#youtubeDiv", {
    height: "390",
    width: "640",
    videoId: "",
    events: {
        "onReady": onPlayerReady,
        "onStateChange": onPlayerStateChange
    }
});
};
function onPlayerReady(event) {
    event.target.playVideo();
}
  // Search for a specified string.
function search() {
    var query = encodeURIComponent($('#query').val() + "official trailer");
    var request = gapi.client.youtube.search.list({
        q: query,
        part: 'snippet',
        type: 'video',
        maxResults: 1,
        order: "viewCount"
    });
    request.execute(function(response) {
        var results = response.result;
        $.get("youtube/item", function(data) {
            $("#youtubeDiv").append(awesome(data, [{ "videoId":results.items.id.videoId}]));
        })
        $.get("youtube/title", function(data) {
            $("#trailerTitleDiv").append(awesome(data, [{ "title":results.items.snippet.title, "videoId":results.items.id.videoId}]));
        })
        var str = JSON.stringify(results);
        console.log(results);
        //var ytObj = JSON.parse(response.result);
        //console.log(ytObj);
        //$('#youtubeDiv').html('<pre>' + str + '</pre>');
        //$('#youtubeDiv').html('<pre>' + ytObj + '</pre>');
    });
};
$("#search-button").on("click", function(event) {
    event.preventDefault();
    search();
});