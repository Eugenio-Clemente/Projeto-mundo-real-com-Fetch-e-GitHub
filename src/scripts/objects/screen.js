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
               </div>`},
               
    renderNotFound(){
      this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    },
}

export { screen }