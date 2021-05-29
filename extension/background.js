try {

function replaceImages () {
    if (! /www.kingdomofloathing.com/.test(document.URL)) {
        console.log('URL mismatxh')
        return
    }
    console.log('Updating images')
    let imgs = document.querySelectorAll('img');
    for (img of imgs) {
        if (/\/wallsparkle[0-9]*\.gif/.test(img.src)) {
            console.log(img.src)
            img.src = chrome.runtime.getURL('images/block.png')
            console.log(img.src)    
        }
            
    }
}

function fixTabs(tabId, changeInfo, tab) {
    console.log(changeInfo)
    if (changeInfo.status != 'loading') {
        return
    }
    chrome.scripting.executeScript({
        target: {tabId: tabId, allFrames: true},
        function: replaceImages
    })
}

chrome.tabs.onUpdated.addListener(fixTabs)
document.beforeprint.addListener(replaceimages)

} catch (e) {
  console.error(e);
}