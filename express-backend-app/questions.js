export const QUESTIONS = [
    {
        title: "Two states",
        description: "Given an array, return the maximum of the array?",
        testCases: [{
            input: "[1, 2, 3, 4, 5]",
            output: "5"
        }, {
            input: "[-3, 0, 7, -10, 12]",
            output: "12"
        }, {
            input: "[10, -5, 8, 20, 3]",
            output: "20"
        }, {
            input: "[0, 0, 0, 0, 0]",
            output: "0"
        }, {
            input: "[-1, -2, -3, -4, -5]",
            output: "-1"
        }]
    },
    {
        title: "Sum of Two Numbers",
        description: "Given two numbers, return their sum.",
        testCases: [
            {
                input: "2, 3",
                output: "5"
            },
            {
                input: "-5, 8",
                output: "3"
            },
            {
                input: "0, 0",
                output: "0"
            },
            {
                input: "10, -7",
                output: "3"
            },
            {
                input: "3.14, 1.86",
                output: "5"
            }
        ]
    },
    {
        title: "Reverse String",
        description: "Given a string, return the string reversed.",
        testCases: [
            {
                input: "'hello'",
                output: "'olleh'"
            },
            {
                input: "'world'",
                output: "'dlrow'"
            },
            {
                input: "'12345'",
                output: "'54321'"
            },
            {
                input: "'a'",
                output: "'a'"
            },
            {
                input: "''",
                output: "''"
            }
        ]
    },
    {
        title: "Factorial",
        description: "Given a number, return its factorial.",
        testCases: [
            {
                input: "5",
                output: "120"
            },
            {
                input: "0",
                output: "1"
            },
            {
                input: "10",
                output: "3628800"
            },
            {
                input: "1",
                output: "1"
            },
            {
                input: "8",
                output: "40320"
            }
        ]
    }
];