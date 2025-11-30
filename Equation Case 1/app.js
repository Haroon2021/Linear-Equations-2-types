const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const linesData = new FormData(form);
  const linesDataTransformed = Object.fromEntries(linesData);

  const m = parseFloat(linesDataTransformed["m"]);
  const x = parseFloat(linesDataTransformed["x"]);
  const y = parseFloat(linesDataTransformed["y"]);

  const part = document.querySelector(".answerHanger");

  const partOne = document.createElement("p");
  partOne.textContent = `
  Substituting 
  m = ${m}, 
  y = ${y}, 
  x = ${x}
  into 
  y = mc + c`;

  part.append(partOne);

  const partTwo = document.createElement("p");
  partTwo.textContent = `
         ${y} = ${m}x${x} + c `;

  partOne.append(partTwo);

  const partThree = document.createElement("p");

  partThree.textContent = `
           ${y} = ${m * x} + c `;

  partTwo.append(partThree);

  const partFour = document.createElement("p");

  partFour.textContent = `
            c = ${y} - ${m * x}`;

  partThree.append(partFour);

  const partFive = document.createElement("p");

  partFive.textContent = `
           Substituting the values of:
           m = ${m},
           and
           c = ${y - m * x},
           into y = mx + c gives:`;

  partFour.append(partFive);

  const partSix = document.createElement("p");

  if (m == 1) {
    mForLastSection = "";
  } else {
    mForLastSection = m;
  }
  console.log(mForLastSection);

  partSix.textContent = `
    y = ${mForLastSection}x + ${y - m * x}
    `;

  partFive.append(partSix);
});
