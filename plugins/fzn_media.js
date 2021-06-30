(async () => {
			switch(command){
				case 'play':
					if(!q) return reply('Masukan Teksnya kak :v')
					req = await getJson(`https://fzn-guys.herokuapp.com/api/ytplay2?apikey=gege&judul=${q}`)
					thumb = req.image
					info = `*「 PLAY 」*\n\n➸ *Judul* : ${req.title}\n➸ *Durasi* : ${req.duration}\n➸ *Filesize* : ${req.size}\n➸ *Ext* : MP3\n\n_*Music Sedang Dikirim*_`
					hasil = req.result
					Kirim.FileDariUrl(from, thumb, msg, info)
					Kirim.FileDariUrl(from, hasil, msg)
				break	
				case 'pinterest':
					if(!q) return reply('Masukan Teksnya kak :v')
					req = await getJson(`https://fazone-api.herokuapp.com/api/pinterest?apikey=${apikey}&q=${q}`)
					info = `Ini kak :v`
					hasil = req.result
					rand = hasil[Math.floor(Math.random() * hasil.length)]
					Kirim.FileDariUrl(from, rand, msg, info)
				break
                case 'ytplay':
                    if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
                    await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${LolApi}&query=${args.join(" ")}`)
                        .then(async(result) => {
                            await getJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${LolApi}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
                                .then(async(result) => {
                                    result = result.result
                                    caption = `â– Title    : *${result.title}*\n`
                                    caption += `â– Size     : *${result.size}*`
                                    ini_buffer = await getBuffer(result.thumbnail)
                                    await fzn.sendMessage(from, ini_buffer, image, { quoted: msg, caption: caption })
                                    get_audio = await getBuffer(result.link)
                                    await fzn.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: msg })
                                })
                        })
                    break
                    case 'ytsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await getJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'tiktodnowm':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${LolApi}&url=${ini_url}`
                    get_result = await getJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await fzn.sendMessage(from, ini_buffer, video, { quoted: msg })
                    break
				case 'image':
					if(!q) return reply('Masukan Teksnya kak :v')
					req = await getJson(`https://fazone-api.herokuapp.com/api/googleimg?apikey=${apikey}&q=${q}`)
					info = `Ini kak :v`
					hasil = req.result
					rand = hasil[Math.floor(Math.random() * hasil.length)]
					Kirim.FileDariUrl(from, rand, msg, info)
				break
				case 'fb':
					try {
						if (!q) return reply('Urlnya mana kak?')
						req = await getJson(`https://fazone-api.herokuapp.com/api/fbdl?url=${q}&apikey=${apikey}`)
						if (req.error) return reply(req.error)
						fzn.sendMessage(from, warn.mess.wait, text, {quoted: msg})
						if (req.kualitasHD) {
							buffer = await getBuffer(req.kualitasHD)
							fzn.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: msg, caption: 'Nih Kak :)'})
							} else if (req.kualitasHD == "") {
							gas = await getBuffer(req.kualitasSD)
							fzn.sendMessage(from, gas, video, {mimetype: 'video/mp4', quoted: msg, caption: 'Nih Kak :)'})
							}
						} catch {
						reply('Mungkin Linknya Tidak Valid Kak :v')
						}
				break		
				case 'ig':
					try {
						if (!q) return reply('Urlnya mana kak?')
						req = await getJson(`https://fzn-guys.herokuapp.com/api/igdl?apikey=gege&url=${q}`)
						cptr = `*IG DOWNLOADER*\n\n*➸ Nama :* ${req.result.fullname}\n*➸ User :* ${req.result.username}\n*➸ Caption :* ${req.result.caption}`
						if (req.error) return reply(req.error)
						fzn.sendMessage(from, warn.mess.wait, text, {quoted: msg})
						Kirim.FileDariUrl(from, req.result.url, msg, cptr)
						} catch {
						reply('Mungkin Linknya Tidak Valid Kak :v')
						}
				break						
			}
			
		})();		
//Media BY Fazone
