module.exports = async (d) => {
   const [title,author,description,color,thumbnail,timestamp,footer,url,...opts] = d.data.splits;

   let embed = {};
   embed.author={};
   embed.thumbnail = {};
   embed.footer = {};
   embed.fields = [];
   if (title !== undefined){
      embed.title = title.addB();
   }
   if (color !== undefined){
      embed.color = color.addB();
   }
   if (url !== undefined){
      embed.url=url.addB();
   }
   if (description !== undefined){
      embed.description = description.addB();
   }
   if (thumbnail !== undefined){
      embed.thumbnail.url = thumbnail.addB();
   }
   if (author !== undefined){
      embed.author.name=author.addB().split(":")[0];
      //embed.author.icon_url=author.addB().split(":")[1];
      //embed.author.url=author.addB().split(":")[2];
   }
   if (timestamp !== undefined && timestamp != false){
      embed.timestamp = new Date();
   }
   if (footer !== undefined){
      embed.footer.text = footer.addB().split(":")[0];
      //embed.footer.icon_url = footer.addB().split(":")[1];
   }
   
   
   if (opts !==undefined){
      for (let i = 0; i < opts.length; i++) {
         let txt = opts[i];
         embed.fields[i]={};
         embed.fields[i].name = txt.split(":")[0].addB();
         embed.fields[i].value = txt.split(":")[1].addB();
         embed.fields[i].inline = txt.split(":")[2] || false;
         
      }
   }
   return JSON.stringify(embed).delB();
}
