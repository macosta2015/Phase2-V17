// SELECT ASSEMBLYSELECTBUTTON
async function assemblySelectButton(newPage) {
    console.log("assemblySelectButton");

    console.log('SELECTING THE TAB LIST ITEM.');
    await newPage.evaluate(() => {
        // Find the tab-list-item using its data-id attribute
        const tabListItem = document.querySelector('tab-list-item[data-id="f3cf3888a94132b28fcd2520"]');
        if (tabListItem) {
            // Click the tab-list-item
            tabListItem.click();
            // Scroll the tab-list-item into view smoothly and centered
            tabListItem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        } else {
            // Log an error if the tab-list-item is not found
            console.error('Tab list item not found.');
        }
    });
}

module.exports = assemblySelectButton;




