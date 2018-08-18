//var config = {
    //apiKey: "AIzaSyB1sV3YvbPdUlAkg6AL6O3SyIk_tQFUPNQ",
    //authDomain: "project-one-29a01.firebaseapp.com",
    //databaseURL: "https://project-one-29a01.firebaseio.com",
    //projectId: "project-one-29a01",
    //storageBucket: "",
    //messagingSenderId: "510205582320"
//};
//firebase.initializeApp(config);
//function googleApiClientReady() {
    //gapi.client.setApiKey("AIzaSyCiLx7vHvqWnU76n3X0I03awrOaV3pbk4Q");
    //gapi.client.load("youtube", "v3", function() {

    //});
//}
//function getTubey(event) {
    //var text = $(event.target).val();
    //var queryURL = "https://www.googleapis.com/youtube/v3/videos?id=" + text + "&key=&fields=items(id,snippet/(channelId,title,categoryId),statistics)&part=snippet,statistics";
    //$.ajax({
        //url: queryURL,
        //method: "GET"
    //}).then(function (response) {
        //console.log(response);
        //console.log(queryURL);
        //var results = response.data;
        //console.log(results);
        //for (i = 0; i < results.length; i++) {
            //var listDiv = $("<div>");
            //listDiv.attr("src", results);
        //}
    //});
    //document.preventDefault();
    //loads the Iframe player API code asynchronously
    //var tag = document.createElement("script");
    //tag.src = "https://www.youtube.com/player_api";
    //var firstScriptTag = document.getElementsByTagName("script")[0];
    //firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //var player;
    //function onYouTubeIframeAPIReady() {
        //player = new YT.Player("youtubeDiv", {
            //height: "390",
           // width: "640",
            //videoId: "",
            //events: {
                //"onReady": onPlayerReady,
                //"onStateChange": onPlayerStateChange
            //}
        //});
    //};
function handleAPILoaded() {
    $("#search-button").attr("disabled", false);
};
function search() {
    var q = $("#query").val();
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });
        request.execute(function (response) {
        var str = JSON.stringify(response.result);
        $("#youtubeDiv").html("<pre>" + str + "</pre>");
});
}
$("#search-button").on("click", function(response) {
    event.preventDefault();
    search();
})
//function onPlayerReady(event) {
    //event.target.playVideo();
//}
//var done = false;
//function onPlayerStateChange(event) {
  //  if (event.data == YT.PlayerState.PLAYING && !done) {
    //    done = true;
    //}
//}
//function stopVideo() {
  //  player.stopVideo();
//}
//function load() {
    //$("#searchButton").on("click", getTubey);
    //$('#myform').submit(function (event) {
        //event.preventDefault();
    //});

    //var userSubmit = $("#userSearch").val();

//};
