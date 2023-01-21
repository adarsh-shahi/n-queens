const n = 6;

const algorithm = (n, arr, m) => {
	if (arr.length === n) {
		const temp = [];
		for (let i = 0; i < arr.length; i++) {
			temp.push(arr[i]);
		}
		m.push(temp);
		return;
	}

	let finalAns = [];

	let flag = arr.length > 1 ? true : false;
	let caretaker = false;
	for (let i = 0; i < n; i++) {
		if (!arr.includes(i)) {
			if (arr.length > 0 ? Math.abs(arr[arr.length - 1] - i) != 1 : i != -1) {
				if (flag) {
					for (let j = 0; j < arr.length - 1; j++) {
						if (Math.abs(j - arr.length) == Math.abs(arr[j] - i)) {
							caretaker = true;
							break;
						}
					}
				}
				if (caretaker) {
					caretaker = false;
					continue;
				}
				arr.push(i);
				algorithm(n, arr, m);
				arr.pop();
			}
		}
	}
	return finalAns;
};

const renderGrid = (n) => {
	const m = [];
	algorithm(n, [], m);
	console.log(m);
	for (let i = 0; i < m.length; i++) {
		const div = document.createElement("div");
		div.classList.add("possible");
		document.querySelector(".grid-3-cols").appendChild(div);
		div.appendChild(rowTemplate(n, m[i]));
	}
};

let count = 1;

const rowTemplate = (n, arr) => {
	const boxDiv = document.createElement("div");
	boxDiv.classList.add("box");
	boxDiv.innerHTML = count;
	count++;

	for (let i = 0; i < n; i++) {
		const div = document.createElement("div");
		div.classList.add("row");
		for (let j = 0; j < n; j++) {
			const smallDiv = document.createElement("div");
			smallDiv.classList.add("small-box");
			if (arr[i] === j) {
				smallDiv.style.backgroundColor = "black";
			}
			div.appendChild(smallDiv);
		}
		boxDiv.appendChild(div);
	}
	return boxDiv;
};

renderGrid(n);
