export const getHash = () => location.hash.replace(/#\/(\d{1,2})\/?/, "$1").toLowerCase() || "/";
// export const getHash = () => location.hash.slice().toLocaleLowerCase().split("/")[1] || "/";