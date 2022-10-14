String.prototype.filter = function(bandedWord) {
    console.log(bandedWord);
    let res = this;
    // alert(this);
    for (let i=0; i< bandedWord.length; i++) {
        console.log("str"+bandedWord[i]);
        if(this.indexOf(bandedWord[i]) > 0){
            res = res.replace(bandedWord[i], "");
        }
    }
    return res;
};
console.log("i am not good".filter(["not","is"]));

Array.prototype.bubbleSort = function() {
    let arr = this;
    for(let i=0;i<arr.length;i++) {
        for (let j=i; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                //inter change
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j]=tmp;
            }
        }
    }
    return arr;
}
console.log([7,3,5,2,1].bubbleSort());


var Person = function() {};
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}

var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function() {};

Teacher.prototype = new Person();
Teacher.prototype.teach = function(sub) {
    return this.name + " teaches " + sub;
    // console.log(this.name + " teaches " + sub);
}

var professor = new Teacher();
professor.initialize("Hioi", 25);
professor.teach("Inheritance");
