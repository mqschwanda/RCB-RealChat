Template.map.rendered = function () {
    this.autorun(function () {
        if (Mapbox.loaded()) {
            L.mapbox.accessToken = 'pk.eyJ1IjoiaGFwcGVsajEiLCJhIjoiY2l4eGR4Y3NpMDAyejMybG0xYWtqdjQwNCJ9.vuXjCa1yFa51nwIr_4l2XQ';
            var map = L.mapbox.map('map', 'mapbox.light');
        }
    });
};
