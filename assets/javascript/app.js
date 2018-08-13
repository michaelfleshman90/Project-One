<script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>

var config = {
    apiKey: "AIzaSyB1sV3YvbPdUlAkg6AL6O3SyIk_tQFUPNQ",
    authDomain: "project-one-29a01.firebaseapp.com",
    databaseURL: "https://project-one-29a01.firebaseio.com",
    projectId: "project-one-29a01",
    storageBucket: "",
    messagingSenderId: "510205582320"
};
firebase.initializeApp(config);

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

function getTubey(event) {
    
    

    $("#searchButton").on("click", function () {
        document.preventDefault();
        //loads the Iframe player API code asynchronously
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player("youtubeDiv", {
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
        var done = false;
        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                done = true;
            }
        }
        function stopVideo() {
            player.stopVideo();
        }
        
        
        var queryURL = "https://youtube.com/watch?v=" + ytrailer + "&key=API_key";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                console.log(queryURL);
                var results = response.data;

                for (i=0; i<results.length; i++) {
                    results = player.videoId;

                }
            });
    });
}
