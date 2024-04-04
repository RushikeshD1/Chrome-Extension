document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-button');
  if (toggleButton) {
    toggleButton.addEventListener('click', async () => {
      let isOn = await chrome.storage.local.get('isEnabled'); 
      isOn = isOn.isEnabled === undefined ? true : 
      await chrome.storage.local.set({isEnabled: isOn}); // Update storage

      // Update button text based on isOn
      toggleButton.textContent = isOn ? 'Turn Off' : 'Turn On';

      // Send message to content script about the change (optional)
      if (chrome.runtime.sendMessage) { // Check for messaging availability
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { isOn: isOn });
        });
      } else {
        console.warn('Messaging API not available (background script might be missing)');
      }
    });
  } else {
    console.error('Toggle button element not found');
  }
});