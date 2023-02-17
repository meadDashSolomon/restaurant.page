const homePage = () => {
  const content = document.getElementById("content");
  let img = document.createElement("img");
  img.classList.add("top-img");
  img.src = "../src/assets/diner.jpg";
  content.appendChild(img);

  let heading1 = document.createElement("h1");
  heading1.textContent = "Dash's Diner!";
  content.appendChild(heading1);

  let restaurantDescription = document.createElement("p");
  restaurantDescription.textContent =
    "Get ready for the most excellent restaurant! Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
  content.appendChild(restaurantDescription);
};

export { homePage };
