import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    songs: [
        {
            id: 1,
            title: 'Iraivaa',
            artist: 'Yuvan Shankar Raja,Leon',
            image: 'https://i.scdn.co/image/ab67616d0000b2731216e051395d9ba314277c0e',
            audio: `${import.meta.env.BASE_URL}music/song1.mp3`
        },
        {
            id: 2,
            title: 'Thabangale',
            artist: 'Chinmayi, Govind Vasantha',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaCE1rYSnpZSF6Lbgr3_h0pRx57IomWKbWBsusclTog&s=10',
            audio: `${import.meta.env.BASE_URL}music/song2.mp3`
        },
        {
            id: 3,
            title: 'Kaakum vadivel',
            artist: 'Ajai S Khashyap and Vaaheesan Rasaiya',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChlsAEa_JoHtiQnsRP2xTsNsbSy8pnvxicGzFg5-YIA&s=10',
            audio: `${import.meta.env.BASE_URL}music/song3.mp3`
        },
        {
            id: 4,
            title: 'Kaalathukkum Nee Veenum',
            artist: 'A.R. Rahman',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWln6kL1726r_KWN2LxvStAchmDpfvB0ZEyPVf2CABw&s=10',
            audio: `${import.meta.env.BASE_URL}music/song4.mp3`
        },
        {
            id: 5,
            title: 'Kadhal Kanave',
            artist: 'Pradeep Kumar',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19bgIiLBGGOaPNbp8c9UnJ3LevxelzhnX6otdqLCThA&s=10',
            audio: `${import.meta.env.BASE_URL}music/song5.mp3`
        },
        {
            id: 6,
            title: 'Kaadhal Sadugudu',
            artist: 'S.P Saran',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lob8yWobJOriZjwtgBTmo2GAiMxmBeFSrJcgaMRizA&s=10',
            audio: `${import.meta.env.BASE_URL}music/song6.mp3`
        },
        {
            id: 7,
            title: 'Kani Mozhiyea',
            artist: 'Harish Jayaraj',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsS26lJolDds3cFMfOvYgHE_YwY5OLRkW3AIr8jFL_Q&s=10',
            audio: `${import.meta.env.BASE_URL}music/song7.mp3`
        }
    ]
}

const songSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {}
})

export default songSlice.reducer

export const allSongs = (state) => state.songs.songs