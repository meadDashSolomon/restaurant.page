const clearPage = () => {
  const content = document.querySelector("#content");
  content.replaceChildren();
};

console.log(clearPage);

export { clearPage };
