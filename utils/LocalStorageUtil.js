class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        products.push(id);
        localStorage.setItem(this.keyName, JSON.stringify(products));
    }
}
const localStorageUtil = new LocalStorageUtil();

const a = localStorageUtil.getProducts();
console.log(a);