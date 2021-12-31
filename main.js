//Variaveis

//variaveis obj
const LinksSocialMidia = {
  youtube: 'channel/UCtpQL05YTd22xlxNsN0kVOg',
  instagram: 'sayhi27official',
  facebook: 'profile.php?id=100018367777108',
  twitter: 'HiOfficial27',
  github: 'PedroItaloBC'
}
//Functions
function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://${social}.com/${LinksSocialMidia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMidia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.login
      descrition.textContent = data.bio
      githubSettigs.href = data.html_url
      perfilImage.src = data.avatar_url
      githubNamePerfil.textContent = data.name
    })
}
//Execution Functions
changeSocialMidiaLinks()
getGitHubProfileInfos()
