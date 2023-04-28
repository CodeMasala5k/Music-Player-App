const title = document.querySelector('.title');
        const prev = document.querySelector('.prev');
        const playPause = document.querySelector('.playPause');
        const next = document.querySelector('.next');
        const audio = document.querySelector('audio');
        
        //first we will create song list

        const songList = [
            {
                path: "Starboy.mp3",
                songName: "Starboy",
            },
           {
                path: "Onmyway.mp3",
                songName: "On My Way",
            },
           {
                path: "She Say Do You Love Me.mp3",
                songName: "Hakimi Song",
            },
        ];

        let song_Playing = false;

        //play song
        function playSong(){
            song_Playing = true;
            audio.play();
            playPause.classList.add('active');
            //change icon
            playPause.innerHTML = '<ion-icon name="pause"></ion-icon>'
        }
        function pauseSong(){
            song_Playing = false;
            audio.pause();
            playPause.classList.remove('active');
            //here also change icon
            playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
        }

        // play or pause song on click
        playPause.addEventListener('click', () => (song_Playing ?
        pauseSong() : playSong()));

        //load song
        function loadSong(songList){
            title.textContent = songList.songName;
            audio.src = songList.path;
        }
        //current song

        let i = 0;

        //on load = select second song from song list
        loadSong(songList[i]);

        //prev song
        function prevSong(){
            i--;
            if(i<0){
                i=songList.length -1;
            }
            loadSong(songList[i]);
            playSong();
        }

        prev.addEventListener('click',prevSong);

        //next song
        function nextSong(){
            i++;
            if(i > songList.length - 1){
                i=0;
            }
            loadSong(songList[i]);
            playSong();
        }

        next.addEventListener('click',nextSong);
