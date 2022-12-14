import { getUser } from "/src/scripts/services/user.js";
import { getRepositories } from "/src/scripts/services/repositories.js";
import { getEvents} from "/src/scripts/services/event.js";

import { user } from "/src/scripts/objects/user.js";
import { screen } from "/src/scripts/objects/screen.js";
import { repositories } from "/src/scripts/objects/Repositories.js";
import { events } from "/src/scripts/objects/Events.js";

document.getElementById('btn-search').addEventListener("click", () => {
  const userName = document.getElementById("input-search").value 
    if(validateEmpatyInput(userName))return
     getUserData(userName)
})

document.getElementById('input-search').addEventListener("keyup", (e) => {
  const userName = e.target.value 
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key == 13 
   if(isEnterKeyPressed){
     if(validateEmpatyInput(userName))return
      getUserData(userName)
  }
})

function validateEmpatyInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuário do GitHub")
    return true
  }}

async function getUserData(userName) {
  const userResponse =  await getUser(userName)
  if (userResponse.message === "Not Found") {
     screen.renderNotFound()
     return
  } 

  const repositoriesResponse =  await getRepositories(userName)
  const eventResponse = await getEvents(userName)
  
  user.setInfo(userResponse)
  user.setRepositories(repositoriesResponse)
  user.setEvents(eventResponse)
  
  screen.renderUser(user) 
  repositories.renderRepositories(user)
  events.renderEvents(user)
}