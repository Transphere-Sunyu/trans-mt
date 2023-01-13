const deepl = require('deepl-node');
const translator = new deepl.Translator('beb3055e-402a-3bb9-68fa-13815e7876ff:fx');
const express = require("express");
const app = express();
  
app.post("/translate", (req, res) => {
    (async () => {
        const result = await translator.translateText('Hello, world!', null, 'zh');
        console.log(result.text); // Bonjour, le monde !
        const payload = {
            translation: result.text

        }
        res.send({
            translation: result.text

        })
    })();
});

const PORT = 8000;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
