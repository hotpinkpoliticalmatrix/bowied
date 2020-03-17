const fs = require("fs");
const { db, Album, Song, Bowie } = require("../server/db");
const songs = JSON.parse(fs.readFileSync(__dirname + "/songs.json", "utf8"));

const seed = async () => {
  await db.sync({ force: true });

//bowies
const ziggy = await Bowie.create({
  name: 'Ziggy Stardust',
  description:
    "... As he fleshed out the concept further, Ziggy became an omnisexual alien rock star, sent to Earth as a messenger. Bowie’s plot, loosely, was that humanity was in its final five years of existence, and Ziggy was dispatched to deliver a message of hope: He’s a wild, hedonistic figure (“well-hung and snow-white tan”), but at his core communicates peace and love; he’s the ultimate rock star. And in the end, he is destroyed by his own excesses and by his fans. \n“Ziggy is advised in a dream by the infinites to write the coming of a starman … this amazing spaceman who will be coming down to save the Earth,” Bowie explained to William S. Burroughs in a Rolling Stone interview. “Ziggy starts to believe in all this himself and thinks himself a prophet of the future starmen. He takes himself up to the incredible spiritual heights and is kept alive by his disciples. When the infinites arrive, they take bits of Ziggy to make themselves real, because in their original state they are anti-matter and cannot exist on our world. And they tear him to pieces onstage during the song ‘Rock ‘n’ Roll Suicide.'”",
  source:
    "https://www.rollingstone.com/music/music-news/ziggy-stardust-how-bowie-created-the-alter-ego-that-changed-rock-55254/",
  imageUrl:
    "https://i.ibb.co/KDp4Xmn/Ziggy-Stardust.jpg"
}, {
  include: [{
  model: Album,
}]});

const plasticSoul = await Bowie.create({
  name: 'Plastic Soul',
  description:
    "It wasn’t just the alien eyes, the golden disc embedded in his forehead or the shock of Martian mullet – the creature known as Ziggy Stardust had a strange pulse too, a vibration in his veins that no earthly drug could have given him. Pianist Mike Garson, drawn from the jazz world to bring jagged avant-garde shapes to 1973’s Aladdin Sane, saw it in him as they travelled together on Ziggy’s farewell tour, gazing out at America through tinted glass with a mixture of awe, infatuation and hunger. Ziggy’s bloodstream, he saw, was sucking in soul. \n“I remember driving in the limos with him at that period of time and he’d have the headphones on listening to Aretha Franklin,” Garson says today. “He was already sucked into that universe. He told me that when he grew up in the Fifties and Sixties in London, he loved those black soul groups. He loved Little Richard, he thought he was a god. It was absolutely in him, like you can’t believe. He was consumed by that music. You see him in the limo listening, and you could see it going in his body, the feel of ‘Natural Woman’ by Aretha. It was like he was being infused.” \nWithin two years of Ziggy’s onstage demise at the Hammersmith Apollo in July 1973, David Bowie’s deep soul infusions would culminate in Young Americans, his legendary “plastic soul” record released 45 years ago next month (7 March). Those rock historians who dismiss the album as a white elephant among Bowie’s 1970s output, a throwaway transition record between the sci-fi glam years and the Thin White Duke era of Station to Station, underestimate its significance. Because this was Bowie’s first display of true fearlessness, rock’s most celebrated shape-shifter attempting his first real post-fame metamorphosis.",
  source:
    "https://www.independent.co.uk/arts-entertainment/music/features/david-bowie-young-americans-album-anniversary-bruce-springsteen-ziggy-stardust-a9330526.html",
  imageUrl:
    "https://i.ibb.co/vHTSmrZ/young-americans.png"
}, {
  include: [{
  model: Album,
}]});

const thinWhiteDuke = await Bowie.create({
  name: 'The Thin White Duke',
  description:
    "In 1976 David Bowie was very thin and very, very white. He wore two pieces of a three-piece black suit and thickly gelled his hair. He called himself the Thin White Duke, and he looked like the bastard son of European nobility. \nThat was Bowie’s point. He was 29 years old and trying to move on from a previous incarnation, the technicolor alien Ziggy Stardust. But from the vantage point of today, the Duke would be an almost inconceivable character for a successful performer: The morose nobleman had fascist leanings and an appetite for cocaine so dangerous that it almost killed him. \nBowie began dressing up in monochrome while promoting his Young Americans album, hoping to draw attention to the contrast between the black American soul music he borrowed from and his own lithe white body. But the demands of promoting, touring and producing turned Bowie into a cocaine addict, and lithe became frail. \nHe was living in Los Angeles at the time and, by his own accounts, surviving on red peppers, milk and mountains of cocaine. Unlike the emotionally fragile Ziggy Stardust, the Thin White Duke was an “Aryan Superhuman” with noble blood and a lust for mysticism. The persona became “an ogre” to Bowie, a sort of black hole of abuse he could escape into. And at some point, Bowie became his character. In cocaine-fueled interviews he suggested that Hitler was the first rock star, “quite as good as Jagger.” Upon his return to England, he gave what may have been a Nazi salute to a gathering crowd. \nBowie said that his wave was misinterpreted thanks to freeze-frames as a Nazi salute. \nBowie was no fascist, but he was out of control. It is easy to see a parallel between the Bowie of this era and Heath Ledger as the Joker — a man who has fallen so far into character that he can no longer see a way out. Ledger died in 2008 at age 28 from prescription drug abuse. Many people close to Bowie in the 1970s could no longer find Ziggy or Bowie. When Bowie opened his mouth, the nihilist and fascist words that came out were those of the Duke. \nIggy Pop saved Bowie’s life. By 1976, the Iggy hadn’t toured in two years and had checked into a Los Angeles mental institution to curb his addictions. Bowie visited the Stooges frontman, and they gradually worked to get each other on the straight and narrow. The two moved to West Berlin in August to experiment with Krautrock, an experience Bowie said brought him back to Earth. To kill the Duke, Bowie had to silence him. His next album, Low, used less narration and more abstraction. It was the first in his famed Berlin Trilogy, which has inspired artists as disparate as Kanye West, The National and Beyoncé. The Thin White Duke died so that David Bowie could live, create and inspire for another 40 years.",
  source:
    "https://timeline.com/the-cocaine-fueled-fascist-who-almost-destroyed-david-bowie-46bf936e3035",
  imageUrl:
    "https://i.ibb.co/bbJDD4p/Thin-White-Duke.png"
}, {
  include: [{
  model: Album,
}]});

//albums

const youngAmericans = await Album.create({
  name: "Young Americans",
  albumArt: 'https://images-na.ssl-images-amazon.com/images/I/61XAFoPH5XL._SY355_.jpg',
  albumUrl: '<iframe src="https://open.spotify.com/embed/album/0lITGovWgaQGi42EfqcE5P" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  releaseDate: "03-07-1975",
  description: "Young Americans represented David Bowie's dive into soul music, particularly Philly Soul. Containing the stunning funk single 'Fame,' the album felt like a vehicle for Bowie to address one of his favorite topics—pop stardom—from a new angle, at a moment when it seemed likely to destroy him. \nIn the summer of 1974, as he was traveling across America on his mammoth Diamond Dogs arena-rock tour, David Bowie got deeply into soul music. By July, he was spiking his live sets with covers of the Ohio Players' 'Here Today and Gone Tomorrow' and Eddie Floyd's 'Knock on Wood,' but he was even more interested in what was happening in dance clubs—particularly the new disco coming out of Philadelphia International Records. Bowie booked a mid-tour recording session at Sigma Sound, the studio where Kenneth Gamble and Leon Huff were constructing the sound of Philadelphia. But he wasn't working with Gamble and Huff, or indeed any of the studio's house musicians: He had something else in mind. \nThe soul-inspired album that came out of the Sigma Sound recordings, Young Americans, was yet another new direction for an artist who staked his career on ceaselessly finding new directions. It was also the first time he’d made an album whose chief purpose was pleasure. There’s nothing like the apocalyptic visions of Ziggy Stardust and Diamond Dogs on Young Americans; it’s as smart as anything he’d recorded before it, but also relaxed and limber-hipped enough for his hardcore fans’ less alienated big sisters and little brothers to get into. And it was the first of his records to feature Carlos Alomar, the ingenious rhythm guitarist who would become his live band’s musical director for more than a decade.",
  source: "https://pitchfork.com/reviews/albums/21488-young-americans/",
  genre: 'Soul',
  length: "40:13",
  label: "RCA",
  producer: "David Bowie, Harry Maslin, Tony Visconti",
  bowieId: plasticSoul.id

});

const stationToStation = await Album.create({
  name: "Station to Station",
  albumArt: "https://i.imgur.com/DGhmrMG.jpg",
  albumUrl: '<iframe src="https://open.spotify.com/embed/album/0MWrKayUshRuT8maG4ZAOU" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  releaseDate: "01-23-1976",
  description: "When rock stars do too much cocaine, they tend to do ridiculous things, like drive cars into motel swimming pools, or hire hit men to snuff out their bassist, or make Be Here Now. David Bowie, on the other hand, produced Station to Station, an album he allegedly doesn't remember making, but which, ironically, stands as his most immaculately constructed album, and the most important tactical transition in a career built upon aesthetic reinvention. \nArriving in the wake of 1975's glam-rock-shunning, Philly-soul-fetishizing Young Americans, Station to Station offered proof that Bowie's fascination with American funk and disco was no one-off lark. But if Young Americans often felt like a studied genre exercise, Station to Station filtered that rhythmic influence through some of Bowie's other obsessions at the time: the austere Krautrock of Neu! and Kraftwerk, the occult, Nazism, and, yes, a whole lotta blow. And yet, for all the tales of late-night black-majick ceremonies and Hitler-salute scandals that surrounded its release, perhaps the most bizarre thing about Station to Station is that an album of such sinister orgin would turn out to be Bowie's highest charting album ever in the U.S., peaking at No. 3. \nBy the mid-70s, it was customary for pop stars to sing of their disillusionment with fame (see: John Lennon/Plastic Ono Band, Neil Young's On the Beach) but they usually did so in an insular, introspective fashion, after they had gained some distance from the storm. By contrast, Station to Station finds Bowie expressing his weariness while the party was still rages on around him; even in the midst of his 'Golden Years', he's yearning to 'run for the shadows.' In essence, the album is a cry for help from the champagne room: On the hymn-like piano-ballad 'Word on a Wing', the career chameleon decries this 'age of grand illusion' (tellingly, this LP's Thin White Duke persona would be the last character Bowie introduced), while the title track's momentous prog-disco suite-- with references to Aleister Crowley and Kabbalism-- charts a course from spiritual void toward ecstatic religious reawakening. 'It's not the side effects of the cocaine,' Bowie declares as the song hits its funky, 4/4 stride, 'I'm thinking that it must be love.' Rarely have delusions been rendered with such grandeur.",
  source: "https://pitchfork.com/reviews/albums/14687-station-to-station-deluxe-edition/",
  genre: "art rock",
  length: "37:54",
  label: "RCA",
  producer: "David Bowie, Harry Maslin",
  bowieId: thinWhiteDuke.id

})

const ziggyStardust = await Album.create({
  name: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
  albumArt: "https://tf7i72apx4545vzwn3oriyy1-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/the-rise-and-fall-of-ziggy-stardust-and-the-spiders-from-mars.jpg",
  albumUrl: '<iframe src="https://open.spotify.com/embed/album/48D1hRORqJq52qsnUYZX56" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  releaseDate: "06-16-1972",
  description: "Released on June 16, 1972, David Bowie’s “The Rise and Fall of Ziggy Stardust and the Spiders from Mars” is a concept album which tells the story of the fictional rock star Ziggy Stardust. Due to a depletion of natural resources, humanity has reached its final five years of existence (“Five Years”) and its only hope exists in the form of an alien messiah (“Moonage Daydream”). Ziggy Stardust, the consummate rock star (a drug-using, omnisexual human manifestation of an alien being), acts as the messenger, with his band, the Spiders from Mars, on behalf of extraterrestrial beings called “starmen.” The message, beneath a hedonistic facade, ultimately communicates the time-honored rock ‘n’ roll theme of peace and love: a starman will come save Earth (“Starman”). He communicates this message to the youth of the world, who, having lost the desire to rock ‘n’ roll, become enthralled. Ziggy, however, is ultimately destroyed on stage (“Rock ‘n’ Roll Suicide”), his fate sealed by a decadence that only fame can encourage. (The same means by which many rockstars contribute to their own demise.) \nThe tragic flaw of the special man, not unlike a Hellenistic hero, is hubris. In the track “Ziggy Stardust,” one is reminded of Icarus, Ziggy having “… made it too far.” After all, this album chronicles both the rise and fall of our hero. Bowie describes the ego attributed to our prophet to William S. Burroughs in a 1974 “Rolling Stone” interview: Ziggy starts to believe in all this himself and thinks himself a prophet of the future starmen. He takes himself up to the incredible spiritual heights and is kept alive by his disciples. When the infinites arrive, they take bits of Ziggy to make themselves real, because in their original state they are anti-matter and cannot exist on our world. And they tear him to pieces onstage during the song “Rock ‘n’ Roll Suicide.”",
  source: "https://www.loc.gov/static/programs/national-recording-preservation-board/documents/booth_ziggy_stardust.pdf",
  genre: "Glam Rock",
  length: "38:29",
  label: "RCA",
  producer: "David Bowie, Ken Scott",
  bowieId: ziggy.id
})

const bowies = {
  'Ziggy Stardust': ziggy,
  'The Thin White Duke': thinWhiteDuke,
  'Plastic Soul': plasticSoul
}

const albums = {
  'Young Americans': youngAmericans,
  'Station to Station': stationToStation,
  'The Rise and Fall of Ziggy Stardust and the Spiders from Mars': ziggyStardust
}

await Promise.all(songs.map(song => Song.create({
  name: song.name,
  trackNumber: song.trackNumber,
  audioUrl: song.audioUrl,
  length: song.length,
  genre: song.genre,
  description: song.description,
  source: song.source,
  releaseDate: song.releaseDate,
  songwriter: song.songwriter,
  single: song.single,
  albumId: albums[song.album].id,
  bowieId: bowies[song.bowie].id
})))

db.close()
console.log(`

    Turn and face the seed!

    `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
