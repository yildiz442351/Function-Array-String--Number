//FUNCTIONS
const piSayisi = 3
document.write("piSayisi: " + piSayisi + "</br>")


function toplamaYap() {
    let sayi1 = 2
    let sayi2 = 4
    let toplam = sayi1 + sayi2
    document.write("toplam: " + toplam + "</br>")
}


toplamaYap()

/* elinizde bir foksiyon olsun bu fonksiyon disardant 2 adet
sayi alsin bu sayilari carparak sonucunu ekrana yazdirsin
let deger1 = Number(prompt("sayi 1 gir"))
*/

function cikarmaYap(sayi1, sayi2) {
    let cikarma = sayi1 - sayi2
    document.write("cikarma: " + cikarma + "</br>")
}

cikarmaYap(4, 1)

function carpmaYap(sayi1, sayi2) {
    let carpim = sayi1 * sayi2
    return carpim
}

const carpmaSonuc = carpmaYap(3, 5)
document.write("carpmaSonuc: " + carpmaSonuc + "</br>")


//OBJECT
const kisi = {
    ad: "yıldız",
    soyad: "onaran",
    yas: 26,
    beslen: function () {
        document.write("can besleniyor" + "</br>")
    },
    kalk: function () {
        document.write("can kalkiyor" + "</br>")
    }
}

/* 
elinizde bir okul objesi olsun okuldaki ogrenci sayisi,
okulrengi ozellikli ve zilcal ayrica zilidurdur metotlu 
fonksiyonlari olsun.
Objejenin metotlarini calistirarak ayni zamanda degiskenlerini
ekrana yazdiriniz,

*/

document.write("kisi ad: " + kisi.ad + "</br>")
document.write("kisi soyad: " + kisi["soyad"] + "</br>")

kisi.beslen()

//EVENTS
function uyariCikar() {
    alert("dikkatli ol")
}

/* 
ondbclick 2 defa tiklama
onmouseover fare uzerine geldiginde
onmouseout fare uzerinden gittiginde
onkeydown klavye tusuna basinca
onload sayfa yuklenildigin
onchange bir etiketin degisimini yakalar
*/

const uyariBtn2 = document.getElementById("ozelBtn")

uyariBtn2.addEventListener("click", uyariYap2)

function uyariYap2() {
    alert("dikkatli ol 2")
}

/* elinizde 1 element olsun bu elemente tiklanildiginda
ekrana "tikladin" seklinde yazi yazan bir algoritma yaziniz*/

const uyariBtn3 = document.getElementById("ozelBtn1")

uyariBtn3.onclick = function () {
    alert("dikkatli ol 3")
}

// String
let adim = "yıldız oanaran" // new String()
let adim1 = 'yıkldız onaran'

let adim2 = "yıldız \"onaran"

//uzunluk
document.write("adim2 length : " + adim2.length + "</br>")

/*
alert("merhaba\n \tbenim adim\r mehmet\b \b \b can seyhan")
*/
document.write("--- -- - -- -- - - - -  -- " + "</br>")

let adSoyad = new String("yıldız benim ad ad yıldız onaran senin ad ?")
document.write("adSoyad : " + adSoyad + "</br>")

document.write("--- -- - -- -- - - - -  -- " + "</br>")

//aralik getirir
document.write("adSoyad slice : " + adSoyad.slice(1, 7) + "</br>")
document.write("adSoyad slice : " + adSoyad.slice(5) + "</br>")
document.write("adSoyad substring : " + adSoyad.substring(1, 7) + "</br>")
document.write("adSoyad substring : " + adSoyad.substring(5) + "</br>")

//degistirme
document.write("adSoyad replace : " + adSoyad.replace("ad", "isim") + "</br>")
document.write("adSoyad replace : " + adSoyad.replaceAll("ad", "isim") + "</br>")

//buyutmel
document.write("adSoyad toUpperCase : " + adSoyad.toUpperCase() + "</br>")
//harfleri kucuk yazar
document.write("adSoyad toLowerCase : " + adSoyad.toLowerCase() + "</br>")

//cumlenin devamina eklenmeyi saglar
document.write("adSoyad concat : " + adSoyad.concat(" zefer yildiz") + "</br>")

//bastan ve sondan bosluk varsa kaldirir
document.write("adSoyad trim : " + adSoyad.trim() + "</br>")
//sondan bosluk kaldirir
document.write("adSoyad trimEnd : " + adSoyad.trimEnd() + "</br>")
//bastan bosluk kaldirir
document.write("adSoyad trim : " + adSoyad.trimStart() + "</br>")

/* bastan veya sona istenilen adetten 1 eksik olarak
belirtilen karaterin metine eklenilmesini saglar*/
let yazi = "5"
let paddedYazi = yazi.padStart(4, "9")
let paddedYaziSon = yazi.padEnd(4, "8")
document.write("paddedYazi: " + paddedYazi + "</br>")
document.write("paddedYaziSon: " + paddedYaziSon + "</br>")

//ilgili siradaki karakteri al
document.write("adSoyad charAt : " + adSoyad.charAt(2) + "</br>")
//karakterin ascii code karsiligini al
document.write("adSoyad charCodeAt : " + adSoyad.charCodeAt(2) + "</br>")
//ilgili siradaki karakteri al
document.write("adSoyad  : " + adSoyad[3] + "</br>")
//verilen karaktere gore dizi olusturulmasini sglar
document.write("adSoyad split : " + adSoyad.split(" ") + "</br>")
//belirtilen metnin baslangic noktasini getirir
document.write("adSoyad indexOf : " + adSoyad.indexOf("ad") + "</br>")
document.write("adSoyad search : " + adSoyad.search("ad") + "</br>")

//belirtilen metnin baslangic noktasini sondan bakarak getirir
document.write("adSoyad indexOf : " + adSoyad.lastIndexOf("ad") + "</br>")
document.write("adSoyad indexOf : " + adSoyad.indexOf("ad", 14) + "</br>")
//aranilan kelime cumlenin icinde geciyorsa onu verir yoksa null doner
document.write("adSoyad match : " + adSoyad.match("adi") + "</br>")
//iterate edilebilen bir veya daha fazla icerikli bir kolleksiyon cevirir
document.write("adSoyad match : " + adSoyad.matchAll("ad") + "</br>")
//aranilan kelime varsa true yoksa false cevirir
document.write("adSoyad includes : " + adSoyad.includes("ad") + "</br>")
//ilgili kelime ile basliyorsa true yoksa false doner
document.write("adSoyad startsWith : " + adSoyad.startsWith("mehmet", 10) + "</br>")
//ilgili kelime ile bitiyorsa true yoksa false doner
document.write("adSoyad endsWith : " + adSoyad.endsWith("mehmet", 20) + "</br>")

let fiyat = 20
let adimiz = "yildiz442351"

let tamYazi = `adim ${adimiz} 'urun' "fiyati" ${fiyat} budur`
document.write("tamYazi : " + tamYazi + "</br>")

//Number
let degerler = 9438592839208590164634n
document.write("degerler : " + degerler + "</br>")

let anlikFiyat = 12.5 //new Number()

let anlikFiyatString = String(anlikFiyat)
let anlikFiyatString1 = anlikFiyat + ""
let anlikFiyatString2 = anlikFiyat.toString()


let yeniFiyat = "12.5"
let yeniFiyatNumber = Number(yeniFiyat)//12.5
let yeniFiyatNumber1 = parseInt(yeniFiyat) //12 Number.parseInt
let yeniFiyatNumber2 = parseFloat(yeniFiyat) //12.5

let degerlerToplami = 2 + "2"
document.write("degerlerToplami : " + degerlerToplami + "</br>")
//string veya number tipinde eger sayi giderse true aksi halde false doner
document.write("degerlerToplami isNaN: " + isNaN("selam") + "</br>")

document.write("anlikFiyat isInteger: " + Number.isInteger(anlikFiyat) + "</br>")

let guncelFiyat = 12.325236
//ondalik sayisini belirtir
document.write("guncelFiyat: toFixed " + guncelFiyat.toFixed(4) + "</br>")
//toplam basamak sayisini belirtir
document.write("guncelFiyat: toPrecision " + guncelFiyat.toPrecision(4) + "</br>")

document.write("Number: MAX_VALUE " + Number.MAX_VALUE + "</br>")

//ARRAY
const arabalar = ["bmw", "audi", "porche", "saab", "volvo", "togg"]
const arabala1 = new Array("bmw", "audi", "porche", "saab", "volvo", "togg")
arabalar[6] = "mercedes"

document.write("--- -- - -- -- - - - -  -- " + "</br>")

document.write("arabalar : " + arabalar + "</br>")

document.write("--- -- - -- -- - - - -  -- " + "</br>")

arabalar[0] = "bmw1"

document.write("arabalar: " + arabalar[1] + "</br>")

document.write("arabalar isArray: " + Array.isArray(arabalar) + "</br>")
document.write("arabalar instanceof: " + (arabalar instanceof Array) + "</br>")

document.write("arabalar length: " + arabalar.length + "</br>")
//sona ekleme
arabalar.push("mazda")

document.write("arabalar: " + arabalar + "</br>")
//son elemani cikarir
arabalar.pop()
//nbastan kaldirir
arabalar.shift()
//basa ekler
arabalar.unshift("mazda")

delete arabalar[2]
document.write("arabalar: " + arabalar + "</br>")
document.write("arabalar concat: " + arabalar.concat(arabala1) + "</br>")


const sayisalDizi = [[1, 3, 6], [4, 5, 7], [1, 10, 8]]

const yeniSayisalDizi = sayisalDizi.flat()


document.write("--- -- - -- -- - - - -  -- " + "</br>")

document.write("arabalar : " + arabalar + "</br>")

document.write("--- -- - -- -- - - - -  -- " + "</br>")

arabalar.splice(2, 1, "bmw", "bmw1")
document.write("arabalar : " + arabalar + "</br>")

document.write("arabalar : " + arabalar.slice(1, 4) + "</br>")
document.write("arabalartoString : " + arabalar.toString() + "</br>")


const sayisalSonDizi = [3, 547, 2, 3, 7, 8, 1, 8, 30, 91]
document.write("arabalar sort: " + arabalar.sort() + "</br>")

//siralama yapar
document.write("sayisalSonDizi sort: " + sayisalSonDizi.sort(function (a, b) { return a - b }) + "</br>")
//ters veririr
document.write("arabalar reverse: " + arabalar.reverse() + "</br>")

document.write("sayisalSonDizi: " + Math.max.apply(null, sayisalSonDizi) + "</br>")


//ITERATION

//forEach tum elemanlarin gezmeyi saglar
arabalar.forEach(degerleriGez)


function degerleriGez(deger, indis, dizi) {
    console.log(`deger: ${deger} indis: ${indis} dizi: ${dizi}`)
}

//tum elemanlari gez sonuc olarak 1 dizi cevir ama her eleman icinde dizi olusturmus olusturmus oluyor ve geriye cevirir 1 dizi
const yeniArabalar = arabalar.map(degerleriGez1)
document.write("yeniArabalar: " + yeniArabalar + "</br>")

function degerleriGez1(deger, indis, dizi) {
    return deger + " a "
}

//tum elemanlari gez ve sonuc olarak bir dizi cevir
const yeniArabalar1 = arabalar.flatMap(degerleriGez1)
document.write("yeniArabalar1: " + yeniArabalar1 + "</br>")


document.write("--- -- - -- -- - - - -  -- " + "</br>")

document.write("arabalar : " + sayisalSonDizi + "</br>")

document.write("--- -- - -- -- - - - -  -- " + "</br>")

//filtreleme yap
const sayisalSonDizi1 = sayisalSonDizi.filter(degerleriGez2)

function degerleriGez2(deger, indis, dizi) {
    return deger >= 10
}


document.write("sayisalSonDizi1 : " + sayisalSonDizi1 + "</br>")

//soldan topla
const sayisalSonDizi2 = sayisalSonDizi.reduce(degerleriGez2)

//sagdan topla
const sayisalSonDizi3 = sayisalSonDizi.reduceRight(degerleriGez2)


document.write("sayisalSonDizi2 : " + sayisalSonDizi2 + "</br>")
document.write("sayisalSonDizi3 : " + sayisalSonDizi3 + "</br>")

function degerleriGez2(toplam, deger, indis, dizi) {
    return toplam + deger
}


//eger tum degerler kurali sagliyorsa true degilse false doner
const sayisalSonDiziEvery = sayisalSonDizi.every(kontrolEt)
//en az 1 tanesi kurali sagliyorsa true degilse false doner
const sayisalSonDiziSome = sayisalSonDizi.some(kontrolEt)

function kontrolEt(deger, indis, dizi) {
    return deger > 10
}

document.write("sayisalSonDiziEvery : " + sayisalSonDiziEvery + "</br>")
document.write("sayisalSonDiziSome : " + sayisalSonDiziSome + "</br>")

document.write("arabala1 indexOf: " + arabala1.indexOf('audi') + "</br>")

document.write("arabala1 lastIndexOf: " + arabala1.lastIndexOf('audi') + "</br>")

//ilk dogrulanan degeri bulup getirir
const sayisalSonDiziFind = sayisalSonDizi.find(kontrolEt)
document.write("sayisalSonDiziFind : " + sayisalSonDiziFind + "</br>")
//ilk dogrulanan degerin sirasini getirir
const sayisalSonDiziFind1 = sayisalSonDizi.findIndex(kontrolEt)
document.write("sayisalSonDiziFind1 : " + sayisalSonDiziFind1 + "</br>")
//metinden dizi olusturur
const yeniDizi = Array.from("selamlar")
document.write("yeniDizi : " + yeniDizi + "</br>")

const anahtarlar = arabala1.keys()
const tumDegerler = arabala1.entries()
document.write("--- -- - -- -- - - - -  -- " + "</br>")

for (const deger of anahtarlar) {
    document.write("deger : " + deger + "</br>")

}
document.write("--- -- - -- -- - - - -  -- " + "</br>")

for (const deger of tumDegerler) {
    document.write("deger : " + deger + "</br>")

}

document.write("deger includes: " + arabala1.includes("bmw") + "</br>")
