function toonDatum() {

alert(Date());

}

function pakket(){
	var pakket = "Welk pakket wilt U?";
	var pakket1 = "Pakket 1";
	var pakket2 = "Pakket 2";
	var pakket3 = "Pakket 3";

	var pakketleeg = "Pakket";
	var hoelang = "Voor hoelang wilt u uw pakket?";
	var keuze = "1 Maand, 1 Jaar of 5 Jaar";

	var pakket1Maand = "€ 5,95";
	var pakket1jaar = "€ 71,40";
	var Jaar5Pakket1 = "€ 357";

	var pakket2Maand = "€ 7,95";
	var pakket2jaar = "€ 95,40";
	var Jaar5Pakket2 = "€ 477";

	var pakket3Maand = "€ 10,95";
	var pakket3jaar = "€ 131,40";
	var Jaar5Pakket3 = "€ 657";

	var nieuw = prompt(pakket, pakketleeg);

if (nieuw === "Pakket 1"){
	var hoelang1 = prompt(hoelang, keuze);

	if (hoelang1 === "1 Maand"){
		alert("Uw Prijs is: " + pakket1Maand);

		if (hoelang1 === "1 Jaar"){
			alert("Uw Prijs is: " + pakket1jaar);
		}
		else if (hoelang1 === "5 Jaar"){
			alert("Uw Prijs is: " + Jaar5Pakket1);
		}
	}
}	
else if (nieuw === "Pakket 2"){
	var hoelang2 = prompt(hoelang, keuze);

	if (hoelang2 === "1 Maand"){
		alert("Uw Prijs is: " + pakket2Maand);

		if (hoelang2 === "1 Jaar"){
			alert("Uw Prijs is: " + pakket2jaar);
		
			if (hoelang2 === "5 Jaar"){
			alert("Uw Prijs is: " + Jaar5Pakket2);
			}
		}
	}

else if (nieuw === "Pakket 2"){
	var hoelang2 = prompt(hoelang, keuze);

	if (hoelang2 === "1 Maand"){
		alert("Uw Prijs is: " + pakket3Maand);

		if (hoelang2 === "1 Jaar"){
			alert("Uw Prijs is: " + pakket3jaar);
		
			if (hoelang2 === "5 Jaar"){
				alert("Uw Prijs is: " + Jaar5Pakket3);
			}
		}
	}
}
}
}