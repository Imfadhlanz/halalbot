(async () => {
			switch(command){ 
        case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?LolApi=${LolApi}`).then((gambar) => {
                     fzn.sendMessage(from, gambar, image)
                    })
                    break
                    // Random Text //
                case 'quotes':
                    quotes = await getJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${LolApi}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*â€• ${author}*`)
                    break
                case 'quotesanime':
                    quotes = await getJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${LolApi}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*â€• ${char}*\n*â€• ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                    quotedilan = await getJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${LolApi}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolApi}`)
                    await fzn.sendMessage(from, get_result, image, { quotes: msg })
                    break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                    get_result = await getJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolApi}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                    anu = await getJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${LolApi}`)
                    reply(anu.result)
                    break
                    case 'spamsms':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await getJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${LolApi}&nomor=${nomor}`)
                    await getJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${LolApi}&nomor=${nomor}`)
                    await getJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${LolApi}&nomor=${nomor}`)
                    await getJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${LolApi}&nomor=${nomor}`)
                    await getJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${LolApi}&nomor=${nomor}`)
                    await getJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${LolApi}&nomor=${nomor}`)
                    await getJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${LolApi}&nomor=${nomor}`)
                    await getJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${LolApi}&nomor=${nomor}`)
                    reply("Success")
                    break 
                      // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fadhlan Gans`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${LolApi}&text=${ini_txt}`).then((gambar) => {
                        fzn.sendMessage(from, gambar, image, { quoted: msg })
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${LolApi}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        fzn.sendMessage(from, gambar, image, { quoted: msg })
                    })
                    break
			}
			
		})();		
//Random Image
//Lapor ke Adul Kalau error
