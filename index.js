// Add your code here

function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then((res) => res.json())
    .then((object) => document.querySelector("body").append(object.id))
    .catch((err) => document.querySelector("body").append(err.message));
}
