const items = document.querySelectorAll("#categories .item");
const numberItems = items.length;
console.log(`Numbers of categories ${numberItems}`);

items.forEach((item) => {
  const titleText = item.querySelector("h2").textContent;
  const numberLi = item.querySelectorAll("li").length;
  console.log(`Category:${titleText}`);
  console.log(`Elements:${numberLi}`);
});
