class Desk {
  constructor(length, width, height, isWhiteboard){
      this.length = length,
      this.width = width, 
      this.height = height,
      this.isWhiteboard = isWhiteboard,
      this.content = ""
  }
  write(str){
    return this.content += str
  }
  wipe(){
    if(this.isWhiteboard) return this.content = ""
  }
}
module.exports = Desk
