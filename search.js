// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    
    gapi.client.setApiKey('AIzaSyAIorEJxO3GGHDQt_LZTv142xiVWlMqs-E');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet', 
        channelId: 'UCCqEeDAUf4Mg0GgEN658tkA' , 
        q: 'game' ,
        maxResults: 1
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);

    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    document.getElementById("demo").innerHTML = response.items[0].snippet.title;
   
   
   
    var count = Object.keys(response).length;

    console.log("response items [0] snippit title: "+response.items[0].snippet.title);

    console.log("response result: "+response.result);

    console.log("response items: "+response.items[0].id.videoId);

    console.log("count: "+count);

    console.log("Object keys response: "+Object.keys(response))

    console.log("OK items [0]: "+Object.keys(response.items[0]))

    console.log("OK items [0].id: "+Object.keys(response.items[0].id))

    console.log("OK items [0].id.kind: "+Object.keys(response.items[0].id.kind))

    console.log("OK items [0].id.videoId: "+Object.keys(response.items[0].id.videoId))

    console.log("OK items: "+Object.keys(response.items))

  


}