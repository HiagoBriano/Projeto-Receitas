import md5 from 'crypto-js/md5';

const fetchPhoto = async (email) => {
  const code = md5(email).toString();

  const response = await fetch(`https://pt.gravatar.com/${code}.json`);
  return response.json();
};

export default fetchPhoto;
