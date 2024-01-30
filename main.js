import inquirer from "inquirer";
async function AskQuestion() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "Q1",
            choices: ["good", "better", "best", "none of these"],
            message: "Ahmed is a ------ boy."
        },
        {
            type: "list",
            name: "Q2",
            choices: ["good", "better", "best", "none of these"],
            message: "Ahmed is the ------ boy."
        },
        {
            type: "list",
            name: "Q3",
            choices: ["good", "better", "best", "none of these"],
            message: "Ahmed is ------ than Ali."
        },
        {
            type: "list",
            name: "Q4",
            choices: ["a", "an", "the", "none of these"],
            message: "He is the ------ tallest boy in the class."
        },
        {
            type: "list",
            name: "Q5",
            choices: ["good", "better", "best", "very good"],
            message: "Ali is the ------ student is the class."
        },
        {
            type: "list",
            name: "Q6",
            choices: ["big", "bigger", "biggest", "none of these"],
            message: "This is a ------ house."
        },
        {
            type: "list",
            name: "Q7",
            choices: ["good", "better", "best", "none of these"],
            message: "This house is ------ than that."
        },
        {
            type: "list",
            name: "Q8",
            choices: ["big", "bigger", "biggest", "none of these"],
            message: "This is the ------ house."
        },
        {
            type: "list",
            name: "Q9",
            choices: ["beautiful", "more beautiful", "most beautiful", "none of these"],
            message: "Sara is a ------ girl."
        },
        {
            type: "list",
            name: "Q10",
            choices: ["tall", "very tall", "taller", "tallest"],
            message: "Bilal is the ------ boy in the class."
        }
    ]);
    const marks = 10;
    const fail = 0;
    if (answer.Q1 === "good") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answer.Q2 === "best") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answer.Q3 === "better") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log(("Answer is not correct"));
        };
    if (answer.Q4 === "the") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answer.Q5 === "best") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answer.Q6 === "big") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answer.Q7 === "better") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answer.Q8 === "biggest") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answer.Q9 === "beautiful") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answer.Q10 === "tallest") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
}
AskQuestion();
