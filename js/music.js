/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            tracks: [
                {
                    name: "seisyun complex",
                    artist: "Kessoku Band",
                    cover:
                        "https://i.kym-cdn.com/photos/images/original/002/474/249/a97.jpg",
                    source:
                        "mp3/1.mp3",
                    url: "https://www.youtube.com/watch?v=RWFW1OSlMkM&list=OLAK5uy_mNWkxcU6VC_aWOFnpqYha-J5UMzwbVlx4",
                    favorited: false
                },
                {
                    name: "hitoribocchi tokyo",
                    artist: "kessoku band",
                    cover:
                        "https://images2.alphacoders.com/129/1295674.jpg",
                    source:
                        "mp3/2.mp3",
                    url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
                    favorited: true
                },
                {
                    name: "Distortion!!",
                    artist: "kessoku band",
                    cover:
                        "https://images8.alphacoders.com/129/1291341.png",
                    source:
                        "mp3/3.mp3",
                    url: "https://youtube.com/watch?v=c7oexOKsP6c&si=EnSIkaIECMiOmarE",
                    favorited: false
                },
                {
                    name: "Secret base",
                    artist: "kessoku band",
                    cover:
                        "https://images6.alphacoders.com/129/1296028.jpg",
                    source:
                        "mp3/4.mp3",
                    url: "https://www.youtube.com/watch?v=c7oexOKsP6c&list=OLAK5uy_mNWkxcU6VC_aWOFnpqYha-J5UMzwbVlx4&index=4",
                    favorited: false
                },
                {
                    name: "Guitar, Loneliness and Blue Planet",
                    artist: "kessoku band",
                    cover:
                        "https://images7.alphacoders.com/129/1296640.jpg",
                    source:
                        "mp3/5.mp3",
                    url: "https://www.youtube.com/watch?v=fYBQJfPBmRg&list=OLAK5uy_mNWkxcU6VC_aWOFnpqYha-J5UMzwbVlx4&index=5",
                    favorited: true
                },
                {
                    name: "I can't sing a love song",
                    artist: "kessoku band",
                    cover:
                        "https://images2.alphacoders.com/129/1296269.jpg",
                    source:
                        "mp3/6.mp3",
                    url: "https://youtube.com/watch?v=vW9d8-8gm7o&si=EnSIkaIECMiOmarE",
                    favorited: false
                },
                {
                    name: "That band",
                    artist: "kessoku band",
                    cover:
                        "https://images7.alphacoders.com/129/1296780.png",
                    source:
                        "mp3/7.mp3",
                    url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
                    favorited: true
                },
                {
                    name: "Karakara",
                    artist: "kessoku band",
                    cover:
                        "https://images4.alphacoders.com/129/1296283.jpg",
                    source:
                        "mp3/8.mp3",
                    url: "https://youtube.com/watch?v=3RWMMNsULsA&si=EnSIkaIECMiOmarE",
                    favorited: false
                },
                {
                    name: "The Little Sea",
                    artist: "kessoku band",
                    cover:
                        "https://images2.alphacoders.com/129/1296302.jpg",
                    source:
                        "mp3/9.mp3",
                    url: "https://youtube.com/watch?v=NF8c5pXx-Xc&si=EnSIkaIECMiOmarE",
                    favorited: false
                },
                {
                    name: "What is wrong with",
                    artist: "kessoku band",
                    cover:
                        "https://images5.alphacoders.com/129/1291143.jpg",
                    source:
                        "mp3/10.mp3",
                    url: "https://youtube.com/watch?v=h1uTWpCySRo&si=EnSIkaIECMiOmarE",
                    favorited: false
                },
                {
                    name: "Never forget",
                    artist: "kessoku band",
                    cover:
                    "https://images3.alphacoders.com/129/1296191.jpg",
                    source:
                        "mp3/11.mp3",
                    url: "https://youtube.com/watch?v=8Selo-P1Ovc&si=EnSIkaIECMiOmarE",
                    favorited: false
                },
                {
                    name: "If I could be a constellation",
                    artist: "kessoku band",
                    cover:
                        "https://images8.alphacoders.com/129/1296002.jpg",
                    source:
                        "mp3/12.mp3",
                    url: "https://youtube.com/watch?v=-LwBbLa_Vhc&si=EnSIkaIECMiOmarE",
                    favorited: false
                },
                {
                    name: "Flashbacker",
                    artist: "kessoku band",
                    cover:
                        "https://images7.alphacoders.com/129/1291974.jpg",
                    source:
                        "mp3/13.mp3",
                    url: "https://youtube.com/watch?v=ecVnw_SiREQ&si=EnSIkaIECMiOmarE",
                    favorited: false
                }
                ,
                {
                    name: "Rockn' Roll, Morning Light Falls on You",
                    artist: "kessoku band",
                    cover:
                        "https://images4.alphacoders.com/129/1295517.png",
                    source:
                        "mp3/14.mp3",
                    url: "https://youtube.com/watch?v=H7ZyZdqLb5Q&si=EnSIkaIECMiOmarE",
                    favorited: false
                }
            ],
            currentTrack: null,
            currentTrackIndex: 0,
            transitionName: null
        };
    },
    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
        },
        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime;
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        },
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = (maxduration * percentage) / 100;
            this.audio.play();
        },
        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
        },
        prevTrack() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentTrackIndex > 0) {
                this.currentTrackIndex--;
            } else {
                this.currentTrackIndex = this.tracks.length - 1;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        nextTrack() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
            } else {
                this.currentTrackIndex = 0;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentTrack.source;
            setTimeout(() => {
                if (this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.tracks[this.currentTrackIndex].favorited = !this.tracks[
                this.currentTrackIndex
            ].favorited;
        }
    },
    created() {
        let vm = this;
        this.currentTrack = this.tracks[0];
        this.audio = new Audio();
        this.audio.src = this.currentTrack.source;
        this.audio.ontimeupdate = function () {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function () {
            vm.generateTime();
        };
        this.audio.onended = function () {
            vm.nextTrack();
            this.isTimerPlaying = true;
        };

        // this is optional (for preload covers)
        for (let index = 0; index < this.tracks.length; index++) {
            const element = this.tracks[index];
            let link = document.createElement("link");
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image";
            document.head.appendChild(link);
        }
    }
});
