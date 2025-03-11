
const setLocalStorage = (value) => {
    localStorage.setItem('commerce', JSON.stringify(value));
    return;
}

export default setLocalStorage;
