const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Line below takes the form data from the HTML page and we have to make sure that
  // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
  // when the data is transformed
  const linesData = new FormData(form);
  // The line below transforms the data into data with Key value pairs
  const linesDataTransformed = Object.fromEntries(linesData);
  console.log("linesDataTransformed", linesDataTransformed);

  const x1 = parseFloat(linesDataTransformed["x1"]);
  const x2 = parseFloat(linesDataTransformed["x2"]);
  const y1 = parseFloat(linesDataTransformed["y1"]);
  const y2 = parseFloat(linesDataTransformed["y2"]);

  const m = (y1 - y2) / (x1 - x2);
  const c = y1 - m * x1

  const part = document.querySelector(".answerHere");

  const partOne = document.createElement("p");
  partOne.textContent = `
  The first step is to work out the gradient:
  m = (y1-y2)/(x1-x2) 
  `;
  part.append(partOne);

  const partTwo = document.createElement("p");
  partTwo.textContent = `
  Substituting the relevant values give:
  m = (${y1}-${y2})/(${x1}-${x2})`;
  partOne.append(partTwo);

  const partThree = document.createElement("p");
  partThree.textContent = `
  m = (${y1 - y2})/(${x1 - x2})`;
  partTwo.append(partThree);

  const partFour = document.createElement("p");
  partFour.textContent = `
  m = ${(y1 - y2) / (x1 - x2)}`;
  partThree.append(partFour);

  const partFive = document.createElement("p");
  partFive.textContent = `
  The next step is to use one co - ordinate pair (any will do) we will pick (x1, y1) = (${x1} , ${x2}) and the value of m we worked out before of ${m}`;
  partFour.append(partFive);

  const partSix = document.createElement("p");
  partSix.textContent = `
  We substitute it into y = mx + c to get:
  `;
  partFive.append(partSix);

  const partSeven = document.createElement("p");
  partSeven.textContent = `
  ${y1} = ${m} x ${x1} + c
  `;
  partSix.append(partSeven);

  const partEight = document.createElement("p");
  partEight.textContent = `
  ${y1} = ${m * x1} + c`;
  partSeven.append(partEight);

  const partNine = document.createElement("p");
  partNine.textContent = `
  c = ${y1 - m * x1}  `;
  partEight.append(partNine);

  const partTen = document.createElement("p");
  partTen.textContent = `
  The equation of the straight line is:`;
  partNine.append(partTen);

  const partEleven = document.createElement("p");
  partEleven.textContent = `
  y = ${m}x + ${c}`;
  partTen.append(partEleven);
});
