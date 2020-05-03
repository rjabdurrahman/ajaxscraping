console.log({ peventName, plistenerFunc });
try {
    if (peventName == 'response') {
        const textBody = await plistenerFunc.text();
        await console.log('textBody:', textBody);
    }
} catch (err) {
    console.error(plistenerFunc, err);
    console.log(plistenerFunc, err);
}