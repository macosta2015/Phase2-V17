// SELECT OK TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
async function selectOkButton(newPage) {
    console.log("selectOkButton");

    console.log('SELECTING THE OK ITEM ON THE LIST.');
    await newPage.evaluate(() => {
        const okButtonDiv = document.querySelector('div.ns-dialog-button-ok.button-ok');
        if (okButtonDiv) {
            okButtonDiv.click();
            okButtonDiv.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        } else {
            console.error('OK button not found.');
        }
    });
}

module.exports = selectOkButton;

// async function selectOkButton(newPage) {
//     console.log("selectOkButton");

//     console.log('SELECTING THE OK ITEM ON THE LIST.');
//     await newPage.evaluate(() => {
//         const okButtonDiv = document.querySelector('div.ns-dialog-button-ok.button-ok');
//         if (okButtonDiv) {
//             okButtonDiv.click();
//             okButtonDiv.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
//         } else {
//             console.error('OK button not found.');
//         }
//     });
// }

// module.exports = selectOkButton;
