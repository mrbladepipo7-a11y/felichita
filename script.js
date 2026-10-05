const data = {
  forest: {
    chapter: "CHAPTER 02",
    heading: "The forest is growing through the rails.",
    text: "You step outside. The rails disappear under moss, then reappear in the sunlight. Far ahead, a second tram is waiting where no station exists.",
    choices: [["Open the second tram", "signal"], ["Go back before dark", "return"]],
  },
  tram: {
    chapter: "CHAPTER 02",
    heading: "Someone left a message.",
    text: "Under the driver's seat you find a paper ticket. On the back: “If the forest is bright, you are close.” There is a destination printed in faded ink: HOME.",
    choices: [["Take the ticket", "signal"], ["Leave it behind", "return"]],
  },
  signal: {
    chapter: "FINAL",
    heading: "The tram starts by itself.",
    text: "The lights flicker on. The rails hum beneath your feet. You do not know where the line ends — only that, for the first time in years, the forest seems to be pointing forward.",
    choices: [],
    ending: "END — TO BE CONTINUED"
  },
  return: {
    chapter: "FINAL",
    heading: "You wait for another day.",
    text: "The doors close. Sunlight moves across the empty seats. Maybe some stories are not meant to be finished in one ride.",
    choices: [],
    ending: "END — THE LAST TRAM"
  }
};

const chapter = document.querySelector("#chapter");
const heading = document.querySelector("#heading");
const text = document.querySelector("#text");
const choices = document.querySelector("#choices");
const ending = document.querySelector("#ending");

function render(key) {
  const scene = data[key];
  chapter.textContent = scene.chapter;
  heading.textContent = scene.heading;
  text.textContent = scene.text;
  ending.textContent = scene.ending || "";
  choices.innerHTML = "";
  scene.choices.forEach(([label, next]) => {
    const b = document.createElement("button");
    b.textContent = label;
    b.onclick = () => render(next);
    choices.appendChild(b);
  });
  document.querySelector("#story").scrollIntoView({behavior:"smooth"});
}

document.querySelector("#start").onclick = () =>
  document.querySelector("#story").scrollIntoView({behavior:"smooth"});
choices.querySelectorAll("button").forEach(b => b.onclick = () => render(b.dataset.next));
