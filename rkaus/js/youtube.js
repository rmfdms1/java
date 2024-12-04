var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  new YT.Player('player', {
    videoId: 's-fW1DpUdPI',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 's-fW1DpUdPI'
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
      onError: function (event) {
        if (event.data === 100 || event.data === 101 || event.data === 150) {
          event.target.loadVideoById('dQw4w9WgXcQ', 0, "auto");
        }
      }
    }
  });
}