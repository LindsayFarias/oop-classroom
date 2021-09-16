class Marker {
  constructor(size, color, remainingInk){
      this.size = size,
      this.color = color,
      this.remainingInk = remainingInk
  }
  write(str){
    let charArray = str.split("")  
    let writtenString = ""
      charArray.map(char => {
          if(char === ' ') return writtenString += char 
          if(this.remainingInk === 0) return writtenString
          else {
              this.remainingInk -= 1
              writtenString += char
          }
      })
      return writtenString
      return this.remainingInk
  }
}

module.exports = Marker
