import InfoCard from "./components/infoCard"

export default function page(){
    const disneyParks = [
        {
            title: "Disneyland Park (Anaheim) - Anaheim, California, USA",
            images: ["/disneyland-castle.jpg", "/smallworld.jpg", "/disneyland-opening.jpg"],
            description: `
            Disneyland Park is the original Magic Kingdom—the park where Walt Disney walked, dreamed, and brought his stories to life in 1955. It was the first place in the world where families could explore lands of fantasy, adventure, and imagination together. From the jungles of Adventureland to the bright lights of Main Street, U.S.A., every inch of this park was designed to make guests feel like they’ve stepped into a living storybook.

            Classic attractions such as Pirates of the Caribbean, Haunted Mansion, and the Matterhorn Bobsleds revolutionized theme park storytelling and continue to charm millions today. Even with new lands like Star Wars: Galaxy’s Edge and reimagined favorites like Mickey & Minnie’s Runaway Railway, Disneyland retains its timeless magic. It’s a blend of nostalgia and innovation that only Walt’s original park can offer.
            `
        },
        {
            title: "Disney California Adventure Park - Anaheim, California, USA",
            images: ["/mickey-wheel.jpg", "/carsland.jpg", "/oldCA.jpg"],
            description: `
            Disney California Adventure is a vibrant celebration of the Golden State—its culture, movies, and iconic landscapes. Since opening in 2001, the park has transformed into a spectacular blend of Pixar storytelling, thrilling attractions, and immersive lands. You can soar over global landmarks on Soarin', stroll along the seaside charm of Pixar Pier, or speed through Radiator Springs in one of Disney’s most beloved rides.

            Today, the heart of the park lies in its bold expansion areas like Avengers Campus, where guests step directly into the world of Marvel heroes. With stunning nighttime shows like World of Color and a mix of original and reimagined attractions, California Adventure tells a story filled with color, energy, and West Coast spirit.
            `
        },
        {
            title: "Magic Kingdom Park - Orlando, Florida, USA",
            images: ["/cinderella-castle.jpeg", "/bayou-adventure.jpg", "/magickingdom-past.jpg"],
            description: `
            Magic Kingdom is the iconic heart of Walt Disney World—a place where fairy tales unfold, adventure calls, and childhood dreams take shape. Inspired by Disneyland but built on a grander scale, the park opened in 1971 with Cinderella Castle as its shimmering centerpiece. Each land offers a different kind of wonder, from the exotic temples of Adventureland to the nostalgic charm of Main Street, U.S.A.

            The park is home to some of Disney’s most legendary attractions, including Space Mountain, Pirates of the Caribbean, and the Haunted Mansion. Whether you're watching fireworks paint the sky above the castle or meeting beloved characters along the way, Magic Kingdom delivers an experience that feels timeless, magical, and unforgettable.
            `
        },
        {
            title: "EPCOT - Orlando, Florida, USA",
            images: ["/spaceship-earth.jpg", "/world-showcase-lagoon.jpg", "/oldepcot.jpg"],
            description: `
            EPCOT is a celebration of human creativity, global cultures, and technological innovation. Originally imagined by Walt Disney as a futuristic city, the park evolved into a place where imagination and discovery take center stage. The iconic Spaceship Earth geosphere welcomes guests into a world of science, exploration, and inspiration within the park’s Discovery neighborhoods.

            Around World Showcase Lagoon, guests travel across 11 countries, each sharing its music, architecture, cuisine, and traditions. Whether you’re gliding through time on Spaceship Earth, rocketing across the cosmos with Guardians of the Galaxy, or savoring global flavors around the lagoon, EPCOT blends learning and adventure into an experience unlike any other.
            `
        },
        {
            title: "Disney's Hollywood Studios - Orlando, Florida, USA",
            images: ["/sunset-blvd.jpg", "/galaxys-edge.jpg", "/oldMGM.jpg"],
            description: `
            Disney’s Hollywood Studios is all about stepping into the stories of your favorite movies and TV shows. Originally designed to show how films were made, the park has evolved into a cinematic adventure where guests become part of the action. From the eerie thrills of the Twilight Zone Tower of Terror to the playful chaos of Toy Story Land, the park is an ever-changing stage for blockbuster entertainment.

            The highlight for many visitors is Star Wars: Galaxy’s Edge, an immersive land where guests build custom lightsabers, pilot the Millennium Falcon, and join the Resistance on one of Disney’s most advanced attractions ever created. Hollywood Studios is a spectacular blend of Hollywood glamour and modern storytelling.
            `
        },
        {
            title: "Disney's Animal Kingdom - Orlando, Florida, USA",
            images: ["/treeoflife.jpg", "/pandora-green.jpg", "/safari.jpg"],
            description:`
            Disney’s Animal Kingdom is a breathtaking blend of nature, storytelling, and adventure. Unlike any other Disney park, it was designed around a deep respect for wildlife—where animals are not props but active participants in the experience. Lush jungles, flowing rivers, and authentic architecture immerse guests in lands inspired by Africa, Asia, and mythical worlds.

            The park’s crown jewels include the vibrant and dreamlike land of Pandora – The World of Avatar, the thrilling climb up Mount Everest to face the legendary Yeti, and the unforgettable safari journeys across the Harambe Wildlife Reserve. It's a place of discovery where nature and imagination live side by side.
            `
        },
        {
            title: "Tokyo Disneyland - Urayasu, Chiba Prefecture, Japan",
            images: ["/tokyocastle.jpg", "/beautyandbeastcastle.jpg", "/tokyo-opening-day.jpg"],
            description: `
            Tokyo Disneyland is often described as the “perfected” version of Disneyland—a beautifully maintained, meticulously crafted park known for its spectacular entertainment and world-class hospitality. Opened in 1983 as the first Disney park outside the United States, it captures the classic Disney feel while introducing groundbreaking attractions.

            Here, guests enjoy innovative experiences such as Pooh's Hunny Hunt, one of the world’s first trackless dark rides, and the breathtaking Enchanted Tale of Beauty and the Beast. With beloved classics, dazzling parades, and incredible attention to detail, Tokyo Disneyland shines as a jewel of the Disney park family.
            `
        },
        {
            title: "Tokyo DisneySea - Urayasu, Chiba Prefecture, Japan",
            images: ["/tokyodisneysea.jpg", "/rapunzelride.jpg", "/disneysea-opening.jpg"],
            description: `
            Tokyo DisneySea is widely considered the most immersive and beautifully themed park ever created. Opened in 2001, it celebrates the spirit of exploration through seven richly detailed “ports of call,” from the Mediterranean Harbor to the volcanic peaks of Mysterious Island. Its architecture, ambiance, and storytelling are unmatched in scale and artistry.

            Attractions like Journey to the Center of the Earth, Soaring: Fantastic Flight, and 20,000 Leagues Under the Sea bring guests into worlds of adventure, myth, and discovery. Every path feels cinematic, making DisneySea a dream destination for theme park fans around the globe.
            `
        },
        {
            title: "Disneyland Paris - Marne-la-Vallée, France",
            images: ["/disneyland-paris-castle.jpg", "/disneyland-paris-spacemountain.jpg", "/disneyland-paris-opening.jpg"],
            description: `
            Disneyland Paris brings Disney magic to life with a distinct European elegance. Since opening in 1992, the park has blended classic Disney storytelling with rich French artistry. Its Sleeping Beauty Castle is widely considered the most stunning of all the Disney castles, complete with stained glass windows, sculpted dragons, and a whimsical fantasy forest.

            Guests can blast off on Space Mountain with a thrilling Jules Verne twist, wander through the charming villages of Fantasyland, or enter the gothic world of Phantom Manor. Disneyland Paris is both familiar and fresh—an enchanting merging of Disney wonder and European charm.
            `
        },
        {
            title: "Walt Disney Studios Park - Marne-la-Vallée, France",
            images: ["/disneystudios.jpg", "/tower-of-terror.jpg", "/studios-opening-day.jpg"],
            description: `
            Walt Disney Studios Park invites guests behind the curtain into the worlds of animation, filmmaking, and live-action storytelling. What began as a modest studio park has evolved into a dynamic, movie-inspired destination filled with immersive lands and modern attractions. Today, the park features stunning areas like Avengers Campus, where guests can assist Spider-Man or join Iron Man in an action-packed mission.

            The park continues to grow with fan-favorite attractions such as Ratatouille: The Adventure and exciting new developments underway. It’s a playful, evolving park where imagination jumps from the screen into reality.
            `
        },
        {
            title: "Hong Kong Disneyland Park - Lantau Island, Hong Kong",
            images: ["/hongkong-castle.webp", "/world-of-frozen.jpg", "/hongkong-opening.jpg"],
            description:`
            Hong Kong Disneyland is a charming, intimate park filled with beautiful landscapes and one-of-a-kind attractions. Since opening in 2005, it has grown through major expansions that added unique lands like Mystic Point—home to the fan-favorite Mystic Manor, a whimsical trackless ride full of magical artifacts and curious spirits.

            With fresh takes on classic attractions and an entire land dedicated to the world of Frozen, the park blends the calm beauty of its natural surroundings with bold Disney storytelling. It’s a relaxing yet exciting magical escape.
            `
        },
        {
            title: "Shanghai Disneyland - Pudong, Shanghai, China",
            images: ["/shanghai-castle.jpg", "/shanghai-tron.png", "/shanghai-opening.jpg"],
            description: `
            Shanghai Disneyland is the newest and most boldly designed Disney castle park. Opening in 2016, it was created with the guiding philosophy “Authentically Disney, Distinctly Chinese,” bringing together beloved Disney stories with local culture and spectacular, modern design. The Enchanted Storybook Castle—the largest ever built—stands as the park’s radiant centerpiece.

            With groundbreaking attractions such as TRON Lightcycle Run, Pirates of the Caribbean: Battle for the Sunken Treasure, and Roaring Rapids, the park reimagines classic ideas for a new generation. It’s an epic and immersive vision of Disney’s future.
            `
        },
    ]
    return (
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <div className="space-y-4">

            <p className="text-gray-700 leading-relaxed text-lg">
            Grab your mouse-ears and your favorite snack — we’re about to take a
            whirlwind tour across the globe, exploring each of the major Disney
            theme parks. From California to China, from fairy-tale castles to
            futuristic adventures, each park has its own sparkle.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
            Then we’ll test your knowledge with a playful trivia quiz. Let’s go!
            </p>
        </div>

        {/* MICKEY DIVIDER */}
        <div className="flex items-center justify-center gap-6">
            <div className="flex-1 h-px bg-gray-300" />

            <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div className="absolute -top-2.5 -left-2.5 w-5 h-5 bg-black rounded-full"></div>
            <div className="absolute -top-2.5 -right-2.5  w-5 h-5 bg-black rounded-full"></div>
            </div>

            <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Map through parks to render InfoCard */}
        {disneyParks.map((park,index) => (
            <InfoCard
              key={index}
              title={park.title}
              images={park.images}
              description={park.description}
            />
        ))}

        {/* MICKEY DIVIDER */}
        <div className="flex items-center justify-center gap-6">
            <div className="flex-1 h-px bg-gray-300" />

            <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div className="absolute -top-2.5 -left-2.5 w-5 h-5 bg-black rounded-full"></div>
            <div className="absolute -top-2.5 -right-2.5  w-5 h-5 bg-black rounded-full"></div>
            </div>

            <div className="flex-1 h-px bg-gray-300" />
        </div>
        {/* Trivia Button */}
        <div className="flex items-center justify-center">
            <button className="bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#274bbf] transition-all duration-300">
                <a href="/trivia" className="block w-full h-full">
                    Take the Trivia Quiz!
                </a>
            </button>
        </div>
        </main>
    );
}