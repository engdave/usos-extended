// Przycisk liczący średnią z najnowszego semestru

if (location.hostname === "web.usos.agh.edu.pl") {
	var targetElement = document.querySelector('a[aria-controls="ui-id-2"]');

	if (targetElement) {
	  var newButton = document.createElement("button");
	  newButton.innerHTML = "Oblicz średnią";
	  newButton.style.marginLeft = "10px";
	  targetElement.parentNode.insertBefore(newButton, targetElement.nextSibling);

	  newButton.addEventListener("click", function(event) {
		event.preventDefault();

		var elements = document.querySelectorAll("#tab2 > tr > td:nth-child(3) > div:nth-child(1) > span");
		var sum = 0;
		var count = 0;

		elements.forEach(function(element) {
		  var grade = parseFloat(element.textContent.replace(',', '.'));
		  if (!isNaN(grade)) {
			sum += grade;
			count++;
		  }
		});
		var average = sum / count;
		alert("Średnia ocen końcowych w tym semestrze: " + average);
    });
  }
}

// Menu z najważniejszymi linkami na USOSie

const buttonContainer = document.createElement("div");
buttonContainer.style.cssText = "position:fixed; bottom:55px; right:17px; display:flex; flex-direction:column;";

const button1 = document.createElement("button");
button1.innerText = "Plan zajęć";
button1.addEventListener("click", function() {
	window.location.href = "https://web.usos.agh.edu.pl/kontroler.php?_action=home/plan"
});

const button2 = document.createElement("button");
button2.innerText = "Oceny końcowe";
button2.addEventListener("click", function() {
	window.location.href = "https://web.usos.agh.edu.pl/kontroler.php?_action=dla_stud/studia/oceny/index"
});

const button3 = document.createElement("button");
button3.innerText = "Moje APD";
button3.addEventListener("click", function() {
	window.location.href = "https://apd.usos.agh.edu.pl/my-apd/"
});

const button4 = document.createElement("button");
button4.innerText = "Wnioski";
button4.addEventListener("click", function() {
	window.location.href = "https://web.usos.agh.edu.pl/kontroler.php?_action=dodatki/wnioski/index"
});

const button5 = document.createElement("button");
button5.innerText = "Ankiety";
button5.addEventListener("click", function() {
	window.location.href = "https://web.usos.agh.edu.pl/kontroler.php?_action=dla_stud/studia/ankiety/index"
});

buttonContainer.appendChild(button1);
buttonContainer.appendChild(button2);
buttonContainer.appendChild(button3);
buttonContainer.appendChild(button4);
buttonContainer.appendChild(button5);

document.body.appendChild(buttonContainer);

// Kasacja niepotrzebnych tabelek w zakłace "Mój USOSWeb"

let frames = document.querySelectorAll("usos-frame");

for (let i = 0; i < frames.length; i++) {
	let title = frames[i].querySelector("h2 a");
	if (title) {
		title = title.innerText;
		} else {
			title = "Nie znaleziono tytułu ramki.";
			}

  if (title === "Podpięcia" || title === "Sprawdziany studenta" || title === "Katalog" || title === "Zajęcia studenta" || title === "Preferencje prywatności") {
    frames[i].remove();
  }
}

let planFrame = document.getElementById("plany-frame");
if (planFrame) {
	planFrame.parentNode.removeChild(planFrame);
}

let preferencjeFrame = document.getElementById("preferencje-frame");
if (preferencjeFrame) {
	preferencjeFrame.parentNode.removeChild(preferencjeFrame);
}

const infoBox = document.querySelector('info-box');
if (infoBox) {
    infoBox.remove();
}

const noticeBox = document.querySelector('notice-box');
if (noticeBox) {
    noticeBox.remove();
}