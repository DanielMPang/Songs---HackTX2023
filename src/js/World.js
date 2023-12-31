async function fetchData() {
  const result = await fetch('../data/mappingAcronyms.csv');
  const data = await result.text();
  return data;
}

async function main() {
  let acronym = await fetchData();
  console.log(acronym); // This will be the CSV data as a string

  const gElement = document.getElementById('au'); // Replace 'au' with the actual id
  const aElement = document.createElement('a');
  aElement.setAttribute('xlink:title', 'Australia'); // Replace with your desired URL
  aElement.setAttribute('xlink:href', 'https://example.com'); // Replace with your desired URL

  while (gElement.firstChild) {
      aElement.appendChild(gElement.firstChild);
    }
    
    // Append the <a> element to <g>
    gElement.appendChild(aElement);

}

main()

// parseCSVFile().then(() => {
//     // You can access `parsedData` here, after the data has been parsed
//     // console.log(parsedData);
// });
// console.log(acronym)
// console.log("hi2")



// <!-- async function fetchData() {
//     const result = await fetch('../data/mappingAcronyms.csv');
//     const data = await result.text();
//     return data;
//   }
  
//   async function main() {
//     let acronym = await fetchData();
//     console.log(acronym); // This will be the CSV data as a string
  


    
    
//   } -->
//   <!-- main() -->


