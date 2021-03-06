  //index.js
//获取应用实例
const app = getApp()
var isButtonDown = false; 
Page({
  data: {
    generateOk: true,
    chessboardDatas: [
      [11, 12, 13, 14, 15, 16, 17, 18, 19],
      [21, 22, 23, 24, 25, 26, 27, 28, 29],
      [31, 32, 33, 34, 35, 36, 37, 38, 39],
      [41, 42, 43, 44, 45, 46, 47, 48, 49],
      [51, 52, 53, 54, 55, 56, 57, 58, 59],
      [61, 62, 63, 64, 65, 66, 67, 68, 69],
      [71, 72, 73, 74, 75, 76, 77, 78, 79],
      [81, 82, 83, 84, 85, 86, 87, 88, 89],
      [91, 92, 93, 94, 95, 96, 97, 98, 99],
    ]
  },


  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
    
  },
  clickMe: function() {

  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    //使用wx.createContext获取绘图上下文context  
    var context = wx.createCanvasContext('can1')
    let phoneWidth = wx.getSystemInfoSync().screenWidth
    let ratio = 750/phoneWidth
    let boardWidth = 675
    let lineWidth1 = 4.5
    let lineWidth2 = 1.5
    let cellWidth = (boardWidth - lineWidth1 * 4 - lineWidth2 * 6) / 9
    console.log(ratio)
    context.setStrokeStyle("#000000")
    context.setLineWidth(lineWidth1 / ratio)
    var startpointx = lineWidth1 / 2 / ratio
    var startpointy = lineWidth1 / 2 / ratio
    var tempWidth = (boardWidth - lineWidth1 * 1.5) / ratio
    var tempHeight = (boardWidth - lineWidth1 * 1.5) / ratio
    context.rect(startpointx, startpointy, tempWidth, tempHeight)
    //border

    startpointx = (cellWidth * 3 + lineWidth1 * 1.5 + lineWidth2 * 2) / ratio
    tempWidth = (cellWidth * 3 + lineWidth2 * 2 + lineWidth1) / ratio
    context.rect(startpointx, startpointy, tempWidth, tempHeight)
    context.rect(startpointy, startpointx, tempHeight, tempWidth)
    context.stroke()
    //devide board into 9 parts

    context.setLineWidth(lineWidth2 / ratio)
    startpointx = (cellWidth + lineWidth1 + lineWidth2 / 2) / ratio
    startpointy = lineWidth2 / 2
    tempWidth = (cellWidth + lineWidth2) / ratio
    tempHeight = (boardWidth - lineWidth2 * 1.5) / ratio
    context.rect(startpointx, startpointy, tempWidth, tempHeight)
    context.rect(startpointy, startpointx, tempHeight, tempWidth)
    startpointx = (cellWidth * 4 + lineWidth1 * 2 + lineWidth2 * 2.5) / ratio
    context.rect(startpointx, startpointy, tempWidth, tempHeight)
    context.rect(startpointy, startpointx, tempHeight, tempWidth)
    startpointx = (cellWidth * 7 + lineWidth1 * 3 + lineWidth2 * 4.5) / ratio
    context.rect(startpointx, startpointy, tempWidth, tempHeight)
    context.rect(startpointy, startpointx, tempHeight, tempWidth)
    context.rect()
    //devide part into 9 cells
    context.stroke()
    context.draw()
  },
  canvasStart: function (event) {
    isButtonDown = true;
    arrz.push(0);
    arrx.push(event.changedTouches[0].x);
    arry.push(event.changedTouches[0].y);
    //context.moveTo(event.changedTouches[0].x, event.changedTouches[0].y);  
  },  

})
