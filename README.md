# normalizePoint
<b>Coding exercise to normalize geographic coordinates.</b>

<u>Problem description:</u>

Longitude values range from 0 to 180 in the Eastern Hemisphere, and 0 to -180 in the Western Hemisphere. However in certain mapping-related calculations it is possible to have longitude values that exceed 180, in either the positive or negative direction (for example 190 degrees, -750 degrees). Those numbers still represent (the longitudinal portion) of a location on the earth, but are not considered a valid value for longitude.  Likewise, Latitude values range from 0 to -90 in the Southern Hemisphere and 0 to 90 in the Northern Hemisphere.  Create a function (in whatever language you're most comfortable) that "normalizes" latitude and longitude values. The signature of the function should be:

<i>Point normalizePoint(Point p)</i>

The "Point" type must represent both a latitude and a longitude value.
Here are some examples:


Original Point -> Normalized Point<br>
normalizePoint(new Point(190, 240))  ->  Point(-170, -60)<br>
normalizePoint(new Point(-210, 120)) ->  Point(150, 60) <br>
normalizePoint(new Point(720, -10))  ->  Point(0, -10)<br>
normalizePoint(new Point(-750, 0)) -> Point(-30, 0)<br>
normalizePoint(new Point(-890, -100)) -> Point(-170, -80)<br>
normalizePoint(new Point(920, 180))   -> Point(-160, 0)<br>
