<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio extends CI_Controller {

	public function index()
	{
		$this->load->view('menu');
		$this->load->model("procesar");
		$arr["droguerias"] = $this->procesar->consultar();
		$this->load->view('mapa',$arr);
	}

	public function ruta(){
		$this->load->view('menu');
		$this->load->model("procesar");
		$arr["droguerias"] = $this->procesar->consultar();
		$this->load->view('ruta',$arr);
	}
	public function buscar(){
		$xdrogueria=$this->input->post('xdrogueria');
		$this->load->model('procesar');
		$resultados=$this->procesar->buscar($xdrogueria);
		echo $resultados;
	}

}
