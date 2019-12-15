export class Constants {
    static readonly MAX_LENGTH_30: number = 30;
    static readonly NAME_PATTERN: string = '^([a-zA-z]{1,}\'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)';
    static readonly USERNAME_PATTERN: string = '^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$';
    static readonly EMAIL_PATTERN: string = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?w+)*(\\.\\w{2,3})+$';
    static readonly PASSWORD_PATTERN: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,100}$';
}