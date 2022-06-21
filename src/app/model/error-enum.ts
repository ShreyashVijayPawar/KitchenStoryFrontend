export enum ErrorEnum {
    // Failure Messages
    INVALID_PASSWORD = "Invalid Password. Please try again with valid password.",
    INVALID_USER_ID = "Invalid User Id. Please try again with valid user id.",
    USER_ALREADY_EXISTS = "User Id Already Exists. Please try again with different User Id.",
    NOT_AUTHENTICATED = "Please Login to access this URL.",
    NOT_AUTHORIZED = "You are not authorized to access this URL.",

    // Success Messages
    PASSWORD_RESET_SUCCESS = "Password Reset Success.",
    FOOD_DELETION_SUCCESS = "Food Item deleted successfully.",

    // Connection Messages
    JSON_CONNECTION_FAILED = "JSON Server Connection Failed.",
}
