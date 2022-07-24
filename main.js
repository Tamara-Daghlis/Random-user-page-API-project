const render = new Renderer()
const apiManager = new APIManager()
let userList = []

$("#load-user-data").on("click", function() {
        
        apiManager.getUsers()
        apiManager.getQuote()
        apiManager.getPokemon()
        apiManager.getAboueMeText()
})

$("#diaplay-user").on("click", function() {
    let user = apiManager.getUserData()
    render.mainUserRender(user.mainUser)
    render.friendsRender(user.friends)
    render.quoteRender(user.quote)
    render.pokemonRender(user.pokemon)
    render.aboueMeTextRender(user.aboutMeText)
 })

$("#save-user-page").on("click", function() {
   let userInfo = apiManager.getUserData()
   userList.push(userInfo)
   localStorage.setItem( "userList",JSON.stringify(userList))
})

$("#load-user-page").on("click", function() {
    userList = JSON.parse(localStorage.userList || "[]")
    render.userListRender(userList)
    console.log(userList)
    console.log("HIII")

    $(".dropdown-content").change( function() {
        let user = {}
        let userName = $(this).val()
        for(let userIndex in userList){
                if(userName == userList[userIndex].mainUser.name){
                 user = userList[userIndex]
                }
        }
        render.mainUserRender(user.mainUser)
        render.friendsRender(user.friends)
        render.quoteRender(user.quote)
        render.pokemonRender(user.pokemon)
        render.aboueMeTextRender(user.aboutMeText)
    })
})

