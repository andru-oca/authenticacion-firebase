import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  database,
  ref,
  set,
} from "./firebaseInit.js";

const regexpEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const validateEmail = (email) => regexpEmail.test(email);
const getFormData = (idForm) => new FormData(document.getElementById(idForm));
const getById = (id) => document.getElementById(id);

const writeUserData = async (userId, user) => {
  await set(ref(database, `users/${userId}`), user);
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

    const userSignUp = {
      email: email,
      lastLogin: Date.now(),
    };

    await writeUserData(user.uid, userSignUp);

    alert(`User Created: ${email}`);
  } catch (error) {
    console.log({ error });
  }
};

const signIn = async (e) => {
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
    let userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    let user = await userCredentials.user;

    const userSignIn = {
      lastLogin: Date.now(),
    };

    await writeUserData(user.uid, userSignIn);

    window.location = "/pages/landing-page.html"
    
  } catch (error) {
    console.log({ error });
  }
};

export { validateEmail, getFormData, getById, signUp , signIn };
