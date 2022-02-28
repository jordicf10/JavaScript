/*var person = {
    name : 'Jordi',
    age : 38,
    genre : 'masculine',
    job : 'unemployed',
    team : 'Barça',
    salutation : function (){
        return 'Hi everyone!Let me explain in a few words who am I.';
    },
    petition : function (){
        let salut = person.salutation();
        document.write(salut + ' I\'m ' + person.name + ' and I\m ' + person.age + ' years old. I\'m defined as ' + person.genre + '. Right now, I\'m ' + person.job + ' and my favorite team is ' + person.team)

    }
}

person.petition();*/


var person = {
    name : prompt('What\'s your name?'),
    
    age : prompt('How old are you?'),
    genre : prompt("Define your genre or tendence"),
    job : prompt('Which is your job?'),
    team : prompt('What is your favorite team?'),
    salutation : function (){
        return 'Hi everyone!Let me explain in a few words who am I. ';
    },
    petition : function (){
        let languages = prompt("How many languages do you know?");
        let expYears = prompt("How many years have you worked in this sector?");
        document.write(this.salutation() + ' I\'m ' + this.name + ' and I\'m ' + this.age + ' years old. I\'m defined as ' + this.genre + '. Right now, I\'m ' + this.job + ', so I\'ll tell you that I know ' + languages + ' and I\'ve worked with them ' + expYears +  '. To ending, most important thing, my favorite team is ' + this.team);

    }
}

person.petition();