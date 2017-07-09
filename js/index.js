var test = {"stream":{
  "_id":25284123952,
  "game":"League of Legends",
  "viewers":25006,
  "video_height":1080,
  "average_fps":60,
  "delay":0,
  "created_at":"2017-05-15T11:39:55Z",
  "is_playlist":false,
  "stream_type":"live",
  "preview":{
    "small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_imaqtpie-80x45.jpg",
    "medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_imaqtpie-320x180.jpg",
    "large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_imaqtpie-640x360.jpg",
    "template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_imaqtpie-{width}x{height}.jpg"},
  "channel":{
    "mature":false,
    "partner":true,
    "status":"road to rank one",
    "broadcaster_language":"en",
    "display_name":"imaqtpie",
    "game":"League of Legends",
    "language":"en",
    "_id":24991333,
    "name":"imaqtpie",
    "created_at":"2011-09-22T13:10:14Z",
    "updated_at":"2017-05-15T14:34:58Z",
    "delay":null,
    "logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-300x300.jpeg",
    "banner":null,
    "video_banner":null,
    "background":null,
    "profile_banner":null,
    "profile_banner_background_color":"",
    "url":"https://www.twitch.tv/imaqtpie",
    "views":208059230,
    "followers":1686935,
    "_links":{
      "self":"https://api.twitch.tv/kraken/channels/imaqtpie",
      "follows":"https://api.twitch.tv/kraken/channels/imaqtpie/follows",
      "commercial":"https://api.twitch.tv/kraken/channels/imaqtpie/commercial",
      "stream_key":"https://api.twitch.tv/kraken/channels/imaqtpie/stream_key",
      "chat":"https://api.twitch.tv/kraken/chat/imaqtpie",
      "features":"https://api.twitch.tv/kraken/channels/imaqtpie/features",
      "subscriptions":"https://api.twitch.tv/kraken/channels/imaqtpie/subscriptions",
      "editors":"https://api.twitch.tv/kraken/channels/imaqtpie/editors",
      "teams":"https://api.twitch.tv/kraken/channels/imaqtpie/teams",
      "videos":"https://api.twitch.tv/kraken/channels/imaqtpie/videos"}},
  "_links":{
    "self":"https://api.twitch.tv/kraken/streams/imaqtpie"}},
            "_links":{
              "self":"https://api.twitch.tv/kraken/streams/imaqtpie",
              "channel":"https://api.twitch.tv/kraken/channels/imaqtpie"}};

var testdata = {"stream":"null","_links":{"self":"https://api.twitch.tv/kraken/streams/imaqtpie","channel":"https://api.twitch.tv/kraken/channels/imaqtpie"}}



var streamers = [
  "imaqtpie",
  "hail9",
  "voyboy",
  "boxbox",
  "c9sneaky",
  "freecodecamp",
  "brunofin",
  "bunnyfufuu",
  "tsm_dyrus",
  "redmercylol",
  "iwilldominate",
  "rossboomsocks",
  "aphromoo",
  "doublelift",
  "pobelter",
  "streamerhouse"
];



  var logo;
  var name;
  var streamURL;
  var status;
  var statusText;
  var game;
  var profileBanner;

  var backupLogo;
  var backupName;
  var backupStreamURL;
  var backupstatus;
  var backupGame;




streamers.forEach(function (channel) {
  var url = "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/" + channel;
  $.getJSON(url, 
        function (Object){
    
    
    switch (!Object.stream) {
      case true:
        offlineStreamers (channel);
        break;
      case false:
      default:
        logo = Object.stream.channel.logo;
        name = Object.stream.channel.display_name;
        streamURL= Object.stream.channel.url;
        status = Object.stream.channel.status;
        game = Object.stream.channel.game;
        profileBanner = Object.stream.channel.profile_banner;
        statusText = "ONLINE"; 
        
        $("#content").append(
        '<div class="stream_online"><div class="icons_and_statuses"><img class="stream_logos online" src="' + logo +'"><div class="status_indicator online"></div><span class="status_text josefin">'+ statusText + '</span></div><a href= "' + streamURL + '" target="_blank"><div class="stream_descriptions online josefin"><div class="to_channel"> to channel...</div><h2>' + name + '&nbsp;&nbsp;</h2><h4 class="game">&nbsp;&nbsp;&nbsp;' + game + '&nbsp;&nbsp;&nbsp;</h4><p>' + status + '...</p></div></a></div>'
      )
        $(".stream_descriptions:hover").css('background-image', 'url(' + profileBanner + ')');



    }
  })})

function offlineStreamers (x) {

  var backupurl= "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/" + x;
  $.getJSON(backupurl, 
            function (backupData) {
    backupLogo = backupData["logo"]
    backupName = backupData["display_name"];
    backupStreamURL= backupData["url"];
    backupStatus = backupData["status"];
    backupGame = backupData["game"];
    profileBanner = backupData["profile_banner"]
    statusText = "OFFLINE";

    if (backupData["error"]){
      backupName = "Unknown";
      backupStatus = "This streamer has either closed their account or never existed...";
      backupLogo = "https://image.freepik.com/free-icon/sad-face_318-32735.jpg";
      game = "NONE"
      statusText = "OFFLINE";
    }
    
    $("#content").append(
    '<div class="stream_offline"><div class="icons_and_statuses"><img class="stream_logos offline" src="' + backupLogo +'"><div class="status_indicator offline"></div><span class="status_text josefin">'+ statusText + '</span></div><a href= "' + backupStreamURL + '" target="_blank"><div class="stream_descriptions offline josefin"><div class="to_channel"> to channel...</div><h2>' + backupName + '&nbsp;&nbsp;</h2><h4 class="game">&nbsp;&nbsp;&nbsp;' + backupGame + '&nbsp;&nbsp;&nbsp;</h4><p>' + backupStatus + '...</p></div></a></div>'
  )

    $(".stream_descriptions:hover").css('background-image', 'url(' + profileBanner + ')');
    
  })}


$(".filters").append('<div class="geo filter" id="filter_all"> ALL<div class="filter_indicators all" style="background-color: #FF5733"></div></div>');
$(".filters").append('<div class="geo filter" id="filter_online"> ONLINE<div class="filter_indicators online" style="background-color: #43A047"></div></div>');
$(".filters").append('<div class="geo filter" id="filter_offline"> OFFLINE<div class="filter_indicators offline" style="background-color: #78909C"></div></div>');

$("#filter_all").click(function(){
  $(".stream_offline").show(200, function showNext() {
    $(this).next(".stream_offline").show(200, setTimeout(showNext, 200));});
  $(".stream_online").show(200, function showNext() {
    $(this).next(".stream_online").show(200, setTimeout(showNext, 200));});
})

$("#filter_online").click(function(){
  $(".stream_offline").hide(200, function hideNext() {
    $(this).next(".stream_offline").hide(200, setTimeout(hideNext, 200));});
  $(".stream_online").show(200, function showNext() {
    $(this).next(".stream_online").show(200, setTimeout(showNext, 200));});
})

$("#filter_offline").click(function(){
  
  $(".stream_online").hide(200, function hideNext() {
    $(this).next(".stream_online").hide(200, setTimeout(hideNext, 200));});
  $(".stream_offline").show(200, function showNext() {
    $(this).next(".stream_offline").show(200, setTimeout(showNext, 200));});
})