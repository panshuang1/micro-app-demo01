const orderObj = {
  moudel: '01', // 01:运维中心 02：建管中心  03：地铁保护中心
  subMoudel: '01', // 01:智慧运维 02：智慧单板 03：进度管理中心 04：安全管理中心 05：地铁保护中心
  orderStr: 'page_switch', // page_switch：页面跳转 scene_switch:场景切换 click_tager:触发点击事件
  subOrderStr: 'china',
  /**
   *
   scene_switch  {china:"全国"  city:"城市 line:"线路" station:"站点"}
   click_tager {line:"点击线路",station:点击站点,platformBtn:"站台层按钮",stationHallBtn:"站厅层按钮",
   deviceRoomBtn:"设备间",return:"返回上一级"，ZCBtn:"ZC柜按钮"，ZCAlarm:"报警的ZC柜",BIMBtn:"BIM按钮",
   jigui:"选择机柜",banka:"板卡",closeJigui:"关闭机柜面板",closeBanka:"关闭板卡面板",deviceAlarm:"设备报警"}

   */

};
export default orderObj;
