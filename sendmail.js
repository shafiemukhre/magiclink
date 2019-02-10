function sendAutoEmail() {
  var sh=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lrow=sh.getLastRow();

  var googleLogoUrl = "https://laserimagenc.com/wp-content/uploads/2018/06/180507-Envelope-Sirius1-10.jpg";

  var googleLogoBlob = UrlFetchApp
                         .fetch(googleLogoUrl)
                         .getBlob()
                         .setName("googleLogoBlob");

  for(var i=2;i<=lrow;i++)
  {
MailApp.sendEmail(sh.getRange(i,1).getValue(), sh.getRange(i,2).getValue(),sh.getRange(i,3).getValue(), {
    htmlBody: "<a href='www.google.com'> <img src='cid:googleLogo'></a>",
    inlineImages:
      {
        googleLogo: googleLogoBlob
      }
    });
  }
}
