/*CMD
  command: /live 
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: š¶ live
CMD*/

                                                                                                  

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd
var id = "CRYPTOTRXTMBOT" 
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
Api.sendPhoto({
photo:"https://t.me/RFGHJKL4/6",
caption:"š *Live TRX price:* \n`1 TRX` = `" + TRX.toFixed(8) + "$`" + "\n\n" + "*š Server Time:*" +"\n`" +time+"`" + "\n\n" + "š[ @"+id+"]" + "\n\nš  Admin: @CRYPTOTRXTM",parse_mode : "Markdown" , disable_web_page_preview: true
});
