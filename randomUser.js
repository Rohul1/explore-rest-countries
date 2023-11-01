const loadUsers = () =>{
    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}
loadUsers();


const displayUsers = users => {
const usersContainer = document.getElementById("users-container");
for(user of users ){
    console.log(user)
    const userDiv = document.createElement("div");
    userDiv.classList.add("users")
    userDiv.innerHTML = `
    <h3>User name </h3>
    <p>user Mial : ${user.email}</p>
    <p>User Location : ${user.location.city} ${user.location.country}</p>
    <p>User Name : ${user.name.first} ${user.name.last}</p>


    `;
    usersContainer.appendChild(userDiv);
}
}