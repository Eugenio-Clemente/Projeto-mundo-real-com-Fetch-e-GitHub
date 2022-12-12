const screen = {
  userProfile: document.querySelector(".profile-data"),
    renderUser(user){      
      this.userProfile.innerHTML = `<div class="info">
            <img src="${user.avatarUrl} alt="Foto perfil do usuário"/>
              <div class="data">
                <h1>${user.name?? "Não possui nome cadastrado 😥"}</h1>                             
                   <p>Login: ${user.userName??  "Não possui Login 😥"}</p>
                   <p>Bio: ${user.bio?? "Não possui bio 😥"}</p>
                   <p>Seguidores: ${user.followers?? "Não possui seguidores 😥"}</p>
                   <p>Seguindo: ${user.following?? "Não possui pessoas seguindo 😥"}</p>
                 </div>
               </div>` 

      let repositoriesItens = ''
         user.repositories.forEach(repo => repositoriesItens +=`
               <li><a href="${repo.html_url}" target="_blank">${repo.name}
                 <div class="add-information">
                    <p>🍴 ${repo.forks_count}</p> 
                    <p>⭐${repo.stargazers_count}</p> 
                    <p>👀 ${repo.watchers}</p> 
                   <p>👩‍💻 ${repo.language}</p>
                  </div></a></li>
                <h3 class="following">👥 Seguindo </h3>`) 

      if (user.repositories.length > 0) {
          this.userProfile.innerHTML +=`
                 <div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItens}</ul>
                  </div>`}

      let eventosItens = ''
          user.events.forEach(events =>{ 
           if(events.type == "CreateEvent" ) {
               eventosItens+=`
                     <div class= "events">
                       <h3>${events.repo.name}</h3> 
                      <p>-${events.payload.description}</p>
                     </div>`
         }else if (events.type == "PushEvent") {
               eventosItens +=`
                      <div class= "events">
                        <h3>${events.repo.name}</h3>
                        <p>-${events.payload.commits?.[0].message}</p> 
                      </div>`
              }
            })
            
          if (user.events != '') {    
             this.userProfile.innerHTML +=`<div class="events-background">
                                          <h1>Eventos</h1> 
                                          <p>${eventosItens}</p>
                                          </div>`
          }else{
             this.userProfile.innerHTML +=`<h2>Eventos não encontrados</h2>`
          }
        },
      renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
     },
}

export { screen }