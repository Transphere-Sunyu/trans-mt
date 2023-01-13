const deepl = require('deepl-node');
const translator = new deepl.Translator('beb3055e-402a-3bb9-68fa-13815e7876ff:fx');
const express = require("express");
const app = express();

app.use(express.json())  
app.use(express.urlencoded({ extended: true })); 

app.post("/translate", (req, res) => {
    (async () => {
        const target_lang = req.body.target_lang
        const source_lang = req.body.source_lang
        const text = req.body.text
        console.log(target_lang);
         
        const result = await translator.translateText(text, source_lang, target_lang);
 
        const payload = {
            "translation": result.text
 
            
        }
        res.json(payload)
    })();
});

app.get("/languages", (req, res) => {
    (async () => {
        const sourceLanguages = await translator.getSourceLanguages();

        const targetLanguages = await translator.getTargetLanguages();
        const payload = {
            "target_langs": targetLanguages,
            "source_langs": sourceLanguages    
        }
        res.json(payload)
    })();
});

const PORT = 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
