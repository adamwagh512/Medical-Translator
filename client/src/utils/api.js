const deepl = require('deepl-node');

const authKey = "d9784efc-0947-0fb2-3e1d-9e4d38fd1151:fx"; // Replace with your key
const translator = new deepl.Translator(authKey);

(async () => {
    const result = await translator.translateText('You can do it Jordan!', null, 'ro');
    console.log(result.text); // Bonjour, le monde !
})();

export default Translator;