// Commmon global variable
const DB_DOMAIN = '127.0.0.1:8090';

// Common util
const isNull = (item) => {
  return (item === undefined || item === 'undefined' || item === null || item === 'null');
}

// API util
const api = async (path) => {
  try {
    if(isNull(path)) return null;
    const res = await fetch(`/api/${path}`);
    const jsonData = await res.json();
    return jsonData;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const getCategoryList = async () => {
  const categoryList = await api('category');
  console.log(categoryList)
  return categoryList;
}

export const getTrendingList = async () => {
  const trendingList = await api('trending');
  return trendingList;
}

export const getItemPicUrl = (item) => {
  try {
    const collectionId = item?.collectionId;
    const id = item?.id;
    const thumbnail = item?.thumbnail;
    if(isNull(collectionId) || isNull(id) || isNull(thumbnail)) return null;
    return `http://${DB_DOMAIN}/api/files/${collectionId}/${id}/${thumbnail}`;

  } catch(e) {
    console.error(e);
    return null;
  }
}