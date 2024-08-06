// pasteIntoSketchFunction
async function pasteIntoSketchFunction(editOptions1, newPage) {
    const desiredOption = 'Paste into sketch';
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    try {
        console.log('Desired option:', desiredOption);

        console.log('Searching for the index of the desired option...');
        const desiredOptionIndex = editOptions1.indexOf(desiredOption);

        if (desiredOptionIndex !== -1) {
            console.log('Desired option found at index:', desiredOptionIndex);

            console.log('Evaluating option element...');
            const optionElement = await newPage.evaluateHandle((index) => {
                const menuItems = document.querySelectorAll('.context-menu-item-span');
                return menuItems[index];
            }, desiredOptionIndex);

            if (optionElement) {
                console.log('Option element found:', desiredOption);
                await optionElement.click();
                console.log(`Clicked on ${desiredOption} option element.`);

                // Dispose of the handle to prevent memory leaks
                await optionElement.dispose();
            } else {
                console.error(`${desiredOption} option element not found.`);
            }
        } else {
            console.error(`${desiredOption} option not found.`);
        }

        console.log('Function fully resolved.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

module.exports = pasteIntoSketchFunction;



// async function pasteIntoSketchFunction(editOptions1, newPage) {
//     try {
//         const desiredOption2 = 'Paste into sketch'; // TYPE WHICH EDIT OPTION YOU WANT TO CHOSE
//         console.log('Desired rename option:', desiredOption2);
//         await new Promise(resolve => setTimeout(resolve, 5000));
//         console.log('Waiting for 5 seconds...');

//         console.log('Searching for index of desired option...');
//         await new Promise(resolve => setTimeout(resolve, 5000));
//         const desiredOptionIndex = editOptions1.indexOf(desiredOption2);
//         console.log('Index of desired option:', desiredOptionIndex);
//         await new Promise(resolve => setTimeout(resolve, 5000));
//         console.log('Waiting for 5 seconds...');

//         if (desiredOptionIndex !== -1) {
//             console.log('Desired rename option found.');
//             await new Promise(resolve => setTimeout(resolve, 5000));

//             console.log('Evaluating option element... ', desiredOption2);
//             const renameOptionElement = await newPage.evaluateHandle((index) => {
//                 const menuItems = document.querySelectorAll('.context-menu-item-span');
//                 return menuItems[index];
//             }, desiredOptionIndex);
//             await new Promise(resolve => setTimeout(resolve, 5000));
//             console.log('Waiting for 5 seconds...');

//             if (renameOptionElement) {
//                 console.log('Option element found.', desiredOption2);
//                 await new Promise(resolve => setTimeout(resolve, 5000));
//                 await renameOptionElement.click();
//                 console.log(`Clicked on ${desiredOption2} option element.`);
//                 await new Promise(resolve => setTimeout(resolve, 5000));
//             } else {
//                 console.error(`${desiredOption2} option element not found.`);
//                 await new Promise(resolve => setTimeout(resolve, 5000));
//             }
//         } else {
//             console.error(`${desiredOption2} option not found.`);
//             await new Promise(resolve => setTimeout(resolve, 5000));
//         }
//         console.log('Waiting for 5 seconds...');
//         await new Promise(resolve => setTimeout(resolve, 5000));
//         console.log('Waiting 10 seconds.');
//         await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
//         console.log('Function fully resolved.');
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// module.exports = pasteIntoSketchFunction;
