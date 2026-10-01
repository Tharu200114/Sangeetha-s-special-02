// =========================================================
// SANGEETHA BABY - BIRTHDAY SURPRISE
// COMPLETE JAVASCRIPT
//
// FLOW:
//
// PASSWORD
//     ↓
// BIRTHDAY
//     ↓
// MESSAGE
//     ↓
// FRIENDS & FAMILY WISHES
//     ↓
// OUR STORY
//     ↓
// SURPRISE VIDEO
//     ↓
// FINAL MYSTERY GIFT
//
// MUSIC:
//
// birthdaysong.mp3
// friends-song.mp3
// story-song.mp3
// final-surprise.mp3
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // PASSWORD SCREEN
    // =========================================================

    const passwordInput =
        document.getElementById("passwordInput");

    const unlockButton =
        document.getElementById("unlockButton");

    const loginScreen =
        document.getElementById("loginScreen");

    const birthdayScreen =
        document.getElementById("birthdayScreen");


    // =========================================================
    // MUSIC
    // =========================================================

    const birthdaySong =
        document.getElementById("birthdaySong");

    const friendsSong =
        document.getElementById("friendsSong");

    const storySong =
        document.getElementById("storySong");

    const finalSurpriseSong =
        document.getElementById("finalSurpriseSong");


    // =========================================================
    // FRIEND VIDEO STATE
    // =========================================================

    let song1WasPlaying = false;

    let song1PausedTime = 0;

    let activeVideo = null;


    // =========================================================
    // PAGE ELEMENTS
    // =========================================================

    const continueButton =
        document.getElementById("continueButton");

    const messageScreen =
        document.getElementById("messageScreen");

    const friendsButton =
        document.getElementById("friendsButton");

    const friendsWishesScreen =
        document.getElementById("friendsWishesScreen");

    const wishesContainer =
        document.getElementById("wishesContainer");

    const storyButton =
        document.getElementById("storyButton");

    const ourStoryScreen =
        document.getElementById("ourStoryScreen");

    const songButton =
        document.getElementById("songButton");


    // =========================================================
    // SURPRISE VIDEO
    // =========================================================

    const surpriseVideoScreen =
        document.getElementById("surpriseVideoScreen");

    const surpriseVideo =
        document.getElementById("surpriseVideo");


    // =========================================================
    // FINAL MYSTERY
    // =========================================================

    const finalSurpriseButton =
        document.getElementById("finalSurpriseButton");

    const finalMysteryScreen =
        document.getElementById("finalMysteryScreen");

    const giftBox =
        document.getElementById("giftBox");

    const giftReveal =
        document.getElementById("giftReveal");


    // =========================================================
    // GOOGLE APPS SCRIPT
    // =========================================================

    const wishesAPI =
        "https://script.google.com/macros/s/AKfycbz23d7D9ajdZ7wdH93giWbl56SgzA1IUhZJBzjoXUfgbKTXUM-GPR98fhXZPtW_/exec";


    // =========================================================
    // PASSWORD UNLOCK
    // =========================================================

    if (
        passwordInput &&
        unlockButton &&
        loginScreen &&
        birthdayScreen
    ) {

        unlockButton.addEventListener(
            "click",
            function () {

                const password =
                    passwordInput.value.trim();


                // =================================================
                // CORRECT PASSWORD
                // =================================================

                if (password === "0214") {

                    loginScreen.style.display =
                        "none";

                    birthdayScreen.style.display =
                        "block";

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                    playBirthdaySong();

                    console.log(
                        "🔓 Password correct."
                    );

                    console.log(
                        "🎂 Birthday screen opened."
                    );

                }


                // =================================================
                // WRONG PASSWORD
                // =================================================

                else {

                    alert(
                        "Wrong password 🔒"
                    );

                    passwordInput.value = "";

                    passwordInput.focus();

                }

            }
        );


        // =================================================
        // PRESS ENTER TO UNLOCK
        // =================================================

        passwordInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    unlockButton.click();

                }

            }
        );

    }


    // =========================================================
    // BIRTHDAY SONG
    // =========================================================

    function playBirthdaySong() {

        if (!birthdaySong) {

            console.log(
                "ERROR: birthdaySong was not found."
            );

            return;

        }


        stopFriendsSong(true);

        stopStorySong(true);

        stopFinalSurpriseSong(true);


        try {

            birthdaySong.currentTime = 0;

        } catch (error) {

            console.log(
                "Could not reset birthday song:",
                error
            );

        }


        const playPromise =
            birthdaySong.play();


        if (playPromise !== undefined) {

            playPromise
                .then(function () {

                    console.log(
                        "🎵 Birthday song started successfully."
                    );

                })
                .catch(function (error) {

                    console.log(
                        "Birthday song could not start:",
                        error
                    );

                });

        }

    }


    // =========================================================
    // STOP BIRTHDAY SONG
    // =========================================================

    function stopBirthdaySong(reset = false) {

        if (!birthdaySong) {
            return;
        }

        birthdaySong.pause();

        if (reset) {

            try {

                birthdaySong.currentTime = 0;

            } catch (error) {

                console.log(
                    "Could not reset birthday song:",
                    error
                );

            }

        }

    }


    // =========================================================
    // STOP FRIENDS SONG
    // =========================================================

    function stopFriendsSong(reset = false) {

        if (!friendsSong) {
            return;
        }

        friendsSong.pause();

        if (reset) {

            try {

                friendsSong.currentTime = 0;

            } catch (error) {

                console.log(
                    "Could not reset friends song:",
                    error
                );

            }

        }

    }


    // =========================================================
    // STOP STORY SONG
    // =========================================================

    function stopStorySong(reset = false) {

        if (!storySong) {
            return;
        }

        storySong.pause();

        if (reset) {

            try {

                storySong.currentTime = 0;

            } catch (error) {

                console.log(
                    "Could not reset story song:",
                    error
                );

            }

        }

    }


    // =========================================================
    // STOP FINAL SURPRISE SONG
    // =========================================================

    function stopFinalSurpriseSong(reset = false) {

        if (!finalSurpriseSong) {
            return;
        }

        finalSurpriseSong.pause();

        if (reset) {

            try {

                finalSurpriseSong.currentTime = 0;

            } catch (error) {

                console.log(
                    "Could not reset final surprise song:",
                    error
                );

            }

        }

    }


    // =========================================================
    // PLAY FRIENDS SONG
    // =========================================================

    function playFriendsSong() {

        if (!friendsSong) {

            console.log(
                "ERROR: friendsSong was not found."
            );

            return;

        }


        stopBirthdaySong(true);

        stopStorySong(true);

        stopFinalSurpriseSong(true);


        try {

            friendsSong.currentTime = 0;

        } catch (error) {

            console.log(
                "Could not reset friends song:",
                error
            );

        }


        const playPromise =
            friendsSong.play();


        if (playPromise !== undefined) {

            playPromise
                .then(function () {

                    console.log(
                        "🎵 Friends song started successfully."
                    );

                })
                .catch(function (error) {

                    console.log(
                        "Friends song could not start:",
                        error
                    );

                });

        }

    }


    // =========================================================
    // PLAY STORY SONG
    // =========================================================

    function playStorySong() {

        if (!storySong) {

            console.log(
                "ERROR: storySong was not found."
            );

            return;

        }


        stopBirthdaySong(true);

        stopFriendsSong(true);

        stopFinalSurpriseSong(true);


        try {

            storySong.currentTime = 0;

        } catch (error) {

            console.log(
                "Could not reset story song:",
                error
            );

        }


        const playPromise =
            storySong.play();


        if (playPromise !== undefined) {

            playPromise
                .then(function () {

                    console.log(
                        "🎵 Story song started successfully."
                    );

                })
                .catch(function (error) {

                    console.log(
                        "Story song could not start:",
                        error
                    );

                });

        }

    }


    // =========================================================
    // PLAY FINAL SURPRISE SONG
    // =========================================================

    function playFinalSurpriseSong() {

        if (!finalSurpriseSong) {

            console.log(
                "ERROR: finalSurpriseSong was not found."
            );

            return;

        }


        stopBirthdaySong(true);

        stopFriendsSong(true);

        stopStorySong(true);


        try {

            finalSurpriseSong.currentTime = 0;

        } catch (error) {

            console.log(
                "Could not reset final surprise song:",
                error
            );

        }


        const playPromise =
            finalSurpriseSong.play();


        if (playPromise !== undefined) {

            playPromise
                .then(function () {

                    console.log(
                        "🎵 Final surprise song started successfully."
                    );

                })
                .catch(function (error) {

                    console.log(
                        "Final surprise song could not start:",
                        error
                    );

                });

        }

    }


    // =========================================================
    // 🎂 BIRTHDAY → 💌 MESSAGE
    //
    // Birthday song CONTINUES.
    // =========================================================

    if (
        continueButton &&
        birthdayScreen &&
        messageScreen
    ) {

        continueButton.addEventListener(
            "click",
            function () {

                birthdayScreen.style.display =
                    "none";

                messageScreen.style.display =
                    "block";


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                console.log(
                    "🎂 Birthday → 💌 Message"
                );

                console.log(
                    "🎵 Birthday song continues."
                );

            }
        );

    }


    // =========================================================
    // 👭 FRIENDS & FAMILY BUTTON
    // =========================================================

    if (
        friendsButton &&
        friendsWishesScreen &&
        wishesContainer &&
        storyButton
    ) {

        friendsButton.addEventListener(
            "click",
            function () {


                // =================================================
                // HIDE MESSAGE
                // =================================================

                if (messageScreen) {

                    messageScreen.style.display =
                        "none";

                }


                // =================================================
                // SHOW FRIENDS PAGE
                // =================================================

                friendsWishesScreen.style.display =
                    "block";


                // =================================================
                // HIDE STORY BUTTON
                // =================================================

                storyButton.style.display =
                    "none";


                // =================================================
                // LOADING MESSAGE
                // =================================================

                wishesContainer.innerHTML = `

                    <div class="loading-wishes">

                        <p>
                            Loading your special wishes...
                        </p>

                    </div>

                `;


                // =================================================
                // GO TO TOP
                // =================================================

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });


                // =================================================
                // STOP BIRTHDAY SONG
                // =================================================

                stopBirthdaySong(true);


                // =================================================
                // START FRIENDS SONG
                // =================================================

                playFriendsSong();


                // =================================================
                // LOAD WISHES
                // =================================================

                loadFriendsWishes();

            }
        );

    }


    // =========================================================
    // LOAD FRIENDS' WISHES
    // =========================================================

    async function loadFriendsWishes() {

        if (!wishesContainer) {
            return;
        }


        try {

            const response =
                await fetch(
                    wishesAPI,
                    {
                        method: "GET",
                        cache: "no-store"
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "Unable to load wishes."
                );

            }


            const wishes =
                await response.json();


            wishesContainer.innerHTML =
                "";


            // =================================================
            // NO WISHES
            // =================================================

            if (
                !Array.isArray(wishes) ||
                wishes.length === 0
            ) {

                wishesContainer.innerHTML = `

                    <p>
                        Your friends are still preparing
                        their wishes... ❤️
                    </p>

                `;


                storyButton.style.display =
                    "none";

                return;

            }


            // =================================================
            // CREATE FRIEND CARDS
            // =================================================

            wishes.forEach(function (friend) {

                const card =
                    document.createElement("div");


                card.className =
                    "wish-card";


                let mediaHTML =
                    "";


                // =================================================
                // FRIEND MEDIA
                // =================================================

                if (friend.media) {

                    const mediaText =
                        String(friend.media);


                    // Find Tally private storage URLs
                    const mediaURLs =
                        mediaText.match(
                            /https:\/\/storage\.tally\.so\/private\/[^\s<>)]+/g
                        ) || [];


                    mediaURLs.forEach(
                        function (url) {


                            // =================================================
                            // CLEAN URL
                            // =================================================

                            url = url
                                .replace(
                                    /&amp;/g,
                                    "&"
                                )
                                .replace(
                                    /&#xA;/g,
                                    ""
                                )
                                .replace(
                                    /\\&/g,
                                    "&"
                                )
                                .replace(
                                    /\\$/g,
                                    ""
                                );


                            const lowerURL =
                                url.toLowerCase();


                            // =================================================
                            // CHECK VIDEO
                            // =================================================

                            const isVideo =
                                lowerURL.includes(".mp4") ||
                                lowerURL.includes(".webm") ||
                                lowerURL.includes(".mov") ||
                                lowerURL.includes(".m4v");


                            // =================================================
                            // VIDEO
                            // =================================================

                            if (isVideo) {

                                mediaHTML += `

                                    <div class="wish-video-wrapper">

                                        <video
                                            class="wish-video"
                                            controls
                                            playsinline
                                            preload="metadata"
                                        >

                                            <source
                                                src="${url}"
                                            >

                                            Your browser does not support video.

                                        </video>

                                    </div>

                                `;

                            }


                            // =================================================
                            // PHOTO
                            // =================================================

                            else {

                                mediaHTML += `

                                    <div class="wish-image-wrapper">

                                        <img
                                            class="wish-image"
                                            src="${url}"
                                            alt="Special memory"
                                            loading="lazy"
                                        >

                                    </div>

                                `;

                            }

                        }
                    );

                }


                // =================================================
                // FRIEND CARD
                // =================================================

                card.innerHTML = `

                    <h2>

                        ❤️ ${escapeHTML(
                            friend.name ||
                            "A Special Friend"
                        )}

                    </h2>


                    <p class="relationship">

                        ${escapeHTML(
                            friend.relationship ||
                            "Someone special"
                        )}

                    </p>


                    <p>

                        ${escapeHTML(
                            friend.wish ||
                            "Happy Birthday, Sangeetha! ❤️"
                        )}

                    </p>


                    ${mediaHTML}

                `;


                wishesContainer.appendChild(
                    card
                );

            });


            // =================================================
            // CONNECT VIDEO CONTROLS
            // =================================================

            setupWishVideos();


            // =================================================
            // SHOW STORY BUTTON
            // =================================================

            storyButton.style.display =
                "inline-block";


        } catch (error) {

            console.error(
                "Error loading wishes:",
                error
            );


            wishesContainer.innerHTML = `

                <div class="wish-card">

                    <p>
                        Unable to load wishes right now. ❤️
                    </p>

                    <p>
                        Please try again later.
                    </p>

                </div>

            `;


            storyButton.style.display =
                "none";

        }

    }


    // =========================================================
    // 📹 FRIEND VIDEO CONTROL
    // =========================================================

    function setupWishVideos() {

        const videos =
            document.querySelectorAll(
                ".wish-video"
            );


        videos.forEach(function (video) {


            // =====================================================
            // VIDEO STARTS
            // =====================================================

            video.addEventListener(
                "play",
                function () {


                    console.log(
                        "================================"
                    );

                    console.log(
                        "📹 FRIEND VIDEO STARTED"
                    );


                    // =================================================
                    // STOP OTHER FRIEND VIDEOS
                    // =================================================

                    videos.forEach(
                        function (otherVideo) {

                            if (
                                otherVideo !== video &&
                                !otherVideo.paused
                            ) {

                                otherVideo.pause();

                            }

                        }
                    );


                    activeVideo =
                        video;


                    // =================================================
                    // CHECK FRIENDS SONG
                    // =================================================

                    if (
                        friendsSong &&
                        !friendsSong.paused &&
                        !friendsSong.ended
                    ) {

                        song1WasPlaying =
                            true;


                        // SAVE EXACT POSITION

                        song1PausedTime =
                            friendsSong.currentTime;


                        console.log(
                            "🎵 Friends song position saved:",
                            song1PausedTime
                        );


                        // PAUSE FRIENDS SONG

                        friendsSong.pause();


                        console.log(
                            "🎵 Friends song PAUSED."
                        );

                    } else {

                        song1WasPlaying =
                            false;

                    }

                }
            );


            // =====================================================
            // VIDEO FINISHED
            // =====================================================

            video.addEventListener(
                "ended",
                function () {


                    console.log(
                        "================================"
                    );

                    console.log(
                        "📹 FRIEND VIDEO FINISHED"
                    );


                    // =================================================
                    // RESUME FRIENDS SONG
                    // =================================================

                    if (
                        activeVideo === video &&
                        song1WasPlaying &&
                        friendsSong
                    ) {

                        const savedTime =
                            song1PausedTime;


                        console.log(
                            "🎵 Resuming friends song from:",
                            savedTime
                        );


                        function resumeFriendsSong() {

                            if (!friendsSong) {
                                return;
                            }


                            try {

                                friendsSong.currentTime =
                                    savedTime;

                            } catch (error) {

                                console.log(
                                    "Position restore error:",
                                    error
                                );

                            }


                            const playPromise =
                                friendsSong.play();


                            if (
                                playPromise !== undefined
                            ) {

                                playPromise
                                    .then(function () {

                                        console.log(
                                            "✅ FRIENDS SONG RESUMED"
                                        );

                                    })
                                    .catch(function (error) {

                                        console.log(
                                            "Friends song resume failed:",
                                            error
                                        );

                                    });

                            }

                        }


                        activeVideo =
                            null;


                        resumeFriendsSong();


                        setTimeout(
                            function () {

                                if (
                                    friendsSong.paused &&
                                    activeVideo === null
                                ) {

                                    resumeFriendsSong();

                                }

                            },
                            150
                        );


                        setTimeout(
                            function () {

                                if (
                                    friendsSong.paused &&
                                    activeVideo === null
                                ) {

                                    resumeFriendsSong();

                                }

                            },
                            400
                        );


                        setTimeout(
                            function () {

                                if (
                                    friendsSong.paused &&
                                    activeVideo === null
                                ) {

                                    resumeFriendsSong();

                                }

                            },
                            800
                        );


                        setTimeout(
                            function () {

                                if (
                                    friendsSong.paused &&
                                    activeVideo === null
                                ) {

                                    resumeFriendsSong();

                                }

                            },
                            1500
                        );

                    }


                    song1WasPlaying =
                        false;

                    song1PausedTime =
                        0;

                }
            );


            // =====================================================
            // VIDEO PAUSED MANUALLY
            // =====================================================

            video.addEventListener(
                "pause",
                function () {

                    if (!video.ended) {

                        console.log(
                            "📹 Friend video paused manually."
                        );

                    }

                }
            );

        });

    }


    // =========================================================
    // SAFE HTML
    // =========================================================

    function escapeHTML(value) {

        return String(value)

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );

    }


    // =========================================================
    // 👭 FRIENDS → 📖 OUR STORY
    // =========================================================

    if (
        storyButton &&
        friendsWishesScreen &&
        ourStoryScreen
    ) {

        storyButton.addEventListener(
            "click",
            function () {


                // =================================================
                // STOP ALL FRIEND VIDEOS
                // =================================================

                const videos =
                    document.querySelectorAll(
                        ".wish-video"
                    );


                videos.forEach(
                    function (video) {

                        video.pause();

                    }
                );


                // =================================================
                // CLEAR VIDEO STATE
                // =================================================

                activeVideo =
                    null;

                song1WasPlaying =
                    false;

                song1PausedTime =
                    0;


                // =================================================
                // STOP FRIENDS SONG
                // =================================================

                stopFriendsSong(true);


                // =================================================
                // SHOW OUR STORY
                // =================================================

                friendsWishesScreen.style.display =
                    "none";

                ourStoryScreen.style.display =
                    "block";


                // =================================================
                // GO TO TOP
                // =================================================

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });


                // =================================================
                // START STORY SONG
                // =================================================

                playStorySong();


                // =================================================
                // STORY IMAGE ANIMATION
                // =================================================

                const storyImage =
                    document.getElementById(
                        "storyImage"
                    );


                if (storyImage) {

                    storyImage.classList.remove(
                        "show-story-image"
                    );


                    requestAnimationFrame(
                        function () {

                            requestAnimationFrame(
                                function () {

                                    storyImage.classList.add(
                                        "show-story-image"
                                    );

                                }
                            );

                        }
                    );

                }


                console.log(
                    "👭 Friends → 📖 Our Story"
                );

                console.log(
                    "🎵 Friends song stopped."
                );

                console.log(
                    "🎵 Story song started."
                );

            }
        );

    }


    // =========================================================
    // 📖 OUR STORY → 🎁 SURPRISE VIDEO
    // =========================================================

    if (
        songButton &&
        ourStoryScreen &&
        surpriseVideoScreen
    ) {

        songButton.addEventListener(
            "click",
            function () {


                // =================================================
                // STOP STORY SONG
                // =================================================

                stopStorySong(true);


                // =================================================
                // HIDE OUR STORY
                // =================================================

                ourStoryScreen.style.display =
                    "none";


                // =================================================
                // SHOW SURPRISE VIDEO
                // =================================================

                surpriseVideoScreen.style.display =
                    "block";


                // =================================================
                // GO TO TOP
                // =================================================

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                // =================================================
                // RESET SURPRISE VIDEO
                // =================================================

                if (surpriseVideo) {

                    surpriseVideo.pause();

                    try {

                        surpriseVideo.currentTime =
                            0;

                    } catch (error) {

                        console.log(
                            "Could not reset surprise video:",
                            error
                        );

                    }

                }


                console.log(
                    "📖 Our Story → 🎁 Surprise Video"
                );

                console.log(
                    "🎵 Story song stopped."
                );

                console.log(
                    "🎬 Surprise video section opened."
                );

            }
        );

    }


    // =========================================================
    // 🔐 TOUCH TO UNLOCK THE MYSTERY
    // =========================================================

    if (
        finalSurpriseButton &&
        finalMysteryScreen &&
        giftBox &&
        giftReveal &&
        surpriseVideoScreen
    ) {

        finalSurpriseButton.addEventListener(
            "click",
            function () {


                // =================================================
                // STOP SURPRISE VIDEO
                // =================================================

                if (surpriseVideo) {

                    surpriseVideo.pause();

                }


                // =================================================
                // HIDE VIDEO SECTION
                // =================================================

                surpriseVideoScreen.style.display =
                    "none";


                // =================================================
                // SHOW FINAL MYSTERY
                // =================================================

                finalMysteryScreen.style.display =
                    "flex";


                // =================================================
                // START FINAL SURPRISE MUSIC
                // =================================================

                playFinalSurpriseSong();


                // =================================================
                // GO TO TOP
                // =================================================

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                console.log(
                    "🔐 Mystery unlocked."
                );


                // =================================================
                // SMALL DELAY BEFORE BOX ANIMATION
                // =================================================

                setTimeout(
                    function () {

                        giftBox.classList.add(
                            "open"
                        );


                        console.log(
                            "🎁 Gift box opening..."
                        );


                        // =================================================
                        // SHOW FINAL MESSAGE
                        // =================================================

                        setTimeout(
                            function () {

                                giftReveal.classList.add(
                                    "show"
                                );


                                console.log(
                                    "✨ Final surprise revealed."
                                );

                            },
                            900
                        );

                    },
                    1000
                );

            }
        );

    }


    // =========================================================
    // DEBUG MESSAGE
    // =========================================================

    console.log(
        "========================================"
    );

    console.log(
        "🎂 SANGEETHA BABY BIRTHDAY WEBSITE"
    );

    console.log(
        "✅ JavaScript loaded successfully."
    );

    console.log(
        "🔐 Password: 0214"
    );

    console.log(
        "🎵 Final surprise music loaded."
    );

    console.log(
        "========================================"
    );

});