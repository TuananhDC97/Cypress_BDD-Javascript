export const BOOK_STORE_PAGE_LOCATORS = {
    BTN_BOOK_STORE_LOCATOR: '//h5[text()="Book Store Application"] | //span[text()="Book Store"]',
    BTN_LOGIN_LOCATOR:'#login',
    TXT_USERNAME_LOCATOR:'#userName',
    TXT_PASSWORD_LOCATOR:'#password',
    LNK_BOOK_LOCATOR: (bookName) => `//a[text()="${bookName}"]`,
    BTN_ADD_TO_YOUR_COLLECTION_LOCATOR:'//button[text()="Add To Your Collection"]',
    BTN_PROFILE_LOCATOR:'//span[text()="Profile"]',
    BTN_DELETE_BOOK_LOCATOR: '#delete-record-undefined',
    BTN_CONFIRM_DELETE_BOOK_LOCATOR: '#closeSmallModal-ok',
    TXT_SEARCH_BOX_LOCATOR: '#searchBox',
    TXT_USERNAME_LOGGED_IN_LOCATOR: '#userName-value'
}