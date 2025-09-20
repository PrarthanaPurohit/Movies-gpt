export const checkValidData = (email, password, fullName) => {
  const isEmailValid =
    /^[a-z0-9!#$%&'\*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'\*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/.test(password);
  const isFullNameValid =
    /^[a-zA-Z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u01FF]+([ \\-\\']{0,1}[a-zA-Z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u01FF]+){0,2}[.]{0,1}$/.test(
      fullName
    );

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  // ✅ Only check fullName if it’s provided (sign up case)
  if (fullName !== undefined && fullName.trim() !== "") {
    const isFullNameValid =
      /^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+([ \-']{0,1}[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+){0,2}[.]?$/.test(
        fullName
      );
    if (!isFullNameValid) return "Name is not valid";
  }

  return null;
};
