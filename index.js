class Formatter {
  //add static methods here
  static capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string){
    let uncapitalizedStrings = {
      the: '', 
      a: '', 
      an: '', 
      but: '', 
      of: '', 
      and: '', 
      for: '', 
      at: '', 
      by: '',
      from: ''
    }

    let array = string.split(" ");

    let newArray = array.map(currString => {
      if(uncapitalizedStrings[currString] === undefined){
        return this.capitalize(currString);
      } else {
        return currString
      }
    })

    newArray[0] = this.capitalize(array[0]);

    return newArray.join(" ")
  }
}