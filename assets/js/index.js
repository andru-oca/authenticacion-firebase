import { getFormData, getById, signUp } from "./config/utils.js";

/**
 * Sign Up process
 */
getById("signup").addEventListener("click", signUp);
