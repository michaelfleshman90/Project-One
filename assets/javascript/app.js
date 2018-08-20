
// function onYouTubeIframeAPIReady(Id) {

//     player = new YT.Player("#youtubeDiv", {
//         height: "390",
//         width: "640",
//         videoId: Id,
//         events: {
//             "onReady": onPlayerReady,
//             "onStateChange": onPlayerStateChange
//         }
//     });
// };
// function onPlayerReady(event) {
//     event.target.playVideo();
// }
// var done = false;
// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         done = true;
//     }
// }
// function stopVideo() {
//     player.stopVideo();
// }

function search() {
    var query = encodeURIComponent($('#query').val());
    var request = gapi.client.youtube.search.list({
        q: query,
        part: 'snippet',
        type: 'video',
        maxResults: 1,
        order: "viewCount"
    });
    request.execute(function (response) {
        var results = response.items[0].id.videoId;
        
        onYouTubeIframeAPIReady(results);
        
    });
    $("#search-button").on("click", function (event) {
        event.preventDefault();
        search();
        onYouTubeIframeAPIReady();
    })
};
$("movieBtn").on("click", function(event) {
    event.preventDefault();

});

$("castBtn").on("click", function(event) {
    event.preventDefault();

});