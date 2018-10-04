	<hr>
	<h4>Seleccione una Drogueria</h4>
	<select id="lstciu" class="selectpicker" data-live-search="true">
		<?php 
			foreach ($droguerias as $drogueria) {
				$arr = explode(":", $drogueria);
				echo "<option value='$arr[2]:$arr[1]'>$arr[0]</option>";
			}
				
		?>
	</select>
	<button id="cmddib" class="btn btn-success">Ubicar Drogueria</button>
	<br>
	<div id="mapa"></div>
	<div id="resultados">prueba</div>
	<input type="hidden" name="" id="url" value="<?php echo base_url(); ?>">
	</div><!--Fin division body-->
	<p class="footer">Desarrollado por: Dario Fernando Criollo Estrada<br>UDENAR</p>
</div><!--Fin division container-->
</body>
</html>