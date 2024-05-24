const formatBackline = (text) => {
    return text.replace(/\n/g, '<br>');
};

const getContent = (yml, lang) => { 
  return lang ? yml[lang] : yml.fr;
}

export { formatBackline, getContent };