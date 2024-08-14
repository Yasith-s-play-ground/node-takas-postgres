export class UserValidation {
    static validateEmail(email) {
        if (!email.length)
            return false;
        return (/^[a-z0-9]+@[a-z]+\.[a-z]+$/).test(email);
    }
    static validateName(name) {
        if (!name.length)
            return false;
        return (/^[a-zA-Z ]+$/).test(name);
    }
    static validateContact(contact) {
        if (!contact.length)
            return false;
        return (/^0[0-9]{2}-[0-9]{7}$/).test(contact);
    }
}
//# sourceMappingURL=UserValidation.js.map