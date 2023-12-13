function toCase(text) {
  // write your code here
	if (!text) {
    return '-';
 }

 // Convert the string to lowercase and uppercase
 const lowerCaseStr = text.toLowerCase();
 const upperCaseStr = text.toUpperCase();

 // Return the lowercase string, uppercase string with - as the delimiter
 return `${lowerCaseStr}-${upperCaseStr}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
