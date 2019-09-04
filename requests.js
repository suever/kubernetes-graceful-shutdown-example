const axios = require('axios')
const url = 'http://graceful-shutdown:graceful-shutdown:80';

(async () => {
  while (true) {
    try {
      const resp = await axios.get(url)
      console.log(resp)
    } catch (err) {
      console.error(err)
    }
  }
})()
