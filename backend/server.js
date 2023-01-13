const {Translate} = require('@google-cloud/translate').v2;
const deepl = require("deepl-node");
const translator = new deepl.Translator(
  "beb3055e-402a-3bb9-68fa-13815e7876ff:fx"
);
const express = require("express");
const app = express();
var serviceAccount = require("./serviceAccountKey.json");

const translate = new Translate({
  credentials: serviceAccount,
  projectId: serviceAccount.project_id,
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/d/translate", (req, res) => {
  (async () => {
    const target_lang = req.body.target_lang;
    const source_lang = req.body.source_lang;
    const text = req.body.text;
 
    const result = await translator.translateText(
      text,
      source_lang,
      target_lang
    );

    const payload = {
      translation: result.text,
    };
    res.status(200).json(payload);
  })();
});

app.get("/api/d/languages", (req, res) => {
  (async () => {
    const sourceLanguages = await translator.getSourceLanguages();

    const targetLanguages = await translator.getTargetLanguages();
    const payload = {
      target_langs: targetLanguages,
      source_langs: sourceLanguages,
    };
    res.status(200).json(payload);
  })();
});

app.post("/api/g/translate", (req, res) => {
  const target_lang = req.body.target_lang;
  const source_lang = req.body.source_lang;
  const text = req.body.text;
  
  (async () => {
 
    let [translations] = await translate.translate(text, target_lang);
    // translations = Array.isArray(translations) ? translations : [translations];
    console.log(translations);
    const payload = {
      translation: translations,
    };
    res.status(200).json(payload);
    })();

});

app.get("/api/g/languages", (req, res) => {
  (async  () => {
    // Lists available translation language with their names in English (the default).
    const [languages] = await translate.getLanguages();
  

    const payload = {
      target_langs: languages,
      source_langs: languages,
    };
    res.status(200).json(payload);
  })();
});


const PORT = 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
