async function getUser(id) {
  const response = await fetch(`/api/users/${id}`);
  const user = response.json();
  return user;
}

// Calling a async function return a promise:
getUser(2).then(user => console.log(user));

// Two rules:
