let exercises = ["Push-ups", "Sit-ups", "Bear Crawls", "1 mile run", "60 second plank", "Burpees", "Jumping Jacks", "Squats", "Weighted Squats", "Inch Worms"];

const randomExercises = numberofRandomExercises => {
    for (let i=0; i < numberofRandomExercises; i++){
        console.log(exercises[Math.floor(Math.random()*10)]);
    }
}

randomExercises(4);


const genBuzz = number => {
    for (i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            console.log("GenBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Gen");
        } else {
            console.log(i);
        }
    }
}

genBuzz(15);

const checkPrice = item => {
    switch (item) {
        case "Shoes":
            alert('Shoes- $50')
            break;
        case "Jeans":
            alert('Jeans- $25')
            break;
        case "Hat":
            alert('Hat - $12')
            break;
        case "Socks":
            alert('Socks- $2')
            break;
        default:
            alert('Invalid Item');
    }
}

checkPrice("Shoes");