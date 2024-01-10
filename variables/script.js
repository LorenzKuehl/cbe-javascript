let userName = "Brad";
userName = "Jenna";

function getUserNameLength() {
  return (userName = userName.length);
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true
