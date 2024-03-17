/**
CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Venocyber-md
   * @author : Venocyber-Tech <https://github.com/kingjux>
   * @youtube : https://www.youtube.com/c/@JASTINMTEWA-vn9pl
   * @infoription : Venocyber-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.0 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Venocyber Tech.
   * © 2024 Venocyber-Md ✭ ⛥.
   * plugin date : 17/3/2024
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/







const {
    smd,
    tlang,
    prefix, 
    Config ,
    sleep,
    getBuffer, 
    smdJson,
    smdBuffer
     } = require('../lib')





smd({
    cmdname: "getall",
    desc: "get jid of all members of groups/pm chats/all groups.",
    type: "owner",
    fromMe:true,
    use:"[ members / user / groups ]",
    usage:"get jids of groups,personal chats, also members of group, so that used them for forward cmd!",
    filename: __filename,
    public : false,
},
async (citel, text, { store }) => {
  try{
let str = "";
    let cd = text.split(" ")[0]
    if(cd === "members" || cd === "member") {
      if (!citel.isGroup) return citel.reply(tlang("group"));
      const participants = citel.metadata.participants || {};
      for (let i of participants) {    str += `📍 ${i.id}\n`;   }
      str ? citel.reply(`*「 LIST OF GROUP MEMBER'S JID 」*\n\n` +str) : citel.reply("*Request Denied!*")
    }else if(cd == "user" || cd == "pm" || cd == "pc"){
        let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
        for (let i of anu) { str += `📍 ${i.id}\n` }
        str ? citel.reply(`*「 LIST OF PERSONAL CHAT JIDS 」*\n\nTotal ${anu.length} users are text in personal chat.\n\n` + str) : citel.reply("*Request Denied!*")
    }else if(cd == "group" || cd == "groups" || cd == "gc"){
      n = await citel.bot.groupFetchAllParticipating();
      const c=Object.entries(n).slice(0).map(t=>t[1]);
      for(var i of c.map(t=>t.id)){  str += `📍 ${i}\n`;  } 
      str ? citel.reply(`*「 LIST OF GROUP CHAT JIDS」*\n\n` + str) : citel.reply("*Request Denied!*")
  }else return await citel.reply(`*Use ${prefix}getall pc| gc| member!*`)
}catch(e){ citel.error(`${e}\n\nCommand getall`,e)}
});
