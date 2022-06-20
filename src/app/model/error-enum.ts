export enum ErrorEnum {
// USER-MESSAGES
    // Invalid Messages
    INVALID_PASSWORD = "Invalid Password. Please try again with valid password.",
    INVALID_USER_ID = "Invalid User Id. Please try again with valid user id.",
    USER_ALREADY_EXISTS = "User Id Already Exists. Please try again with different User Id.",
    NOT_AUTHENTICATED = "Please Login to access this URL.",
    NOT_AUTHORIZED = "You are not authorized to access this URL.",

    // Success Messages
    PASSWORD_RESET_SUCCESS = "Password Reset Success.",
    SIGN_IN_SUCCESS = "User Signed In Successfully.",
    REGISTRATION_SUCCESS = "User Registered Successfully.",


// FOOD-MESSAGES
    // Success Messages
    DATA_FETCH_SUCCESS = "Data Fetched Successfully.",
    FOOD_DELETION_SUCCESS = "Food Item deleted successfully.",
    FOOD_ADD_SUCCESS = "Food Added Successfully",
    ORDER_PROCESSING = "Processing your order",
    ORDER_PLACED_SUCCESS = "Order Placed Successfully",

// Connection Failed Messages
    JSON_CONNECTION_FAILED = "JSON Server Connection Failed.",
}
