console.log("Js file is now connected.")

let firstSection = document.querySelector("body section");
firstSection.setAttribute("class", "featured")

const addArticle = document.createElement("article");

const imgArticle = document.createElement("img");
imgArticle.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
imgArticle.setAttribute("alt", "Image of a mountain in front of a lake.");


const headingThree = document.createElement("h3");
headingThree.textContent = "Stop Planning";

const paraArticle = document.createElement("p");
paraArticle.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all isso stressful these days; why add to the stress by overworking yourself?"

const asideArticle = document.createElement("aside");

const asidePara = document.createElement("p");

const paraSpan = document.createElement("span"); 

const spanStrong = document.createElement("strong");
spanStrong.textContent = "Read Time:";

const paraAnchor = document.createElement("a");
paraAnchor.setAttribute("href", "#");
paraAnchor.textContent = "Read more...";

paraSpan.append(spanStrong, " 4 Minutes");


asidePara.append(paraSpan, paraAnchor);

asideArticle.append(asidePara);

addArticle.append(imgArticle, headingThree, paraArticle, asideArticle);
document.querySelector("section.posts").appendChild(addArticle);


const postsSection = document.querySelector("section.posts");

const firstArticle = postsSection.querySelector("article");
const secondArticle = firstArticle.nextElementSibling;

postsSection.insertBefore(secondArticle, firstArticle);

const allPostRemove = document.querySelector("li");
allPostRemove.remove();

const featuredSection = document.querySelector("section.featured");
const spanRemoval = featuredSection.querySelector("span").remove();

const removeAddArticle = addArticle.remove();

const removeNonFeaturedTiltes = postsSection.querySelectorAll("h3");
removeNonFeaturedTiltes.forEach( title =>title.remove());

