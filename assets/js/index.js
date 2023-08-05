import { getFormData, getById, signUp,signIn } from "./config/utils.js";

/**
 * Sign Up process
 */
getById("signup").addEventListener("click", signUp);
getById("signin").addEventListener("click", signIn);