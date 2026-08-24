// #1.---------- Reduce if-else hele and use object maping.---------------

/*
function getUserRole(role) {
  const roles = {
    admin: "Full Access",
    editor: "Edit Access",
    viewer: "Read-only Access",
  };
  return roles[role] || "No Access";
}
console.log(getUserRole("viewer"));

*/

// #2.---------------Email masking---------------

const email = "omprakash@gmail.com";

function maskingEmail(email) {
  const [username, domain] = email.split("@");
  return username[0] + "*".repeat(username.length - 1) + "@" + domain;
}
console.log(maskingEmail(email));
