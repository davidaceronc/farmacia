<?php 
	class Procesar extends CI_Model{
		function __construct(){
			parent::__construct();
		}
		function consultar(){
		  $xml = simplexml_load_file(base_url() . "static/datos/datos.xml");
		  $arr = array();
		  foreach ($xml->drogueria as $drogueria) {
		  	 array_push($arr, $drogueria->nombre . ":" . $drogueria->longitud . ":" . $drogueria->latitud);
		  }
		  return $arr;
		}

		function buscar($xdrogueria){
			$xml=simplexml_load_file(base_url() . "static/datos/datos.xml");
			$imagenes="";
			foreach ($xml->drogueria as $drogueria) {
				if ($drogueria->nombre==$xdrogueria) {
					$imagenes=$drogueria->descripcion;
					$c=count($drogueria->imagenes->imagen);
					if ($c>0) {
						foreach ($drogueria->imagenes->imagen as $key ){
						$imagenes=$imagenes. "<img src='".base_url().$key."'><br>";
					
					}
					}	
				}
			}
			return $imagenes; 	
		}
	}


?>