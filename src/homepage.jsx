import React from 'react';

function Homepage() {
    const images = {
        batman: require('./assets/images/Batman.jpg'),
        dracula: require('./assets/images/Dracula.jpg'),
        dune: require('./assets/images/Dune.jpg'),
        friends: require('./assets/images/Friends.jpg'),
        harryPotter: require('./assets/images/Harry Potter.jpg'),
        jjk: require('./assets/images/JJK.jpg'),
        komi: require('./assets/images/Komi.jpg'),
        naruto: require('./assets/images/Naruto.jpg'),
        notHereToBeLiked: require('./assets/images/Not here to be liked.jpg'),
        strangerThings: require('./assets/images/Stranger things.jpg'),
        theBoys: require('./assets/images/The boys.jpg'),
        laLaLand: require('./assets/images/La La Land.jpg'),
        background1: require('./assets/images/Background (1).png'),
        background: require('./assets/images/Background.png'),
        book: require('./assets/images/Book.png'),
        camera: require('./assets/images/Camera.png'),
        comedy: require('./assets/images/Comedy.png'),
        loudlyCryingFace: require('./assets/images/Loudly Crying Face.png'),
        rollingOnTheFloorLaughing: require('./assets/images/Rolling On The Floor Laughing.png')
    };

    return (
        
            <div style={{ position: 'relative' }}>
                <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, background: '#EDEDED', zIndex: -1 }} />
                <img style={{ width: 200.21, height: 300.31, left: 290.74, top: -39.23, position: 'absolute', transform: 'rotate(-15deg)', transformOrigin: 'top left' }} src={images.komi} />
                <img style={{ width: 200.28, height: 313.21, left: 34.01, top: 395.49, position: 'absolute', transform: 'rotate(22deg)', transformOrigin: 'top left' }} src={images.naruto} />
                <img style={{ width: 298.44, height: 392.72, left: 36.89, top: -91.26, position: 'absolute', transform: 'rotate(34deg)', transformOrigin: 'top left' }} src={images.dune} />
                <img style={{ width: 184.20, height: 276.30, left: -52.99, top: 828.59, position: 'absolute', transform: 'rotate(-13deg)', transformOrigin: 'top left' }} src={images.batman} />
                <img style={{ width: 275.34, height: 413.02, left: 1176.87, top: -0.09, position: 'absolute', transform: 'rotate(-21deg)', transformOrigin: 'top left' }} src={images.friends} />
                <img style={{ width: 250.14, height: 370.57, left: 912.73, top: 724.79, position: 'absolute', transform: 'rotate(10deg)', transformOrigin: 'top left' }} src={images.theBoys} />
                <img style={{ width: 200.11, height: 296.46, left: 595.94, top: -63.17, position: 'absolute', transform: 'rotate(3deg)', transformOrigin: 'top left' }} src={images.laLaLand} />
                <img style={{ width: 274.62, height: 450.93, left: 1192.68, top: 676.64, position: 'absolute', transform: 'rotate(-14deg)', transformOrigin: 'top left' }} src={images.dracula} />
                <img style={{ width: 200.19, height: 354.41, left: 469.15, top: 850.27, position: 'absolute', transform: 'rotate(-27deg)', transformOrigin: 'top left' }} src={images.jjk} />
                <img style={{ width: 195.34, height: 292.48, left: 936.34, top: -82.17, position: 'absolute', transform: 'rotate(12deg)', transformOrigin: 'top left' }} src={images.harryPotter} />
                <img style={{ width: 200.17, height: 302.37, left: 259.67, top: 813.83, position: 'absolute', transform: 'rotate(6deg)', transformOrigin: 'top left' }} src={images.notHereToBeLiked} />
                <div style={{ width: 433, height: 47, left: 503, top: 543, position: 'absolute', background: 'rgba(0, 0, 0, 0)' }}>
                    <div style={{ width: 496, height: 50, left: -30, top: 2, position: 'absolute', background: '#FDFDFD', borderTopLeftRadius: 21, borderTopRightRadius: 21, borderBottomRightRadius: 12, borderBottomLeftRadius: 16, border: '1px #DBDDDE solid' }} />
                    <div style={{ width: 115, height: 41, left: 312, top: 3, position: 'absolute', background: 'rgba(0, 0, 0, 0)' }}>
                        <img style={{ width: 105, height: 32, left: 35, top: 9, position: 'absolute', borderTopLeftRadius: 15.50, borderTopRightRadius: 15.50, borderBottomRightRadius: 6.25, borderBottomLeftRadius: 13.50 }} src={images.background} />
                        <div style={{ width: 46, height: 17, left: 65, top: 16, position: 'absolute' }}>
                            <div style={{ width: 46, left: 0, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#888888', fontSize: 13.80, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Search</div>
                        </div>
                    </div>
                    <div style={{ width: 258, height: 21, left: 0, top: 16, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#7B7B7B', fontSize: 13.40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Enter a Movie, TV show, Book or Anime</div>
                </div>
                <div style={{ width: 540, height: 50, left: 450, top: 436, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 54.80, fontFamily: 'Inter', fontWeight: '600' }}>Your next favourite story starts here!</div>
                <img style={{ width: 364.74, height: 438.03, left: 150.33, top: 450.07, position: 'absolute' }} src={images.camera} />
                <img style={{ width: 442, height: 453, left: 1005, top: 276, position: 'absolute' }} src={images.book} />
                <img style={{ width: 167, height: 144, left: 706, top: 706, position: 'absolute' }} src={images.loudlyCryingFace} />
                <img style={{ width: 129, height: 114, left: 155.65, top: 276, position: 'absolute', transform: 'rotate(18deg)', transformOrigin: 'top left' }} src={images.comedy} />
                <img style={{ width: 94, height: 94, left: 1125, top: 176.76, position: 'absolute', transform: 'rotate(-14deg)', transformOrigin: 'top left' }} src={images.rollingOnTheFloorLaughing} />
                <div style={{ width: 1411, height: 59, left: 16, top: 13, position: 'absolute', background: '#FDFDFD', borderTopLeftRadius: 21, borderTopRightRadius: 21, borderBottomRightRadius: 12, borderBottomLeftRadius: 16, border: '1px #DBDDDE solid' }} />
                <img style={{ width: 96, height: 32, left: 1315, top: 26, position: 'absolute', borderTopLeftRadius: 15.50, borderTopRightRadius: 15.50, borderBottomRightRadius: 6.25, borderBottomLeftRadius: 13.50 }} src={images.background1} />
                <div style={{ width: 75, left: 1328, top: 34, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#F4F4F4', fontSize: 13.80, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Dashboard</div>
                <img style={{ width: 96, height: 32, left: 1203, top: 26, position: 'absolute', borderTopLeftRadius: 15.50, borderTopRightRadius: 15.50, borderBottomRightRadius: 6.25, borderBottomLeftRadius: 13.50 }} src={images.background1} />
                <div style={{ width: 75, left: 1213, top: 34, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 13.80, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Sign-up</div>
                <img style={{ width: 96, height: 32, left: 1091, top: 26, position: 'absolute', borderTopLeftRadius: 15.50, borderTopRightRadius: 15.50, borderBottomRightRadius: 6.25, borderBottomLeftRadius: 13.50 }} src={images.background1} />
                <div style={{ width: 75, left: 1101, top: 34, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 13.80, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Explore</div>
                <div style={{ width: 190, height: 24, left: 74, top: 30, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 25, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>BingeBuddy</div>
            </div>
        
    );
}

// Add this line to export the component as default
export default Homepage;