var input = document.querySelector("#dim");
var btn = document.querySelector("#btn");

btn.addEventListener("click", magicSquare);

function magicSquare(e) {
	if (input.value != "") {
		var dim = parseInt(input.value), magicCube = [];
		for (let i = 0; i < dim; i++) {
			magicCube.push(new Array(dim).fill());
		}
        var z = 1, i = 0, j = parseInt(dim / 2);
		magicCube[i][j] = z;
		for (let k = 0; k < dim * dim - 1; k++) {
			i--, j++;
			if (i < 0) {
				i = dim - 1;
			}
			if (j > dim - 1) {
				j = 0;
			}
			if (typeof magicCube[i][j] == "undefined") {
				magicCube[i][j] = ++z;
			} else if (typeof magicCube[i][j] !== "undefined") {
				i += 2;
				j--;
				if (i > dim - 1) {
					i = 1;
					if (j < 0) {
						j = dim - 1;
					}
				}
				magicCube[i][j] = ++z;
			}
		}
		console.table(magicCube);
		var rowSum = 0,
			colSum = 0;
		for (let i = 0; i < magicCube.length; i++) {
			rowSum += magicCube[0][i];
			colSum += magicCube[i][0];
		}
		console.log(`Sum of Row 0: ${rowSum}`);
		console.log(`Sum of Column 0: ${colSum}`);
		input.value = "";
		e.preventDefault();
    } else {
        alert('please enter dimention');
    }
}
