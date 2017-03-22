DataGather = {
    initialize: function() {
    },
    get_all_data: function() {
        $.getJSON(
            'http://ec2-52-87-177-200.compute-1.amazonaws.com:8000/metrics/get-gaze-per-ad',
            {
                'user': 1,
                'token':'4jg-cad0a3ac07597c9ea974',
                'gaze': 0,
            },
            function(data, text, jqXHR) {
                console.log(data);
                console.log(text);
            }
        );

    },

};

$(document).ready(function() {
    // check sessionStorage first
    var storage = sessionStorage;
    DataGather.get_all_data();

});
