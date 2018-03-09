import { Component, OnInit } from '@angular/core';
import { EspectacleService } from './espectacle.service';

declare var jquery: any;
declare var $: any;

@Component({
	selector: 'app-espectacles',
	templateUrl: './espectacles.component.html',
	styleUrls: ['./espectacles.component.css'],
	providers: [EspectacleService]

})
export class EspectaclesComponent implements OnInit {

	constructor(private service: EspectacleService) {

		$(document).ready(function () {

			$(document).on("mouseenter", ".foto", function() {


				//$(this).children(".titol-o").hide();
				$(this).children(".botons").removeClass("d-none");
				$(this).children(".imatge").css("opacity","0.5");
				
			});

			 $(document).on("mouseleave", ".foto", function() {


			 	//$(".titol-o").show();
				 $(".botons").addClass("d-none");
				 $(this).children(".imatge").css("opacity","1");
				
			 });

			

			$(".botons").hide();
			$(".m-tipus").hide();
			$("#formulari-tipus").hide();

			$(".m-genere").hide();
			$("#formulari-genere").hide();

			$(".m-edat").hide();
			$("#formulari-edat").hide();

			$(".p-tipus").click(function () {

				if ($("#formulari-tipus").is(":visible")) {

					$(".m-tipus").hide();
					$(".add-tipus").show();
					$("#formulari-tipus").slideUp();


				} else {

					$(".add-tipus").hide();
					$(".m-tipus").show();
					$("#formulari-tipus").slideDown();


				}

				$(".m-genere, .m-edat, #formulari-genere, #formulari-edat").hide();
				$(".add-genere, .add-edat").show();
			});
			$(".p-genere").click(function () {

				if ($("#formulari-genere").is(":visible")) {

					$(".m-genere").hide();
					$(".add-genere").show();
					$("#formulari-genere").slideUp();


				} else {

					$(".add-genere").hide();
					$(".m-genere").show();
					$("#formulari-genere").slideDown();


				}

				$(".m-tipus, .m-edat, #formulari-tipus, #formulari-edat").hide();
				$(".add-tipus, .add-edat").show();
			});

			$(".p-edat").click(function () {

				if ($("#formulari-edat").is(":visible")) {

					$(".m-edat").hide();
					$(".add-edat").show();
					$("#formulari-edat").slideUp();


				} else {

					$(".add-edat").hide();
					$(".m-edat").show();
					$("#formulari-edat").slideDown();


				}

				$(".m-tipus, .m-genere,  #formulari-tipus, #formulari-genere").hide();
				$(".add-tipus, .add-genere").show();
			});




			var espectacle = [];




			$("#genereForm").change(function () {
				var gen = $("input[name=genereCheck]:checked").val();

				$(".obra").removeClass('d-inline-block');
				$(".obra").hide();
				$(".f-obra").remove();
				$(".borrar-f").removeClass('d-none');
				$(".borrar-f").addClass('d-inline-block');

				var val = [];

				for (var n = 0; n < espectacle.length; n++) {
					espectacle[n] = false;

				}



				$("input[name=genereCheck]:checked").each(function (i) {
					val[i] = $(this).val();

					//alert(val[i]);


					$.getJSON("http://www.f.dawman.info/rest/public/genere/" + val[i], function (result) {


						$.each(result, function (i, field) {



							if (espectacle[field[0].codi] !== true) {

								espectacle[field[0].codi] = true;

								$(".aqui").append("<div class='d-inline-block col-12 col-sm-6 col-md-3 align-top pt-2 f-obra'><div class='col-12 col-md-12 div1 foto'><div class='with-100 imatge' style='height: 300px;'><img style='height: 100%; width: 100%' src='../admin/FIRA-TEATRE/imatges/" + field[0].codi + "/" + field[0].foto + "' alt='foto'></div><div style='position:absolute;left:0px;top:258px' class='col-12 col-md-12 pt-1 botons d-none'><a href='http://www.f.dawman.info/#/espectacles/detallEspectacle/"+ field[0].codi+"'>	<button class='btn btn-primary btn-block'>Veure Fitxa</button></a></div><div class='col-12 col-md-12 titol-o'><p class='text-center'> " + field[1].titol + "</p></div></div></div>");
							}

						});
					});
				});

				$("#formulari-genere").slideUp();
				$(".add-genere").show();
				$(".m-genere").hide();
				//Add Class Active i Borrar classe active dels altres

			});

			$("#tipus-form").change(function () {
				var tip = $("input[name=tipusRadio]:checked").val();

				//alert(tip);

				$(".obra").removeClass('d-inline-block');
				$(".obra").hide();
				$(".f-obra").remove();
				$(".borrar-f").removeClass('d-none');
				$(".borrar-f").addClass('d-inline-block');

				$.getJSON("http://www.f.dawman.info/rest/public/tipus/" + tip, function (result) {


					$.each(result, function (i, field) {

						//alert(field.nom);


						$(".aqui").append("<div class='d-inline-block col-12 col-sm-6 col-md-3 align-top pt-2 f-obra'><div class='col-12 col-md-12 div1 foto'><div class='with-100 imatge' style='height: 300px;'><img style='height: 100%; width: 100%' src='../admin/FIRA-TEATRE/imatges/" + field[0].codi + "/" + field[0].foto + "' alt='foto'></div><div style='position:absolute;left:0px;top:258px' class='col-12 col-md-12 pt-1 botons d-none'><a href='http://www.f.dawman.info/#/espectacles/detallEspectacle/"+ field[0].codi+"'>	<button class='btn btn-primary btn-block'>Veure Fitxa</button></a></div><div class='col-12 col-md-12 titol-o'><p class='text-center'> " + field[1].titol + "</p></div></div></div>");


					});
				});

				$("#formulari-tipus").slideUp();
				$(".add-tipus").show();
				$(".m-tipus").hide();


			});

			$("#edatForm").change(function () {
				var edat = $("input[name=edatRadio]:checked").val();
				var idioma = 2;

				$(".obra").removeClass('d-inline-block');
				$(".obra").hide();
				$(".f-obra").remove();
				$(".borrar-f").removeClass('d-none');
				$(".borrar-f").addClass('d-inline-block');


				$.getJSON("http://www.f.dawman.info/rest/public/espectacles/" + idioma + "/" + edat, function (result) {
					$.each(result, function (i, field) {

					
						$(".aqui").append("<div class='d-inline-block col-12 col-sm-6 col-md-3 align-top pt-2 f-obra'><div class='col-12 col-md-12 div1 foto'><div class='with-100 imatge' style='height: 300px;'><img style='height: 100%; width: 100%' src='../admin/FIRA-TEATRE/imatges/" + field.codi + "/" + field.foto + "' alt='foto'></div><div style='position:absolute;left:0px;top:258px' class='col-12 col-md-12 pt-1 botons d-none'><a href='http://www.f.dawman.info/#/espectacles/detallEspectacle/"+ field.codi+"'>	<button class='btn btn-primary btn-block'>Veure Fitxa</button></a></div><div class='col-12 col-md-12 titol-o'><p class='text-center'> " + field.titol + "</p></div></div></div>");
					});
				});

				$("#formulari-edat").slideUp();
				$(".add-edat").show();
				$(".m-edat").hide();


			});

			

			$("#borr-filtre").click(function () {

				$(".obra").slideDown();
				$(".obra").addClass('d-inline-block');
				$(".f-obra").remove();
				$(".borrar-f").removeClass('d-inline-block');
				$(".borrar-f").addClass('d-none');
				$(".m-tipus, .m-genere, .m-edat, #formulari-tipus, #formulari-genere, #formulari-edat").hide();
				$(".add-tipus, .add-genere, .add-edat").show();
				$('input:checkbox').prop('checked', false);
				$('input:radio').prop('checked', false);



			});
			

			
		});

		
	 }


	espectacles;
	generes;
	tipus;

	llistaEspectacles() {

		this.service
			.llistaEspectacles()
			.then(result => this.espectacles = result)
			.catch(error => console.log(error));


	}

	llistaGeneres() {

		this.service
			.llistaGeneres()
			.then(result => this.generes = result)
			.catch(error => console.log(error));


	}

	llistaTipus() {

		this.service
			.llistaTipus()
			.then(result => this.tipus = result)
			.catch(error => console.log(error));


	}





	ngOnInit() {

		this.llistaEspectacles();
		this.llistaGeneres();
		this.llistaTipus();


		


	}

}
