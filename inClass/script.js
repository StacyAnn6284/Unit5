fetch("https://grandcircusco.github.io/demo-apis/blog-posts.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data.posts;
  })
  .then((hotdogs) => {
    for (const hotdog of hotdogs) {
      console.log(`Article Title: ${hotdog.title}`);
      console.log(`Author: ${hotdog.author}`);
      console.log(hotdog.content);
    }
  });

console.log("I'm after the fetch");

const promise = fetch(
  "https://grandcircusco.github.io/demo-apis/blog-posts.json"
);
console.log(promise);
promise
  .then((res) => res.json())
  .then((data) => {
    console.log("second promise");
    console.log(data);

    const container = document.getElementById("quotes");
    for (const post of data.posts) {
      const listItem = document.createElement("li");
      listItem.textContent = `${post.content} Written By:${post.author}`;
      container.appendChild(listItem);
    }
  })
  .catch((err) => {
    console.log("Error");

    const title = document.createElement("h1");
    title.textContent = err.message;
    document.body.appendChild(title);
  });

async function getBlogPosts() {
  const res = await fetch(
    "https://grandcircusco.github.io/demo-apis/blog-posts.json"
  );
  const data = await res.json();
  const authors = data.posts.map((post) => post.author);
  return authors;
}

getBlogPosts().then((posts) => {
  console.log("In blog posts function promise");
  console.log(posts);
});
