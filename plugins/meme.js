let handler  = async (m, { conn }) => {
  conn.sendFile(m.chat,`${pickRandom(global.meme)}`, m)
}
handler.help = ['meme']
handler.tags = ['tools']
handler.command = /^(meme)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// jangan diubah
global.meme =
  [
"https://1.bp.blogspot.com/-TNGZGhSt_zI/X93Q4iKhQxI/AAAAAAAAVF4/L4rB8enc1HoFy5aXkvomfmxcR30kygKrACNcBGAsYHQ/s578/91913235_2830089170435663_4447843912417017856_n.jpg",
"https://1.bp.blogspot.com/-ZzhsovG6VQk/X93Qx6IXevI/AAAAAAAAVEY/oaPiOAPc8bU5L-Y5ec8zbtbvLeNEHYrlQCNcBGAsYHQ/s644/119497256_3289016287876280_933166537923688142_n.jpg",
"https://1.bp.blogspot.com/-hsAyoXFk5zs/X93QyywTwNI/AAAAAAAAVEk/dX567Ty7as09ik9xFviAf149KDI_VP23gCNcBGAsYHQ/s882/126930872_3494159250695315_2911318968773005963_n.jpg",
"https://1.bp.blogspot.com/-pOFY-ix58m0/X93Q0JXU_pI/AAAAAAAAVE0/XuehXz15kvMd0XXr3j28Uumlmf1KNwsFwCNcBGAsYHQ/s880/130285630_3533164500128123_8252253712135313050_n.jpg",
"https://1.bp.blogspot.com/-1MFwlkScLrI/X93Q1YblbBI/AAAAAAAAVFI/53P14xUzjwg5qJmdM4hTScslb8F8kxk_wCNcBGAsYHQ/s640/131951890_987790505043716_8334230285575794663_n.jpg",
"https://1.bp.blogspot.com/-ay00cMZrKOg/X9zzOPssmNI/AAAAAAAAUs0/qw3LkxYWZF8KmgM35uW3REByQKsGVMCJgCNcBGAsYHQ/s1080/meme_indonesia_gokil_130197811_250172589829349_4517924538788816617_n.jpg",
"https://1.bp.blogspot.com/-tzbh1u0Q0x0/X9zzSQ7ctPI/AAAAAAAAUtw/NfPFuKuRHLcXhNqDRLg5jEz3xx-G0cHywCNcBGAsYHQ/s1080/meme_indonesia_gokil_130559598_213820970312403_6565488242261858116_n.jpg",
"https://1.bp.blogspot.com/-BMoEg6cuBEA/X9zzS9kPYPI/AAAAAAAAUt0/V-oFvC1fyZY4W1_eicICtPEYQaXte9fwQCNcBGAsYHQ/s509/meme_indonesia_gokil_130574163_904871143585505_1836659838467416563_n.jpg",
"https://1.bp.blogspot.com/-BAuB7v9xDCc/X9zzTMMSGpI/AAAAAAAAUt4/vOiTozBkqVgT9V0MxS5HxDQXCt4tcy8KQCNcBGAsYHQ/s1343/meme_indonesia_gokil_130578626_1345636132445352_756377830767725509_n.jpg",
"https://1.bp.blogspot.com/-dVhqXKKa1ik/X9zzTSL1-2I/AAAAAAAAUt8/uXVO3gkS_zEngJO3pLsY-DZdfJqkNY3ogCNcBGAsYHQ/s320/meme_indonesia_gokil_130604522_394506938442748_2107040976320013530_n.jpg",
"https://1.bp.blogspot.com/-Md9rd0s1rRI/X9zzUSVOmGI/AAAAAAAAUuY/R32n1YFCLckpLgPJ5AvI3qObcK1O9P1twCNcBGAsYHQ/s1080/meme_indonesia_gokil_130732318_1014980098984055_6288320571321797344_n.jpg",
"https://1.bp.blogspot.com/-PSywVBZiO5s/X9zzYORk8NI/AAAAAAAAUu8/K3Xrj7YjjmQ4CiShvU11MfU0_kqPEDRhwCNcBGAsYHQ/s480/meme_indonesia_gokil_130829433_1263619567342642_2997987878465918953_n.jpg",
"https://1.bp.blogspot.com/-DF8XSLnKlw4/X7473ktG_oI/AAAAAAAAAAQ/iNQLgVv5ZH0TOtRMNX39MrDsR-9WvHcBgCLcBGAsYHQ/s600/dark_jokesidn_125413538_4708449659226988_2818050412611397571_n.jpg",
"https://1.bp.blogspot.com/-Uh4ZHwYDzgc/X7473pFJNtI/AAAAAAAAAAU/CDdg5yCpjYs0EAbM36wWJt64IaKCd9dwACLcBGAsYHQ/s600/dark_jokesidn_125763208_287219762648327_8451338174815846745_n.jpg",
"https://1.bp.blogspot.com/-5JbETHhqjsE/X7473dr_KAI/AAAAAAAAAAM/6PSuwjgwRi861Wv_wugXKK1F0V0htlsdwCLcBGAsYHQ/s600/dark_jokesidn_125771108_819438932212234_9195471701678220668_n.jpg",
"https://1.bp.blogspot.com/-ZKLUtEg7L4U/X7474BW4i0I/AAAAAAAAAAY/SwzC0fiT4JM4iLNKY5qw67Mkgg2khORRQCLcBGAsYHQ/s600/dark_jokesidn_125811246_134357671416788_976039294859462799_n.jpg",
"https://1.bp.blogspot.com/-NHj1zmuU64c/X7474tpGqAI/AAAAAAAAAAc/yqN7lmE5JRsRtzu27iU2Af5TKC0tPbidwCLcBGAsYHQ/s600/dark_jokesidn_125913814_669971630554090_4965983515042687120_n.jpg",
"https://1.bp.blogspot.com/-nWez8FBhNbc/X7474ufKrjI/AAAAAAAAAAg/zs5KlpQyte0r6NiBazZa1oEFamFMT5o7wCLcBGAsYHQ/s600/dark_jokesidn_125916215_1533013756892925_3229604459263123272_n.jpg",
"https://1.bp.blogspot.com/-_iBTwh2xmbs/X7475BGlZMI/AAAAAAAAAAk/Vw9x0AxutiUzOosLPOebxdYkMQczzk_YQCLcBGAsYHQ/s600/dark_jokesidn_125942119_190351036014132_7819076849939301140_n.jpg",
"https://1.bp.blogspot.com/-rauoH_JrIhk/X7475c2lNuI/AAAAAAAAAAo/tUWQ0A3n-hcpGqg6NygclGKkZpfZKRVlgCLcBGAsYHQ/s600/dark_jokesidn_125960559_2462771960685989_4545333058975253946_n.jpg",
"https://1.bp.blogspot.com/-iJNMg7iNyB8/X7475lXFYKI/AAAAAAAAAAs/YMmu9RzxMcYZV-NzKluO9Jrh_atKCliagCLcBGAsYHQ/s600/dark_jokesidn_125969103_173992064384728_9051904893274226019_n.jpg",
"https://1.bp.blogspot.com/--nwEy_pzB4A/X74756CNOjI/AAAAAAAAAAw/zHzgZjv6jhUXYahy3xx459Di9pVNCAO2QCLcBGAsYHQ/s600/dark_jokesidn_126042830_835992027203350_8414976899406572504_n.jpg",
"https://1.bp.blogspot.com/-VP2pHJDpkUE/X7476DJ5GcI/AAAAAAAAAA0/66CCNDo8hpwKPRbR5H30h6HeuMyHUjPWgCLcBGAsYHQ/s600/dark_jokesidn_126053972_189965019286221_4250381716346170758_n.jpg",
"https://1.bp.blogspot.com/-vmZ1KdoSyJY/X7476J_y6pI/AAAAAAAAAA4/oTD8eBIYHpUyfNWueq3kF5K2BIRgrwoGACLcBGAsYHQ/s600/dark_jokesidn_126059781_971971236546542_909575679588689725_n.jpg",
"https://1.bp.blogspot.com/-dhPv0Z7s714/X7476TDmk-I/AAAAAAAAAA8/hXfO6s1DpQU9EONnAWDABrd_prbnlorVACLcBGAsYHQ/s600/dark_jokesidn_126157501_199666855004682_7845085292892857199_n.jpg",
"https://1.bp.blogspot.com/-PR_PpFaI_B4/X7476wsfGwI/AAAAAAAAABA/oPyQMQlH8hcpJedHYz0JCflCdkIU2XWvgCLcBGAsYHQ/s600/dark_jokesidn_126200110_838776873613928_5199354286646414089_n.jpg",
"https://1.bp.blogspot.com/-8Ph_hrrwgOQ/X74761oaeJI/AAAAAAAAABE/b1kq8lXcGZMUTHYUc67q_x3DwGJL3Ds8gCLcBGAsYHQ/s600/dark_jokesidn_126235999_3883403391679404_3614733563626350889_n.jpg",
"https://1.bp.blogspot.com/-04jO_qjfrV4/X7477Qv_74I/AAAAAAAAABI/KmkuY_bArbEou9ilotUVhm4Uk3z-SYroACLcBGAsYHQ/s600/dark_jokesidn_126251235_216024523255792_3922178115706270584_n.jpg",
  ]
