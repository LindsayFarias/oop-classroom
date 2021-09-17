class Student {
  constructor(name, skillLevel){
      this.name = name,
      this.skillLevel = skillLevel,
      this.assignments = []
    }
    study(){
        if(this.skillLevel == 100) console.log(`${this.name} is at the highest skill level`)
        else this.skillLevel++
        return this
    }

    doHomework(object){
      if(object){

        if (!object.skillLevel || object.skillLevel < 1 || object.skillLevel > 100) {
            console.log(`${object.title} is not within the skill level range from 1 - 100!`)
            return
        }
        
        if (object.skillLevel > this.skillLevel) {
            object.completed = false
            this.assignments.push(object) 
        }
        
        if (object.skillLevel <= this.skillLevel) {
            object.completed = true
            this.assignments.push(object)
        }
      }

      else {
        for (let hw of this.assignments) {
            if (hw.completed === false){
                if(hw.skillLevel <= this.skillLevel){
                    hw.completed = true
                }
            }
        }
    }
  }
}



//Test to see if doHomework function is working properly:

const lindsay = new Student("Lindsay", 3)
lindsay.doHomework({
    title: "Cooking in a Pinch",
    skillLevel: 2
})
lindsay.doHomework({
    title: "Culinary Classics",
    skillLevel: 20
})
lindsay.doHomework({
    title: "Cake Decorating 101",
    skillLevel: 5
})
lindsay.doHomework({
    title: "How to Make a Hot Dog",
    skillLevel: 0
})
lindsay.doHomework({
    title: "Once Upon a Chef",
    skillLevel: 35
})
lindsay.doHomework({
    title: "Dessert Person",
    skillLevel: 80
})
console.log(lindsay)
lindsay.study().study().study().study().study().study().study().study().study().study().study().study().study().study().study()
lindsay.doHomework()
console.log(lindsay)
lindsay.study().study().study().study().study().study().study().study().study().study().study().study().study().study().study()
lindsay.doHomework()
console.log(lindsay)
module.exports = Student
