const getPageInfoCallback = () => {};

// async function logListener(info) {
//   try {
//     // let tabInfo = await browser.tabs.get(info.tabId);
//     .sendMessage(tab.id, { target: "packd", data: { action: "pack" } })
//     console.log(tabInfo);
//   } catch (error) {
//     console.error(error);
//   }
// }

// browser.tabs.onActivated.addListener(logListener);

// async successCallback(tabs){
//   let windowRecord = [];

//   tabs.forEach((tab) => {
//     //

//     browser.tabs
//       .sendMessage(tab.id, { target: "packd", data: { action: "pack" } })
//       .then((pack) => {
//         console.log("pack: " + pack);
//         // windowRecord.push(
//         //   Object.assign(
//         //     {
//         //       pack: pack,
//         //     }
//         //     // tabInfoToRecord(await browser.tabs.get(getTabId(tabEntry)))
//         //   )
//         // );
//       })
//       .catch((reason) => {
//         // windowRecord.push(
//         //   Object.assign(
//         //     {
//         //       pack: undefined,
//         //     }
//         //     // tabInfoToRecord(await browser.tabs.get(getTabId(tabEntry)))
//         //   )
//         // );
//       });
//   });
// };
const failureCallback = () => console.log("Something went wrong");

async function successCallback(tabs) {
  for (const tab of tabs) {
    const tabInfo = await browser.tabs.get(tab.id);
    console.log(tabInfo);
  }
}

let allTabs = browser.tabs
  .query({ currentWindow: true })
  .then(successCallback, failureCallback);
