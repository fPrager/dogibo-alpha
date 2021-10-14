const getClientId = (
  forceNew: boolean = false,
) : string => {
  if (typeof window === 'undefined') return '';
  const id = localStorage.getItem('client');
  if (id && !forceNew) {
    return id;
  }
  const newId = Math.round(Math.random() * Date.now()).toString();
  localStorage.setItem('client', newId);
  return newId;
};

export default getClientId;
