let express = require("express");

let app = express();

app.use(express.static(__dirname + "/dist/SuggestionBox"));

app.get("/*", (req, resp) => {
  resp.sendFile(__dirname + "/dist/SuggestionBox/index.html");
});

app.listen(process.env.PORT || 8080);
