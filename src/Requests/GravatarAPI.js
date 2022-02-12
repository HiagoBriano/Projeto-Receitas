import md5 from 'crypto-js/md5';

const fetchPhoto = (email) => {
  const code = md5(email).toString();
  return `https://www.gravatar.com/avatar/${code}`;
};

export default fetchPhoto;
