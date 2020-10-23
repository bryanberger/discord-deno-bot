export const tempSuffixes = ['f', 'c']

function convertCtoF(celsius: number) {
  const conversion = Math.round((celsius * 9) / 5 + 32)
  const message = celsius + '\xB0C is ' + conversion + '\xB0F.'

  return message
}

function convertFtoC(fahrenheit: number) {
  const conversion = Math.round(((fahrenheit - 32) * 5) / 9)
  const message = fahrenheit + '\xB0F is ' + conversion + '\xB0C.'

  return message
}

export const convert = (degrees: number, suffix: string) => {
  if (suffix == tempSuffixes[0]) {
    return convertFtoC(degrees)
  } else if (suffix == tempSuffixes[1]) {
    return convertCtoF(degrees)
  } else {
    return ``
  }
}
