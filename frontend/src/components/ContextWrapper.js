import { useEffect, useState } from "react";
import Context from "../contexts/context";
import { useSpeechSynthesis } from "react-speech-kit";
import { useToast } from "@chakra-ui/react";
import * as diff from "diff";

function ContextWrapper({ children }) {
  const [originalText, setOriginalText] = useState(null);
  const [originalLanguage, setOriginalLanguage] = useState("Select Language");
  const [targetLanguage, setTargetLanguage] = useState("Select Language");
  const [langList, setLangList] = useState();
  const [deeplTranslation, setDeeplTranslation] = useState(null);
  const [googleTranslation, setGoogleTranslation] = useState(null);
  const [diffs, setDiffs] = useState([]);
  const langCodes = ['zh', 'ja', 'ko', 'ar', 'hi', 'th', 'bg',];
  const [loading, setLoading] = useState(true);
  const { speak } = useSpeechSynthesis();
  const toast = useToast();
  const [showDiff, setShowDiff] = useState(false);
  const [selectedPair, setSelectedPair] = useState({
    orig: null,
    secondPair: null,
  });

  useEffect(() => {
    if (
      showDiff &&
      googleTranslation?.translation &&
      deeplTranslation?.translation
    ) {
      // Check if target language is character-based
      // and use diff on a character-level
      // else use it on a word level

      langCodes.includes(targetLanguage.code)
        ? setDiffs(
            diff.diffChars(
              googleTranslation?.translation,
              deeplTranslation?.translation
            )
          )
        : setDiffs(
            diff.diffWords(
              googleTranslation?.translation,
              deeplTranslation?.translation
            )
          );
    }

    return () => null
  }, [showDiff, deeplTranslation, googleTranslation]);

  const fetchLanguages = async () => {
    const res = await fetch("https://api.transdigi.xyz/api/d/languages", {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },
    });

    const langs = await res.json();

    setLangList(JSON.parse(langs));

    // Set Default source and target languages
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    // Fetch Languages
    fetchLanguages()
      .then(() => {
        setLoading(false);
      })

      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const values = {
    originalText,
    originalLanguage,
    targetLanguage,
    setOriginalText,
    setOriginalLanguage,
    setTargetLanguage,
    langList,
    loading,
    speak,
    copyToClipboard,
    toast,
    deeplTranslation,
    setDeeplTranslation,
    googleTranslation,
    setGoogleTranslation,
    showDiff,
    setShowDiff,
    diffs,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export default ContextWrapper;
