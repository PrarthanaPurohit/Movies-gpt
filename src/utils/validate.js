export const checkValidData = (email, password, fullName) => {
  // Practical email validation: avoids overly complex regex and unnecessary escapes
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/.test(password);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  // Only validate fullName when provided (signup flow). Keep the variable scoped here so it's used.
  if (fullName !== undefined && fullName.trim() !== "") {
    const isFullNameValid = /^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+([ \-']{0,1}[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+){0,2}[.]?$/.test(
      fullName
    );
    if (!isFullNameValid) return "Name is not valid";
  }

  return null;
};
