
class APIManager {
    constructor() {
        this.userData = {}
    }

    getUsers() {
        let mainUser = {}
        let friend = {}
        let friends = []
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=7&inc=picture,name,location',
            success: (data) => {
                for (let i = 0; i < 7; i++) {
                    if (i == 0) {
                        mainUser = {
                            "picture": data.results[i].picture.medium,
                            "name": data.results[i].name.first + " " + data.results[i].name.last,
                            "city": data.results[i].location.city,
                            "state": data.results[i].location.state,
                        }
                        this.userData.mainUser = mainUser
                    }
                    else {
                        friend = {
                            "name": data.results[i].name.first + " " + data.results[i].name.last,
                        }
                        friends.push(friend)
                    }
                }
            },
            error: function (xhr, text, error) {
                console.log("woops, seems to be an issue with the request");
            }
        });

        this.userData.friends = friends
    }

    getQuote() {
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success: (data) => {
                this.userData.quote = {
                    "qouteText": data.quote,
                    "author": "Kanye"
                }   
            },
            error: function (xhr, text, error) {
                console.log("woops, seems to be an issue with the request");
            }
        });
    }

    getPokemon() {
        let id = Math.floor(Math.random() * (948 - 1 + 1)) + 1
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            success: (data) => {
                let pokemon = {
                    "name": data.name,
                    "picture": data.sprites.back_default
                }
                this.userData.pokemon = pokemon
            },
            error: function (xhr, text, error) {
                console.log("woops, seems to be an issue with the request");
            }
        });
    }

    getAboueMeText() {
        let paragraphs = {}
        let aboutMeText = []
        $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=all-meat&paras=3",
            success: (data) => {
                for (let paragraph of data) {
                    paragraphs ={
                        "aboutMeParagraph": paragraph
                    }
                    aboutMeText.push(paragraphs)
                }
                this.userData.aboutMeText = aboutMeText
            },
            error: function (xhr, text, error) {
                console.log("woops, seems to be an issue with the request");
            }
        });
    }

    getUserData() {
        return this.userData;
      }


}



