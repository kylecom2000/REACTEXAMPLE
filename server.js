const express = require)"express"

const PORT = propcess.emv.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
  })

app.listen(PORT, () => {
     console.log("connectted")
})
