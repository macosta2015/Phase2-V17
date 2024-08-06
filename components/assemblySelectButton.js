
// SELECT ASSEMBLYSELECTBUTTON
async function assemblySelectButton(newPage) {
    console.log("assemblySelectButton");

    console.log('SELECTING THE TAB LIST ITEM.');

    // Wait for the page to load completely
    await newPage.waitForTimeout(5000); // Adjust the timeout if necessary

    // Log the current URL to ensure we are on the right page
    const currentUrl = newPage.url();
    console.log('Current URL:', currentUrl);

    // Wait for the element to appear in the DOM
    try {
        await newPage.waitForSelector('tab-list-item[data-id="f3cf3888a94132b28fcd2520"]', { timeout: 10000 });
        console.log('Tab list item found within timeout.');
    } catch (e) {
        console.error('Tab list item not found within timeout.');
        return;
    }

    // Ensure the element is visible and interactable
    const isVisible = await newPage.evaluate(() => {
        const tabListItem = document.querySelector('tab-list-item[data-id="f3cf3888a94132b28fcd2520"]');
        if (tabListItem) {
            const rect = tabListItem.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0;
        }
        return false;
    });

    if (!isVisible) {
        console.error('Tab list item is not visible or interactable.');
        return;
    }

    // Click and scroll into view
    await newPage.evaluate(() => {
        const tabListItem = document.querySelector('tab-list-item[data-id="f3cf3888a94132b28fcd2520"]');
        if (tabListItem) {
            console.log('Tab list item found.');
            tabListItem.click();
            tabListItem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        } else {
            console.error('Tab list item not found.');
        }
    });
}

module.exports = assemblySelectButton;
