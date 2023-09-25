const { promisify } = require("util");
const fs = require("fs");

const readFile = promisify(fs.readFile);

const readTryJSON = async () => {
    try {
        const startTime = performance.now();

        const [studentsData, tryData] = await Promise.all([
            readFile("./data/students.json", "utf-8"),
            readFile("./data/try.json", "utf-8"),
        ]);

        const endTime = performance.now();

        const executionTime = endTime - startTime;

        // console.log("students: ", studentsData);
        // console.log("try: ", tryData);

        console.log(`[Promise.all] Executed in ${executionTime} ms`);
    } catch (error) {
        console.error(error);
    }
};

const readFilePromise = () => {
    const startTime = performance.now();
    let endTime;

    readFile("./data/students.json", "utf-8")
        .then((students) => {
            // console.log("students: ", students);
            endTime = performance.now();

            return readFile("./data/try.json", "utf-8");
        })
        .then((tryData) => {
            const executionTime = endTime - startTime;
            // console.log("try: ", tryData);

            console.log(`[Promise] Executed in ${executionTime} ms`);
        })
        .catch((error) => console.error(error));
};

readFilePromise();
readTryJSON();
