import { useEffect, useState } from "react";
import Context from "../contexts/context";
import { useSpeechSynthesis } from "react-speech-kit";
import { useToast } from "@chakra-ui/react";

function ContextWrapper({ children }) {
  const [originalText, setOriginalText] = useState(null);
  const [originalLanguage, setOriginalLanguage] = useState('Select Language');
  const [targetLanguage, setTargetLanguage] = useState('Select Language');
  const [langList , setLangList] = useState()
  const [loading,setLoading] = useState(true)
  const { speak } = useSpeechSynthesis();
  const toast = useToast()

  const fetchLanguages = async () => {

    const res = await fetch("/languages", {
      method: "GET",
      mode: "no-cors",
      
      headers: {
        'Content-Type': 'application/json'
    },
    })

    const langs = await res.json()
     setLangList(langs)

    // Set Default source and target languages

  };
  const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
  }

  useEffect(() => {
    // Fetch Languages
    fetchLanguages()
    .then(() => {
      setLoading(false)
    })

    .catch(e => {
      console.log(e.message);
    })

  },[])

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
    toast
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export default ContextWrapper;
