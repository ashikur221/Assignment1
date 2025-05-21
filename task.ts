const formatString = (givenString: string, option: boolean = true): string => {
  if (option) {
    return givenString.toUpperCase();
  } else {
    return givenString.toLowerCase();
  }
}

console.log(formatString("Hello"))
console.log(formatString("Hello", true))
console.log(formatString("Hello", false))