<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Droguerias</title>
	<link href="<?php echo base_url(); ?>static/css/estilo.css" rel="stylesheet">
	<link href="<?php echo base_url ();?>static/css/bootstrap.css" rel="stylesheet">
	<script src="<?php echo base_url(); ?>static/js/jquery.js"></script>
	<script src="<?php echo base_url(); ?>static/js/micodigo.js"></script>
	<script 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyChPpLC5zuF6bKJYUb7Br2-geN5UvbxBC4&callback=initMap">
    </script>
</head>
<body>
<div id="container">
	<div align="center" >
		<h3>Conoce Nuestras Droguerias </h3><br>
		
	</div>

	
	<nav class="navbar navbar-default">
		<a href="<?php echo base_url(); ?>inicio" class="btn btn-success">inicio</a>
		<a href="<?php echo base_url(); ?>inicio/ruta" class="btn btn-success">Ruta Mas Corta</a>
	</nav>
	<div id="body">
	