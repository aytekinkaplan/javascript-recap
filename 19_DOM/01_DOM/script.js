// Getting Elements By Tag Name
// Ensure the DOM is fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  const allTitles = document.getElementsByTagName("h1");
  for (const title of allTitles) {
    console.log(title);
  }
});
