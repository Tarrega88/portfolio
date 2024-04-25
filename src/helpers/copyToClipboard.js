async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    // console.log("Text copied to clipboard successfully!");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}

export { copyToClipboard };
