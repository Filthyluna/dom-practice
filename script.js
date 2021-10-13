let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  function changeTitle() {
    document.getElementById("main-title").innerText = "Dom's Page";
  }
  changeTitle();

  // Part 2
  function changeBackground() {
    document.body.style.backgroundColor = "beige";
  }
  changeBackground();

  // Part 3
  function deleteLastItem() {
    document.querySelector("li:last-child").remove("li:last-child");
  }
  deleteLastItem();

  // Part 4
  function changeFontSize() {
    let objects = document.getElementsByClassName("special-title");
    for (let i = 0; i < objects.length; i++) {
      objects[i].style.fontSize = "2rem";
    }
  }
  changeFontSize();


  // Part 5
  function pastRacingRemove() {
    let pastRaces = document.getElementById("past-races");
    pastRaces.removeChild(pastRaces.children[3]);
  }
  pastRacingRemove();

  // Part 6
  function addCity() {
    let newItem = document.createElement("li");
    let text = document.createTextNode("New York");
    newItem.appendChild(text);
    document.getElementById("past-races").appendChild(newItem);

  }
  addCity();

  // Part 7
  function newBlogPost() {
    let blogPost = document.createElement("div");
    let heading = document.createElement("h1");
    let para = document.createElement("p");
    blogPost.className = "blog-post purple";
    heading.innerHTML = "New York";
    para.innerHTML = "I did a cool flip in my car!";

    blogPost.appendChild(heading);
    blogPost.appendChild(para);

    //Using [0] makes sure it is at the very end of the list
    let main = document.getElementsByClassName("main")[0];
    main.appendChild(blogPost);

  }
  newBlogPost();
}
