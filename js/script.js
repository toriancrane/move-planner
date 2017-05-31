
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var location = $('#street').val() + ', ' + $('#city').val();
    var formattedImage = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x600&location=' + location +'">'

    $greeting.text('So, you want to live at ' + location + '?');
    $body.append(formattedImage);
    return false;
};

$('#form-container').submit(loadData);
