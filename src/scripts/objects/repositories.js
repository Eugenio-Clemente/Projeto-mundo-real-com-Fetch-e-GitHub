const repositories = {
userProfile: document.querySelector(".profile-data"),

    renderRepositories(user) {
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += ` 
                <li><a href="${repo.html_url}" target="_blank">${repo.name}
                  <div class="add-information">
                    <p>🍴 ${repo.forks_count}</p> 
                     <p>⭐${repo.stargazers_count}</p> 
                     <p>👀 ${repo.watchers}</p> 
                     <p>👩‍💻 ${repo.language ?? "Não possui nenhuma linguagem"}</p>
                   </div></a></li>
                 `)

        if (user.repositories.length > 0) {
         this.userProfile.innerHTML += `
                 <div class="repositories section">
                    <h2>Repositórios</h2>
                    <h3>👥 Seguindo </h3>
                    <ul>${repositoriesItens}</ul>
                </div>`}
    }
}

export { repositories }