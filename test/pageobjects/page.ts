export default class Page {
    public open (path: string) {
        return browser.url(`http://localhost:3000${path}`)
    }
}
