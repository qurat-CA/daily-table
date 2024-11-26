import {request, RESULTS} from 'react-native-permissions';

const checkPermission = async (permission: string) => {
  try {
    const permissionResult = await request(permission);
    return permissionResult === RESULTS.GRANTED;
  } catch (error) {
    console.error('Permission check failed:', error);
    return false;
  }
};

export default checkPermission;
