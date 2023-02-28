export const url = (path) => {
    return JSON.stringify(path).replaceAll('"', '');
}
