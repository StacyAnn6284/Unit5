async function getPost() {
  const aw = await fetch("https://www.reddit.com/r/aww/.json");

  const data = await aw.json();
  const container = document.getElementById("posts");

  let whatwewant = data.data.children;
  console.log(whatwewant);
  for (let i = 1; i <= whatwewant.length; i++) {
    let title = whatwewant[i].data.title;
    let image = whatwewant[i].data.thumbnail;
    let link = whatwewant[i].data.url;

    const eachPost = document.createElement("div");
    container.appendChild(eachPost);
    eachPost.classList.add("postsDiv");

    const eachImage = document.createElement("IMG");
    eachPost.appendChild(eachImage);
    eachImage.src = image;
    eachImage.classList.add("thumbnails");

    const eachTitle = document.createElement("li");
    eachPost.appendChild(eachTitle);
    eachTitle.textContent = `${title}`;
    eachTitle.classList.add("titles");

    const eachLink = document.createElement("p");
    eachPost.appendChild(eachLink);
    eachLink.textContent = `Click anywhere to see this on Reddit`;
    eachLink.classList.add("link");

    eachPost.addEventListener(
      "click",
      function () {
        location.href = link;
      },
      false
    );
  }
}

getPost();
