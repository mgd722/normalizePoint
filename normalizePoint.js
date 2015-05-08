// Pass point as [lon, lat] array.
function normalizePoint(point) {
    var lon = point[0];
    var lat = point[1];
    
    if (Math.abs(lon) >= 180) {
        while (lon >= 180) {
            lon -= 360;
        }
        while (lon <= -180) {
            lon += 360;
        }
    }

    if (Math.abs(lat) >= 90) {
        while (lat >= 90) {
            lat -= 180;
        }
        while (lat <= -90) {
            lat += 180;
        }
        if (lat !== 0) {
            lat *= -1;
        }
    }
    
    return [lon, lat];
}
