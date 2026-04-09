export function createDateNow() {
  return new Date().toISOString();
}

export function createId() {
  const date = createDateNow();

  return `${date}${Math.random()}`;
}
