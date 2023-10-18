// window.onload = function() {
//     let map;

//     function initMap() {
//         map = new google.maps.Map(document.getElementById("map"), {
//             center: { lat: -28.64877, lng: -56.01908 },
//             zoom: 12,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         });

//         function addMarker(lat, long, icon, content) {
//             let latlng = { "lat": lat, lng: "long"};
//             let marker = new google.maps.MarkerLibrary({
//                 position: latlng,
//                 map: map,
//                 icon: icon
//             });

//             let infoWindow = new google.maps.InfoWindow({
//                 content: content,
//                 maxWidth: 200,
//                 pixelOffset: new google.maps.Size(0, 20)
//             });

//             infoWindow.open(map, marker);
//         }
//     }

//     initMap();
//     addMarker(-28.64877, -56.01908, "", "Meu endereço personalizado");
// };

