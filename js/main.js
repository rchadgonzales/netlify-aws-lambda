// CREATED A FUNCTION CALLED fetchUsers THAT USES ASYNC AWAIT
const fetchUsers = async () =>
  await (await fetch("/.netlify/functions/getusers")).json();

// MAKING A REQUEST AND THIS IS GOING TO RETURN A PROMISE
// await (await fetch("http://localhost:9000/getusers")).json();
// await (await fetch("https://api.github.com/users?client_id=7cdc7322febce70e4aa6&client_secret=26b0ab701ba2407749889374eb877678cbc0faf0")).json();

fetchUsers().then((data) => {
  userList = document.querySelector("#users");

  data.forEach((user) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    const link = document.createElement("a");
    link.appendChild(document.createTextNode(user.login));
    link.href = user.html_url;
    link.target = "_blank";
    li.appendChild(link);
    userList.appendChild(li);
  });
});
