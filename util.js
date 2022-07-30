export function formatDateTime(input){
    let month = (date.getMonth()+1).toLocaleString('en-US', {minimumIntegerDigits: 2});
    let output = `${month}/${day}/${date.getFullYear()}`;
    let date = new Date(input);
    let day = date.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2});
    output += ` - ${date.getHours()}:${date.getMinutes()}`
    return output;
  }