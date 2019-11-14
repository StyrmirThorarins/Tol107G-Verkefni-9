# Verkefni 9

Útfæra skal leit og birtingu á fyrirtækjum gegnum `apis.is`. `https://apis.is/company?name=elko` leitar t.d. að upplýsingum um `elko` og skilar til baka lista af hlutum, t.d.:

```javascript
{ 
  "results":[ 
     { 
        "name":"Elko ehf",
        "sn":"4801850219",
        "active":0,
        "address":""
     },
     { 
        "name":"Elko ehf.",
        "sn":"5610003280",
        "active":1,
        "address":"Skarfagörðum 2, 104 Reykjavík"
     }
  ]
}
```

Gefinn er HTML og CSS grunnur með útliti sem ekki ætti að þurfa að breyta.

Leit skal:

* Aðeins leyfa að leita ef gildi í `<input>` er ekki tómistrengur, annars skal birta skilaboðin `Lén verður að vera strengur`
* Birta skilaboðin `Leita að fyrirtækjum...` ásamt mynd `loading.gif` meðan leitað er, sjá `.loading` class

Villumeðhöndlun:

* Ef villa kemur upp hjá `apis.is` eða við tengingu skal birta `Villa við að sækja gögn`
* Ef ekkert lén finnst skal birta `Ekkert fyrirtæki fannst fyrir leitarstreng`

Birta skal fyrir öll fyrirtæki sem finnast:

* Nafn (`name`)
* Kennitala (`sn`)

Ef active er 1 skal einnig birta:

* address (`heimilisfang`)

Ef active er 1 skal setja grænann kassa utan um fyrirtækið, ef active er 0 skal setja rauðann kassa utan um fyrirtækið.

Útfæra skal JavaScript virkni innan þess módúl sem gefinn er.

`browser-sync` er uppsett í verkefninu:

```bash
npm install
npm run dev
```

Sjá dæmi í `demo.mp4`.

Ef apis.is fer niður er gefið dæmi í `example.json` sem hægt er að sækja í stað gagna með því að vísa beint í það skjal fyrir allar fyrirspurnir.

## eslint

Setja þarf upp `eslint` með airbnb style guide. `eslint` ætti að keyra þegar `npm test` er keyrt og linta allar javascript skrár.

Leyfilegt er að slökkva á villum tengum `for of` ítrunum með `/* eslint-disable-line */`, einnig er í lagi að nota það eða leyfa almennt `console.error`. Ekki ætti að nota það fyrir annað, heldur laga villu sem koma upp.

## Mat

* 20% – Snyrtilegt JavaScript með `eslint` uppsett og án villna
* 30% – Leit eftir Fyrirtækjum
* 30% – Niðurstöður birtar
* 20% – Villumeðhöndlun

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 4. nóvember 2019.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags þriðjudaginn 14. nóvember 2019.

Skilaboð skulu innihalda:

* Slóð á verkefni á heimasvæði
* Slóð á GitHub repo fyrir verkefni, og **öllum** dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `anz1e`, `gunnnnii`, `magdadianaa`, `OlafurjonHI` og `Wolfcoder13` .

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

---

> Útgáfa 0.1
