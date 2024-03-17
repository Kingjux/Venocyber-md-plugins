/**
CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Venocyber-md
   * @author : Venocyber Tech <https://github.com/kingjux>
   * @youtube : https://www.youtube.com/@JASTINMTEWA-vn9pl
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



const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https://github.com/Giftedmaurice/gifted-bot-md' // Source URL
const number = '254728782591'
var name = ' Gifted Tech'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://telegra.ph/file/54efddccf41281ad7ec51.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
│ Name      : ɢɪғᴛᴇᴅ ᴍᴀᴜʀɪᴄᴇ(ɢɪғᴛᴇᴅ ᴛᴇᴄʜ)
│ Place       : ᴇᴅᴏʀᴇᴛ - ᴋᴇɴʏᴀ
│ Gender    :  ᴍᴀʟᴇ
│ Age          : 21_
│ Phone     : wa.me/254728782591
│ Youtube   : Youtube.com/@giftedtechnexus
│ Status     : sᴏғᴛᴡᴀʀᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ, ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴇʀ, ɢʀᴀᴘʜɪᴄs ᴅᴇsɪɢɴᴇʀ,ᴄᴇᴏ
╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`



 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             desc: "Show intro of user",
             category: "fun",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
