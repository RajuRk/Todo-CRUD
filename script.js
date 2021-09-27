async function getUsers(){
   
    const data = await fetch("https://6151d83c4a5f22001701d4ca.mockapi.io/users", {method: "GET"});
    const users = await data.json();
    console.log(users);
    return users;
}

getUsers();

// C - Create - POST
// R - Read - GET
// U - Update - PUT
// D - Delete - DELETE

async function displayUsers(){
    const users = await getUsers();
    // console.log(users);
    const userList = document.querySelector(".user-list");
    userList.innerHTML = ""; //Wipping the old data
    users.forEach((user) => {
        // console.log(user.name);
        userList.innerHTML += `<div class="user-container">
                                 <img class="user-avatar" src ="${user.avatar}" alt="${user.name}">
                                 <div>
                                   <p class="user-name">${user.name}</p>
                                   <button onclick="deleteUser(${user.id})" >DELETE</button
                                 </div>
                               </div>`;
    })
}

displayUsers(); 

async function deleteUser(id){
    const data = await 
                 fetch("https://6151d83c4a5f22001701d4ca.mockapi.io/users/" + id, 
                 {method: "DELETE"});
    
    displayUsers(); 

    // Delete button -> User deleting happens -> Refresh the list -> display users
}

async function addUser(){
    console.log("Adding User");
    const userName = document.querySelector(".add-user-name").value;
    const userAvatar = document.querySelector(".add-user-avatar").value;
    const data = await
                 fetch("https://6151d83c4a5f22001701d4ca.mockapi.io/users/",
                 {
                    method: "POST",
                    body: JSON.stringify({
                        name: userName,
                        avatar: userAvatar
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                 });
}


