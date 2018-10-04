var map;
var imag = 'static/images/dro.png';
var aux=false;

function initMap(){
	map = new google.maps.Map(document.getElementById('mapa'),{
		center: {lat:1.205884,lng:-77.285787},
		zoom:13});
}

$(document).ready(function(){
	initMap();
	var rut = new google.maps.Polyline({
			path: {lat: 37.772, lng: -122.214},
			geodesic: true,
			strokeColor: '#00695C',
			strokeOpacity: 10.0,
			strokeWeight:5
		});

	var marcador = new google.maps.Marker({
			position: {lat: 37.772, lng: -122.214}, title: "Estoy aqui"
	});

	//evento click mapa en su completitud
	google.maps.event.addListener(map,'click', function(evt){
		rut.setMap(null);
		marcador.setMap(null);
		$("#resultados").html("<h4>coordenada seleccionada</h4>");
		$("#resultados").append("<hr>"+evt.latLng);
		var resu=evt.latLng;

		///nuevo
		var cad = $("#txtval").val();
		var arre = cad.split(":");
		var cor = new Array();
		var dist= new Array();
		var listo= new Array();
		var i=0;

		console.log("fercho"+cad);

		for (i=0;i<arre.length-2;i=i+3){
			var lat_lon = new google.maps.LatLng(arre[i+2],arre[i+1]);
			cor.push(lat_lon);
			console.log("lcococooo"+lat_lon);
			var distancia = google.maps.geometry.spherical.computeDistanceBetween(resu, lat_lon);
			dist.push(distancia);
			
		}
		var min=Math.min.apply(null, dist);
		console.log("coordenadas  loco"+dist);
		console.log("coordenadas dario loco"+min);
		//console.log("coordenadas dario loco"+cor);

		var posi="";
		var j=0;	
		for(j=0;j<dist.length;j++)
			{
			    if(dist[j]==min)

			    listo.push(cor[j]);
				
			}
			listo.push(resu);
			console.log("este es el valor dario"+listo);

				$("#resultados").html("<h4>Distancia minima</h4>");
				$("#resultados").append(min);

		var co= new Array();
		co.push(resu);
	    rut = new google.maps.Polyline({
			path: listo,
			geodesic: true,
			strokeColor: '#00695C',
			strokeOpacity: 10.0,
			strokeWeight:5
		});
		rut.setMap(map);
		marcador = new google.maps.Marker({
			position: resu, title: "Estoy aqui"
		});
		marcador.setMap(map);
		if(!aux){
			aux=true;
		}
	});

	$("#cmddib").click(function(){
		var nom = $("#lstciu option:selected").html();
		var cad = $("#lstciu").val();
		var cor = cad.split(":");
		console.log("estrada"+cor+nom);
		var lat_lon = new google.maps.LatLng(cor[0],cor[1]);
		var marcador = new google.maps.Marker({
			position: lat_lon,
			title:nom,
			icon: imag

			//icon: {
            //path: google.maps.SymbolPath.CIRCLE,
            //scale: 10
          //},

		});

		marcador.addListener('click',function(){
			var drogueria=marcador.getTitle();
			$("#resultados").html("<h4>"+drogueria+"</h4><hr>");
			$.ajax({
				url:$("#url").val()+"inicio/buscar",
				type:"post",
				data:{xdrogueria:drogueria},
				beforeSend:function(){
					$("#resultados").html("espere un momento ......");
				},
				success:function(datos){
					$("#resultados").html("<h4>"+drogueria+"</h4><hr>");
					$("#resultados").append(datos);

				},
				error:function(){
					$("#resultados").html("No se ha encontrado nada");
				},
			});
		});
		marcador.setMap(map);
	});

	$("#cmdrut").click(function(){
		
		var nom = $("#lstciu option:selected").html();
		var no="";
		var cad = $("#txtval").val();
		//alert(cad);
		var arr = cad.split(":");
		var cor = new Array();
		var i=0;
		
		for (i=0;i<arr.length-2;i=i+3){
			
			
			var lat_lon = new google.maps.LatLng(arr[i+2],arr[i+1]);
			cor.push(lat_lon);
			console.log("dariofernando"+lat_lon);
			var name=arr[i];
	
		var lat_lon = new google.maps.LatLng(arr[i+2],arr[i+1]);
		var marcador = new google.maps.Marker({
			position: lat_lon,
			title: no,
			title:"Drogueria"+name,
			icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/doctor.png',
			//icon: {
            //path: google.maps.SymbolPath.CIRCLE,
            //scale: 10
          //},
          animation: google.maps.Animation.DROP
			
		});

		 marcador.addListener('click', function() {
          infowindow.open(marker.get('map'), marker);
        });
	
		


		marcador.setMap(map);

		}

	
		var ruta = new google.maps.Polyline({
			path: cor,
			geodesic: true,
			strokeColor: '#FFFFFF',
			strokeOpacity: 12.0,
			strokeWeight:2
		});

		ruta.setMap(map);
		

		//aqui
	

	});




});

