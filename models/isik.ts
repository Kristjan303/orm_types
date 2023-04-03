export class isik {
    constructor(
        private _id: number,
        private _accountName: string,
        private _password: string,
        private _firstName: string,
        private _lastName: string,
    ) {
    }

    get id() {
        return this._id;
    }

    get accountName() {
        return this._accountName;
    }

    get password() {
        return this._password;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set accountName(newAccountName: string) {
        this._accountName = newAccountName;
    }

    set password(newPassword: string) {
        this._password = newPassword;
    }
}