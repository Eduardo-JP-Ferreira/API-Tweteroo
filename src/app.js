import express from "express"
import cors from 'cors'

const app = express() 
app.use(cors())
app.use(express.json())
const usuario = [
    {
        id: 1,
        username: "bobesponja",
        avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
    }
]

const listaTweets = [
    {
		username: "bob1",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	},
    {
		username: "bobesponja2",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	},
    {
		username: "bobesponja3",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	},
    {
		username: "bobesponja4",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	},
    {
		username: "bobesponja5",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	},
    {
		username: "bobesponja6",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	},
    {
		username: "bobesponja7",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	},
    {
		username: "bobesponja8",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	},
    {
		username: "bobesponja9",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	},
    {
		username: "bobesponja10",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	},
    {
		username: "bobesponja11",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	}
]

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body
    const novoUsuario = {
        id: usuario.length + 1,
        username: username,
        avatar: avatar
    }

    usuario.push(novoUsuario)
    res.send("OK")
})
app.get("/tweets",(req, res) => {
    const novaListaTweets = []
    for(let i=listaTweets.length-10; i<listaTweets.length;i++){
        novaListaTweets.push(listaTweets[i])
    }
    res.send(novaListaTweets)
})

app.post("/tweets",(req, res) => {
    const {username, tweet} = req.body
    const pessoa = usuario.find((usuario)=> usuario.username === username)

    if(!pessoa){
        res.send("UNAUTHORIZED")
        return
    }

    const novoTweet = {
        username: username,
        avatar: pessoa.avatar,
        tweet: tweet
    }
    listaTweets.push(novoTweet)
    res.send("OK")
})



const PORT = 5000
app.listen(PORT, () => console.log("Servidor rodando"))