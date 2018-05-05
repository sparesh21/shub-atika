// ======Ready Function======
$(function() {
	mapinit();
});
// map
function mapinit() {
	var mapCanvas = document.getElementById("g_map");
	var myCenter = new google.maps.LatLng(19.2837514,72.8776963);
	var mapOptions = {
		center: myCenter,
		zoom: 80
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
		position: myCenter,
		title: "Atika",
		icon: ""
	});
	marker.setMap(map);
}