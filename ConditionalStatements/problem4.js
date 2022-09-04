// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_username = "bahubali@pushpa.com";
let reg_password = "badal";

let ent_username = "kattappa.com";
let ent_password = "takloo";

if(ent_username==reg_username)
{
  if(ent_password==reg_password)
  {
    console.log("user can log in");
  }
  else
  {
    console.log("incorrect password");  
  }
}
  
else
{
  console.log("user cannot log in");
}