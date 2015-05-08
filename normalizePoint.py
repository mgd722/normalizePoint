def normalizePoint(point):
	'''Pass point as a (lon, lat) tuple.'''
	lon, lat = point[0], point[1]

	if abs(lon) >= 180:
		while lon >= 180:
			lon -= 360
		while lon <= -180:
			lon += 360

	if abs(lat) >= 90:
		while lat >= 90:
			lat -= 180
		while lat <= -90:
			lat += 180
		lat *= -1

	return (lon, lat)
