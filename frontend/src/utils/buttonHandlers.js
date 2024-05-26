export function handleNext(step, setter) {
  setter(step + 1);
}

export function handleBack(step, setter) {
  setter(step - 1);
}

export function handleConfirm(step, setter) {
  alert("Confirmed!");
}
