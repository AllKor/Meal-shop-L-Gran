export const localStorageAPI = {
    getStorageItem(storageName) {
        let item = localStorage.getItem(storageName)
        item = JSON.parse(item) ?? []
        return item
    },
    setStorageItem(storageName, storageItem) {
        let item = JSON.stringify(storageItem)

        localStorage.setItem(storageName, item)
    },
    clearStorageItem(storageName) {
        localStorage.removeItem(storageName)
    },
    clearAllStorage() {
        localStorage.clear()
    }
}