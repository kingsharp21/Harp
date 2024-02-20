import httpAdaptor from "./httpAdaptor";

 export const login = async (username, pass) => {
    const url = `/login1.php?xxname=${username}&xxpass=${pass}`;
    try {
      const response = await httpAdaptor.get(url);
      return response;
      
    } catch (error) {
      throw error;
    }
  };


 export const register = async (number, pass, name) => {
  const userid = 23113123
    const url = `/saveuser1.php?name=${name}&userid=${userid}&xxname=${number}&xxpass=${pass}&lagent=kw&source=worchitapp`;
    try {
      const response = await httpAdaptor.get(url);
      return response;
      
    } catch (error) {
      throw error;
    }
  };