const a =
  'FIHOOKPIFLGIGBJJPEKNDIOBLFAHOHEEKIKMGMPDLLEAKNGEOOFOEAPLOCPGEHHFBNOLLCJLLKLBHFFPPOHNKHGMIBJCFAMEDGHHDEKNKCMIGHFCLIOCNJPNFDECNMLBFGCHMEEBEAOCOPNIKGJJKEJGOHHLMMELLLKJJDHJBGBEFLJOPOLAIHEIJKFPIPINFDCOAFPANOOAGICGGDMFIFCHIACBPOKKOPEHNFKCKHCJBPAKAGKPKDPOEFCKEAEE';

const c =
  'FIHOOKPIFLGIGBJJPEKNDIOBLFAHOHEEJHDGIHAHJGOPEHKNAABCGIPEKIFLAPBIONLGPFBAEBDCMHHJKEKFCHJHHPLLGIAMNLCOKPAOMIEFIEFKOIJABMABFCPGHDLOPBDDGOLMFKNAEOLBKBALKOGCLAJDDLIHLCGOGDLEBFAIPPGACKFPEIAFOPPGAPFOGMEFFMAAOMDOBBMOIJDNNLHDKBDLAFAMIEDGECJMEDNNKLICDCGEOAMBHKELBCIJ';

// a랑 똑같음
const d =
  'FIHOOKPIFLGIGBJJPEKNDIOBLFAHOHEEKIKMGMPDLLEAKNGEOOFOEAPLOCPGEHHFBNOLLCJLLKLBHFFPPOHNKHGMIBJCFAMEDGHHDEKNKCMIGHFCLIOCNJPNFDECNMLBFGCHMEEBEAOCOPNIKGJJKEJGOHHLMMELLLKJJDHJBGBEFLJOPOLAIHEIJKFPIPINFDCOAFPANOOAGICGGDMFIFCHIACBPOKKBNBFJOOMMOAALLBONDNHOAALDFDLDBHG';

const 최신 =
  'GGPLDPBCJENIICHPONFJHKNDHMOHMOMECJMMPPNAKAOLJNMDLNBBOMMJFHCFLOCHHPIOBFKKKLANCCONPAJLIPAHFHCMEIHHCPNODNEFBPFHCEOCHNCADCOGHMGHPFJAICMCJBBLFBPLLMNJNMGCMEGAJGBMFFHFMKJNKKABJFBBJEILKMNHJCHGGOFELNLFEMADEBMPCBJBLDKHIELCPADPDHKFLFENPFLJLJLENLLHKKMNNMLHPKPMGLANKBIM';

const 모자만_변경 =
  'BKIBMBPOLCJDKKOIFHEDNJKGPFLLPHKAJHBDIDCIFHOCADLIEADGABMEOHKKBEJNDMJJJOANMNBFCNBEEIBNCHCMNPFMLBLEAAPFMOPGCDIBFCGLKDLINLHLAGNBBMEELJLJDDIGOEIADFLJADGLCMHHMDHHCGMHAJKGNCCBBJJLKAKPLLGIKKJNIPEELBCGPKNGANFFDAICBPEPILNCCKHAKGINOIGLGBPBBNAJNHFIJNKFGOBAKFCPHLCOKBAD';

const convert = (url) => {
  let reslute = '';

  for (let i = 0; i < url.length; i++) {
    reslute += (url.charCodeAt(i) - 65).toString(16);
  }

  return reslute;
};

const reverse = (url) => {
  let reslute = '';

  for (let i = 0; i < url.length; i++) {
    reslute = url.charAt(i) + reslute;
  }

  return reslute;
};

console.log(convert(c));
