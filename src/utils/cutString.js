const cutString = (length, str) => {
  if (str.length < length) return str;
  return str.substring(0, length) + '...';
};

export default cutString;
