const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
    let result = '';
    let morse = '';
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        if (letter === '**********') {
            result += ' ';
        } else {
            for (let j = 0; j < letter.length; j += 2) {
                let symbol = letter.slice(j, j + 2);
                if (symbol === '10') {
                    morse += '.';
                } else if (symbol === '11') {
                    morse += '-';
                }
            }
            result += MORSE_TABLE[morse];
            morse = '';
        }
    }
    return result;
}

// function decode(expr) {
//      const morseWords = expr.split('   ');
//      const decodedMessage = morseWords.map(word => {
//          return word.split(' ').map(char => MORSE_TABLE[char]).join(' ');
//      }).join(' ');
//      return decodedMessage;
// }

// function decode(expr) {
//   let result = '';
//   for (let i = 0; i < expr.length; i += 10) {
//     const chunk = expr.slice(i, i + 10);
//     if (chunk === '**********') {
//       result += ' ';
//       continue;
//     }
//     let morseCode = '';
//     for (let j = 0; j < 10; j += 2) {
//       const pair = chunk.slice(j, j + 2);
//       if (pair === '10') morseCode += '.';
//       else if (pair === '11') morseCode += '-';
//     }
//     result += MORSE_TABLE[morseCode];
//   }

//   return result;
// }

module.exports = {
  decode,
};
