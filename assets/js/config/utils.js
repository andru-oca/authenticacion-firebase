import {
  auth,
  createUserWithEmailAndPassword,
  database,
  ref,
  set,
} from "./firebaseInit.js";

const regexpEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const validateEmail = (email) => regexpEmail.test(email);
const getFormData = (idForm) => new FormData(document.getElementById(idForm));
const getById = (id) => document.getElementById(id);

const writeUserData = (userId,user) => {

  set(ref(database, "users/",userId), user);
};

const signUp = async (e) => {
  e.preventDefault();

  const formularioId = "formValues";
  let formData = getFormData(formularioId);

  const email = formData.get("email");
  const password = formData.get("password");

  if (!validateEmail(email)) {
    alert("email not valid!");
    return;
  }

  try {
    let userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    let user = await userCredentials.user;

    console.log(user)

    const userSignUp = {
      email: email,
      lastLogin: Date.now(),
    };

    writeUserData(user.uid,userSignUp);

    alert(`User Created: ${email}`);

} catch (error) {
    console.log({ error });
  }
};

export { validateEmail, getFormData, getById, signUp };
