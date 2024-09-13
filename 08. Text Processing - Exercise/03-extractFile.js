function extractFile(string) {
    const file = string.split("\\").pop();
    const lastDotIndex = file.lastIndexOf(".");
    const fileName = file.substring(0, lastDotIndex);
    const extension = file.substring(lastDotIndex + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
 }