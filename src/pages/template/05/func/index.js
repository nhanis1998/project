function validatesIDVN(rule, value) {
  try {
    if (!value || value === "") return Promise.resolve();
  } catch (e) {
    return Promise.reject("Dm nhập số ID");
  }
}
