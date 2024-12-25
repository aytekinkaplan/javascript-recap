const lists = [
  "Python",
  "Java",
  "C++",
  "C#",
  "JavaScript",
  "Swift",
  "Ruby",
  "Go",
  "Rust",
  "PHP",
  "Kotlin",
  "TypeScript",
  "Scala",
  "Dart",
  "Objective-C",
  "C",
  "R",
  "Matlab",
  "SwiftUI",
  "Flutter",
];

const ul = document.getElementById("learning-list");

lists.forEach((list) => {
  // Create and style <li> element
  const li = document.createElement("li");
  li.textContent = "Learning " + list;
  ul.appendChild(li);

  // Click event for interaction
  li.addEventListener("click", () => {
    li.classList.add("completed");

    setTimeout(() => {
      li.classList.remove("completed");
    }, 3000);

    setTimeout(() => {
      li.remove();
    }, 5000);
  });
});
