const n = 10;

const renderGrid = (n) => {
	for (let i = 0; i < n; i++) {
		const div = document.createElement("div");
		div.classList.add("possible");
		document.querySelector(".grid-3-cols").appendChild(div);
		div.appendChild(rowTemplate(n));
	}
};

const rowTemplate = (n) => {
		const boxDiv = document.createElement("div");
		boxDiv.classList.add("box");

  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    div.classList.add("row");
		for (let i = 0; i < n; i++) {
			const smallDiv = document.createElement("div");
			smallDiv.classList.add("small-box");
      div.appendChild(smallDiv);
		}
    boxDiv.appendChild(div);
	}
  return boxDiv;
};

renderGrid(n);
