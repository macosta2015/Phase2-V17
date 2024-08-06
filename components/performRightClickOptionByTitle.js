// performRightClickOptionByTitle.js
async function performRightClickOptionByTitle(newPage, selector, title) {
    console.log('performRightClickOptionByTitle.');

    try {
        // Find elements with the specified title
        const elements = await newPage.$$(`${selector}[data-bs-original-title="${title}"]`);

        if (elements.length > 0) {
            // Scroll into view and right-click on the first matching element
            await elements[0].scrollIntoView();
            await elements[0].click({ button: 'right' });
            console.log(`Right-clicked on element with title "${title}".`);
        } else {
            throw new Error(`No element found with title "${title}" using selector "${selector}".`);
        }

        // Wait for the context menu item to appear
        const menuItemSelector = '.context-menu-item-span';
        await newPage.waitForSelector(menuItemSelector, { visible: true, timeout: 5000 });
        console.log('Context menu item appeared.');

        // Retrieve context menu items
        const editOptions = await newPage.evaluate(() => {
            const menuItems = document.querySelectorAll('.context-menu-item-span');
            return Array.from(menuItems).map(item => item.textContent.trim());
        });
        console.log('Retrieved context menu options:', editOptions);

        console.log('Right-click process ended.');
        return editOptions;

    } catch (error) {
        console.error('Error during right-click process:', error);
        throw error;
    }
}

module.exports = { performRightClickOptionByTitle };



// async function performRightClickById(newPage, dataId) {
//     console.log('Right-click process started.');

//     try {
//         // Wait for the element with the specified data-id to be available
//         const selector = `div[data-id="${dataId}"]`;
//         await newPage.waitForSelector(selector, { visible: true, timeout: 20000 });
//         console.log(`Selector "${selector}" is available.`);

//         // Find elements with the specified data-id
//         const elements = await newPage.$$(selector);
//         console.log(`Found ${elements.length} elements with data-id "${dataId}".`);

//         if (elements.length > 0) {
//             // Scroll into view and right-click on the first matching element
//             await elements[0].scrollIntoView();
//             await newPage.waitForTimeout(100); // Give some time for scrolling
//             await elements[0].click({ button: 'right' });
//             console.log(`Right-clicked on element with data-id "${dataId}".`);
//         } else {
//             throw new Error(`No element found with data-id "${dataId}".`);
//         }

//         // Wait for the context menu item to appear
//         const menuItemSelector = '.context-menu-item-span';
//         await newPage.waitForSelector(menuItemSelector, { visible: true, timeout: 5000 });
//         console.log('Context menu item appeared.');

//         // Retrieve context menu items
//         const editOptions = await newPage.evaluate(() => {
//             const menuItems = document.querySelectorAll('.context-menu-item-span');
//             return Array.from(menuItems).map(item => item.textContent.trim());
//         });
//         console.log('Retrieved context menu options:', editOptions);

//         console.log('Right-click process ended.');
//         return editOptions;

//     } catch (error) {
//         console.error('Error during right-click process:', error);
//         throw error;
//     }
// }

// module.exports = { performRightClickById };
