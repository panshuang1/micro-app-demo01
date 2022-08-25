import http from './http';
// const baseUrl =  '/mock'
// const baseUrl = 'http://10.255.111.50:8080/';
// const baseUrl = '/venner';
const baseUrl = '';

function getUserInfo(data) {
  return http({
    method: 'post',
    url: `${baseUrl}/api/getUserInfo`,
    data,
  });
}
function login(data) {
  return http({
    method: 'post',
    url: `${baseUrl}/api/auth/login`,
    data,
  });
}
function loginOut(data) {
  return http({
    method: 'get',
    url: `${baseUrl}/api/casLoginOut`,
    params: data,
  });
}
function maxkeyLogin(data) {
  return http({
    method: 'post',
    url: '/maxkey/login',
    data,
  });
}
function getSubmenu(data) {
  return http({
    method: 'post',
    url: `${baseUrl}/api/getSubmenu`,
    data,
  });
}
function getDetailById(data) {
  return http({
    method: 'post',
    url: `${baseUrl}/api/getDetailById`,
    data,
  });
}
function getProduceTotalMonthly() {
  return http({
    method: 'get',
    url: `${baseUrl}/api/stdc/bigDataBoard/produceTotalMonthly`,
  });
}

function getFactoryProductionData() {
  return http({
    method: 'get',
    url: '/wanglei/wisdoomvenner/factoryProductionData',
  });
}
// 获取设备初始状态
function getcredentialId(credentialId) {
  return http({
    method: 'get',
    url: `${baseUrl}/api/plugins/telemetry/values/timeseries?credentialId=${credentialId}`,
  });
}
// 获取设备初始状态
function getcredentials(credentialId,code,num) {
  return http({
    method: 'post',
    url: `${baseUrl}/api/plugins/rpc/oneway/credentials/${credentialId}`,
    data:code
  });
}
//   获取设备信息
function getdeviceState(deviceId) {
  return http({
    method: 'get',
    url: `${baseUrl}/api/device/info/${deviceId}`,
  });
}
// 获取设备状态信息
function gettelemetryValue(deviceId) {
  return http({
    method: 'get',
    url: `/sqlSelect/stdc-device/device/telemetry/value`,
    params:{
      credentialId:deviceId
    }
  });
}
// 获取报警信息
function getalarm() {
  return http({
    method: 'post',
    url: `/sqlSelect/stdc-device/alarm/get`,
  });
}

export {
  getUserInfo, login, loginOut, maxkeyLogin, getSubmenu, getDetailById, getProduceTotalMonthly, getFactoryProductionData, getcredentialId,getdeviceState,gettelemetryValue,getalarm,getcredentials
};
