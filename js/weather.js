$(document).ready(function() {
    location();
    var Cdegree = $('#cel');
    var Fdegree = $('#far');
    var units;
    var setUnit;
    var temperature;

    $(function() {
        var now = moment();
        $('#time').append(now.format('hh:mm A'));
    });

    function location() {
        $.get("http://ip-api.com/json/?callback=?",
            function(location) {
                $("#city").append(location.city + ", ").append(location.countryCode);
                weather(location.lat, location.lon);
            }, "jsonp");
    }

    function weather(lat, lon) {
        units = "imperial";
        setUnit = " °F";
        //set api url
        var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=' + units + '&APPID=fea742e995c5e1d11e13c600da34d5b1';

        $.get(weatherUrl, function(weather) {
            //tempicon
            $("#icon").append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png' />");
            //temp
            temperature = weather.main.temp.toFixed(0);
            $("#temp").append(temperature + setUnit);
            //condition
            $("#condition").append(weather.weather[0].description);
        }, "jsonp");
    }
    Fdegree.click(function() {
        setUnit = " °F";
        $("#temp").text(temperature + setUnit);
    });
    Cdegree.click(function() {
        celTemp = (temperature - 32) / (9 / 5);
        setUnit = " °C";
        $("#temp").text(celTemp.toFixed(0) + setUnit);
    });

});