const validateUsername = (username: string) => {
  const regex = new RegExp(/^[a-zA-Z0-9]+$/);
  if (!regex.test(username)) {
    throw new Error(
      "Invalid characters for username. Only use letters and numbers."
    );
  }

  return true;
};

export default validateUsername;
