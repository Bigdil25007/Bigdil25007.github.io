/**
 * Format text to HTML
 * \n -> <br>
 * **text** -> <strong>text</strong>
 * 
 */
const formatHTML = (text) => {
    const strongRegex = /\*\*(.*?)\*\*/g;
    const backlineRegex = /\n/g;

    text = text.replace(strongRegex, '<strong>$1</strong>');
    text = text.replace(backlineRegex, '<br>');

    return text;
};

export { formatHTML };