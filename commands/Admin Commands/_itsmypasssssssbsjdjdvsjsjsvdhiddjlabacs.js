/*CMD
  command: /itsmypasssssssbsjdjdvsjsjsvdhiddjlabacs
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: š Stop, Este Menu Es Solo para la administracion, Introduce tu clave :
  keyboard: 
  aliases: 
CMD*/

if (message == "PhoenixAdmin") {
  Bot.sendKeyboard(
    "š Saldo š,š” Canal š”,\nš² Mensaje š²,ā­ Verificar ā­,\nLogin\nBack To Menu",
    "Bienvenido š"
  )
} else {
  Bot.sendMessage("š Clave Incorrecta")
}

