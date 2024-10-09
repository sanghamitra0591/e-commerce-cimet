export const showEllipsis = (str, wordCount) => {
  const data = str.split(" ").slice(0, wordCount).join(" ");
  return data;
}