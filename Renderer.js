
class Renderer {

     mainUserRender(mainUser) { 
        const source = $("#mainUser-template").html()
        const template = Handlebars.compile(source)
        const userInformation = template(mainUser)
        $(".user-container").html(" ").append(userInformation)
    }

    friendsRender(friends) {
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const friendsInfromation = template({friendsData: friends})
        $(".friends-container").html(" ").append(friendsInfromation)
    }

    quoteRender(qoute) {
        const source = $("#qoute-template").html()
        const template = Handlebars.compile(source)
        const qouteInformation = template(qoute)
        $(".quote-container").html(" ").append(qouteInformation)
    }

    pokemonRender(pokemon) {
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const pokemonInformation = template(pokemon)
        $(".pokemon-container").html(" ").append(pokemonInformation)
        
    }

    aboueMeTextRender(aboutMeText) {
        const source = $("#aboutMeText-template").html()
        const template = Handlebars.compile(source)
        const aboutMeTextInformation = template({paragraphs: aboutMeText})
        $(".meat-container").html(" ").append(aboutMeTextInformation)
    }

    userListRender(userList) {
        const source = $("#loadUsers-template").html()
        const template =Handlebars.compile(source)
        const userListInfromation = template({allUserList: userList})
        $(".userList-container").html(" ").append(userListInfromation)
    }

} 