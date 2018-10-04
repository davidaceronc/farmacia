	<hr>
	<h4>Droguerias San Juan de Pasto</h4>
	<h6>Selecciona Nuestras Droguerias Disponibles</h6>
	<?php 
		$cad = "";
		foreach ($droguerias as $drogueria) {
			$cad = $cad . $drogueria . ":";			
		}
		//echo "dariof".$cad;
	?>
	<button id="cmdrut" class="btn btn-success">Droguerias Disponibles</button><br>
	<input type="hidden" value="<?php echo $cad; ?>" id="txtval">
	<br>
	<div id="mapa"></div>
	<div id="resultados">prueba</div>
	</div class="jumbotron"><!--Fin division body-->
	<p class="footer">Desarrollado por: Dario Criollo Estrada<br>UDENAR</p>
</div><!--Fin division container-->
</body>
</html>