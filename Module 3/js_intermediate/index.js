// const now = new Date();
// console.log(now); // 2023-03-26T11:45:59.096Z
// console.log(+now); // 1679832116638 - number of milliseconds since epoch

// const christmas = new Date("2023-12-25"); // assumes UTC timezone if time not included
// console.log(christmas); // 2023-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0
// const nyeLocal = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
// const nyeUTC = new Date("2023-12-31 23:59:59+00:00"); // specific timezone specified (UTC)
// console.log(nyeLocal); // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different
// console.log(nyeUTC); // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezon

const christmas = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas.toLocaleDateString()); // 25/12/2023 - dd/mm/yyyy if in Australia/NZ

console.log(christmas.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }));

console.log(christmas.toLocaleString("en-PH", { timeZone: "Asia/Manila" }));
