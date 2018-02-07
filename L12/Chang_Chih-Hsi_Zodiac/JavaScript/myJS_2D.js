	// declaring a 2D array
	var signs = new Array(12);
	for (var ndx = 0; ndx < 12; ndx++) {
		signs[ndx] = new Array(2);
	}
	
	// The names first
	signs[0][0] = "Rat";
	signs[1][0] = "Ox";
	signs[2][0] = "Tiger";
	signs[3][0] = "Rabbit";
	signs[4][0] = "Dragon";
	signs[5][0] = "Snake";
	signs[6][0] = "Horse";
	signs[7][0] = "Goat";
	signs[8][0] = "Monkey";
	signs[9][0] = "Rooster";
	signs[10][0] = "Dog";
	signs[11][0] = "Pig";
	
	// Next the image file names
	signs[0][1] = "rat.gif";
	signs[1][1] = "ox.gif";
	signs[2][1] = "tgr.gif";
	signs[3][1] = "rbt.png";
	signs[4][1] = "drgn.png";
	signs[5][1] = "snk.png";
	signs[6][1] = "hrs.gif";
	signs[7][1] = "gt.gif";
	signs[8][1] = "mnky.png";
	signs[9][1] = "rstr.gif";
	signs[10][1] = "dog.gif";
	signs[11][1] = "pig.gif";
		 


var table = document.getElementById("myTable");

var tr_head = document.createElement("TR");
tr_head.setAttribute("id", "tr_head");
table.appendChild(tr_head);


for (i = 0; i < 12; i++) { 
	var td = document.createElement("TD");
	if (i % 2 ==0) {
		td.setAttribute("class", "td1");
	} else {
		td.setAttribute("class", "td2");
	}
	var t = document.createTextNode(signs[i][0]);
	var img = document.createElement("IMG");
    img.setAttribute("src", "Images/" + signs[i][1]);
	img.setAttribute("alt", signs[i][0]);
  	
	td.appendChild(t);
	td.appendChild(img);
		
	tr_head.appendChild(td);

}

var trNumber = 0;
var d = new Date();

for (i = 1912; i <= d.getFullYear(); i++) { 
	if ((i - 1900) % 12 ==0){
		trNumber++;
		var tr_year = document.createElement("TR");
		tr_year.setAttribute("id", "tr_year" + trNumber);
		table.appendChild(tr_year);
	}
		
	var td = document.createElement("TD");
	if (i % 2 ==0) {
		td.setAttribute("class", "td1");
	} else {
		td.setAttribute("class", "td2");
	}
	var t = document.createTextNode(i);

	td.appendChild(t);
	tr_year.appendChild(td);

}

