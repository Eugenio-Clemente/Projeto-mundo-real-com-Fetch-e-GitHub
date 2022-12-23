const events = {
userProfile: document.querySelector(".profile-data"),

  renderEvents(user) {
    if (user.events.length > 0) {
      let eventosItens = ""
       user.events.forEach(events => {
         const eventType = events.type === 'CreateEvent' || events.type === 'PushEvent'
         const eventCommits = events.payload.commits?.[0].message

          if (eventType) { 
            if (eventCommits) { 
             eventosItens += `
                  <div class= "events">
                      <h3>${events.repo.name}</h3>
                      <p>-${events.payload.commits?.[0].message}</p>
                  </div>`
                     }
                  }
            });
      this.userProfile.innerHTML += `<div class="events-background">
                                          <h1>Eventos</h1> 
                                          <p>${eventosItens}</p>
                                        </div>`
    }
  }
}

export { events }