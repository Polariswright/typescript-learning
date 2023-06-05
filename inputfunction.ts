/**
 * Função que pega o valor do Input e mostra uma mensagem
 * 
 */
export class HomePage{
    constructor(private Importar:AlertController) {}
    async abrirMsg(){
        let input= (<HTMLInputElement>document.getElementById('input')).value
        if(input=='Poldo'){
          let msg2 = await this.Importar.create({
            header:'Mensagem',
            message:`Olá ${input}`,
            buttons:['Ain']
          })
          await msg2.present();
        
        }
}
