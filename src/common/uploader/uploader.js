export default (photo, body = null) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    base64: photo.base64,
    type: photo.type,
    uri:
      Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
  });

  if (body)
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

  return data;
};
