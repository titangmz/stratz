const axios = require('axios')


const main = async() => {

    const playerID = 172535592
    const url = `https://api.stratz.com/api/v1/Player/${playerID}`

    const data = await axios.get(url)

    console.log(data.data)

    

}

main()