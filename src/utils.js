/**
 * Format text to HTML
 * \n -> <br> (break line)
 * **text** -> <strong>text</strong> (make the tag bold)
 * [<tag>] -> &lt;tag&gt;  (treat HTML tags as text)
 */
const formatHTML = (text) => {
    const strongRegex = /\*\*\s*(.*?)\s*\*\*/g;
    const backlineRegex = /\n/g;
    const htmlTagRegex = /\[(<.*?>)\]/g;

    text = text.replace(strongRegex, '<strong>$1</strong>');
    text = text.replace(backlineRegex, '<br>');
    text = text.replace(htmlTagRegex, (match, p1) => {
        return p1.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    });

    return text;
};

export { formatHTML };