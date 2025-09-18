const FloatingReviews = () => {
    const reviews = [
        {
            text: "I recently had a tattoo done at the Four Deuces, and it was a good experience overall. The artists were skilled, professional, and attentive to my requests. The studio was clean and well-maintained, creating a comfortable environment. I'm happy with the quality of my tattoo and would recommend this salon to others. Big thanks to the discount made and the post treatment. Kudos to Max and team.",
            author: "Iurii Cherniavskyi",
            rating: 5,
        },
        {
            text: "Ik denk dat dit over het algemeen de beste tattooshop van Amsterdam is, een hele grote salon, gezellig, uitstekende artiesten, ik weet ook nog dat de koffie erg lekker is👍🏻👍🏻👍🏻",
            author: "Nikita Van",
            rating: 5,
        },
        {
            text: "Ik had een geweldige ervaring bij The Four Deuces! Het personeel was vriendelijk en professioneel, en de hygiëne was top. Mijn tatoeëerder luisterde goed naar mijn wensen en leverde prachtig werk af. Ik ben super tevreden met het eindresultaat en zal zeker terugkomen voor mijn volgende tattoo. Sterk aanbevolen!",
            author: "Thomas Moran",
            rating: 5,
        },
        {
            text: "Wat een top shop !!! Doen wat ze zeggen en nemen de tijd om alles helemaal goed uit te werken. Ik ben geholpen door eugene en wat een vak man is dat hij streeft naar perfectie en dat is wat je wilt bij een tattoo hij luisterd naar je idee en denk ontzettend goed mee over hoe het het mooiste uitkomt. Ik als zeer tevreden klant raad iedereen deze shop aan dikke verdiende 5 sterren",
            author: "Tim van Toorn",
            rating: 5,
        },
        {
            text: "Best tattoo shop in Amsterdam – incredibly talented artists and just all around great vibes!",
            author: "Rogier Broekhuis",
            rating: 5,
        },
        {
            text: "Best place in Amsterdam to get tattooed",
            author: "Monsieur Düsseltal",
            rating: 5,
        },
        {
            text: "Ik heb mijn eerste tattoo hier laten zetten vandaag door Daria, en alles was perfect. Ze heeft zo veel moeite gestoken in mijn design, totdat het precies was wat ik in gedachten had. Verder was ze ongelofelijk lief en behulpzaam. Ze communiceerde goed en haar werk is geweldig. Ik ben ongelofelijk blij met het eindresultaat. Ontzettend bedankt ❤️❤️❤️",
            author: "Nigella",
            rating: 5,
        },
        {
            text: "Max is a master who I am ready to travel all over the world to. I had several of his tattoos from Kyiv and came here. He is a wonderful, sincere, cool person and a real pro. It's a pity that I don't get tattoos so often, I would go to this studio as if it were my job. Cozy, clean, spacious. I came for Christmas and the studio had an extra magical vibe. Thank you for everything.",
            author: "Y H",
            rating: 5,
        },
        {
            text: "Super goede shop! Werd goed geholpen en werd goed gekeken naar wat jij precies wilde! Schets werd gemaakt naar hoe jij het zelf wil met tips van de artiest zelf! Ik had Max en heb al een halve sleeve af door hem en ben zeker van plan om deze ook af te maken bij Max!",
            author: "Renzo de Punder",
            rating: 5,
        },
        {
            text: "Today I got a tattoo from tattoo artist Daria. Everything from the idea to the final result is top notch, plus a subtle sense of taste, the ability to hear the client and embody the idea in an ideal form. She works carefully, confidently and with great love for her work.",
            author: "Valentina Sviatoha",
            rating: 5,
        },
        {
            text: "I want to thank you Alexei @pan.tattooist for the amazing Ayrton Senna tattoo. From the first contact to the final moment, everything was smooth and professional.",
            author: "vinicio pastre",
            rating: 5,
        },
        {
            text: "Alexei is a perfectionist and true artist. 10/10 great vibes, nice shop.",
            author: "Justin Frederickson",
            rating: 5,
        },
    ];

    const ctaBtn =
        "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";

    return (
        <div id="reviews" className="reviews-panel active">
            <div className="w-full mt-8 p-6 sm:p-6 md:p-20">
                {/* Heading */}
                <div className="relative inline-block mb-6">
                    <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold">
                        Reviews
                    </div>
                    <span className="absolute -top-2 -right-6 text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">
                        {reviews.length}
                    </span>
                </div>

                {/* Intro text */}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 md:w-1/2 gap-6 text-base md:text-[0.9rem] font-thin">
                        <div>
                            <h3 className="text-[#f0efed]/[0.4]">[Our Clients]</h3>
                            <p>
                                Real words from people who’ve trusted us with their stories,
                                their ideas, and their skin.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#f0efed]/[0.4]">[Their Experience]</h3>
                            <p>
                                Every tattoo is more than ink — it’s an experience. Here’s what
                                they had to say.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 flex flex-wrap justyfy-end">
                        <a
                            href="https://g.page/r/CRhrBvXgDpG6EAE/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${ctaBtn} relative pr-8 group overflow-hidden`}
                        >
                            Leave a Review
                            <img
                                src="/arrow-top.svg"
                                alt="arrow"
                                className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating/scrolling reviews */}
            <div className="w-full relative mt-12 pt-4 cursor-grab overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 min-h-[300px] items-stretch animate-marquee hover:pause-animation">
                    {reviews.concat(reviews).map((review, idx) => (
                        <div
                            key={idx}
                            className="card flex-shrink-0 w-72 sm:w-80 md:w-96 flex flex-col p-4 gap-6"
                        >
                            <p className="text-base md:text-[0.9rem] flex-1">{review.text}</p>
                            <p className="font-thin uppercase text-xs text-[#f0efed]/[0.4]">
                                {review.author}
                            </p>
                            <p className="text-xs text-[#f0efed]/[0.4]">
                                {review.rating} star review from{" "}
                                <a
                                    href={review.url || "https://g.page/r/CRhrBvXgDpG6EAE/review"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 underline"
                                >
                                    Google
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

window.FloatingReviews = FloatingReviews;