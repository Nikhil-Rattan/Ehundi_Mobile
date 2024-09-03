export default {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/
};
export const removeEmojis = (input:string) => {
    var result = '';
    if (input?.length == 0)
        return input;
    for (var indexOfInput = 0, lengthOfInput = input?.length; indexOfInput < lengthOfInput; indexOfInput++) {
        var charAtSpecificIndex = input[indexOfInput].charCodeAt(0);
        if ((32 <= charAtSpecificIndex) && (charAtSpecificIndex <= 126)) {
            result += input[indexOfInput];
        }
    }
    return result;
  }
  