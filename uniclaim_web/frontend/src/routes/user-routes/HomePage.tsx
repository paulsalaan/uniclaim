import { useState } from "react";
import MobileNavText from "@/components/NavHeadComp";
import SearchBar from "../../components/SearchBar";

interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  type: "lost" | "found";
}

function fuzzyMatch(text: string, query: string): boolean {
  const cleanedText = text.toLowerCase();
  const queryWords = query.toLowerCase().split(/\W+/).filter(Boolean);

  // Make sure every keyword appears in the text
  return queryWords.every((word) => cleanedText.includes(word));
}

function highlightAndTruncate(
  text: string,
  keyword: string,
  maxLength = 100
): string {
  let truncated = text;
  if (text.length > maxLength) {
    truncated = text.slice(0, maxLength).trim() + "...";
  }

  if (!keyword.trim()) return truncated;

  const words = keyword
    .toLowerCase()
    .split(" ")
    .filter((w) => w.length > 0);

  let result = truncated;

  words.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    result = result.replace(
      regex,
      `<span class="bg-blue-300 font-medium">$1</span>`
    );
  });

  return result;
}

// for-test-search-purposes
const dummyPosts: Post[] = [
  {
    id: "1",
    title: "Lost Phone in Gym",
    description: "Black iPhone 12 with red case.",
    category: "Gadgets",
    location: "Gym",
    type: "lost",
  },
  {
    id: "2",
    title: "Found Wallet",
    description: "Brown leather wallet near cafeteria.",
    category: "Personal Belongings",
    location: "Cafeteria",
    type: "found",
  },
  {
    id: "3",
    title: "Lost Notebook",
    description: "Math notes, blue cover.",
    category: "Student Essentials",
    location: "Library",
    type: "lost",
  },
  {
    id: "4",
    title: "AquaFlask Pink Tumblr",
    description: "pink tumblr found inside in the cafeteria",
    category: "Personal Belongings",
    location: "Cafeteria",
    type: "found",
  },
  {
    id: "5",
    title: "AquaFlask Pink Tumblr",
    description: "pink tumblr inside the gym third bench",
    category: "Personal Belongings",
    location: "Gym",
    type: "lost",
  },
  {
    id: "6",
    title: "AquaFlask White Tumblr",
    description: "i put the tumblr inside the library near the windows",
    category: "Personal Belongings",
    location: "Library",
    type: "found",
  },
  {
    id: "7",
    title: "AquaFlask Black Tumblr",
    description: "i put the tumblr inside the admin office near the windows",
    category: "Personal Belongings",
    location: "Admin Office",
    type: "found",
  },
  {
    id: "8",
    title: "AquaFlask Red Tumblr",
    description: "i put the tumblr inside the library near the windows",
    category: "Personal Belongings",
    location: "Library",
    type: "found",
  },
  {
    id: "9",
    title: "AquaFlask Blue Tumblr",
    description: "i put the tumblr inside the library near the windows",
    category: "Personal Belongings",
    location: "Library",
    type: "found",
  },
  {
    id: "10",
    title: "AquaFlask Pink Tumblr",
    description: "pink tumblr found outside in the cafeteria",
    category: "Personal Belongings",
    location: "Cafeteria",
    type: "found",
  },
  {
    id: "11",
    title: "Redmi Note 11 Phone",
    description:
      "color black and has black casing with a anime wallpaper, color black and has black casing with a anime wallpaper, color black and has black casing with a anime wallpaper, color black and has black casing with a anime wallpaper",
    category: "Gadgets",
    location: "Admin Office",
    type: "lost",
  },
  {
    id: "12",
    title: "Lost Notebook",
    description: "Science notes, red cover.",
    category: "Student Essentials",
    location: "Gym",
    type: "lost",
  },
];

export default function HomePage() {
  const [viewType, setViewType] = useState<"lost" | "found">("lost");
  const [lastDescriptionKeyword, setLastDescriptionKeyword] = useState("");
  const [rawResults, setRawResults] = useState<Post[] | null>(null); // store-search-result-without-viewType-filter
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (query: string, filters: any) => {
    setLastDescriptionKeyword(filters.description || "");

    const filtered = dummyPosts.filter((item) => {
      const matchesQuery = query.trim() ? fuzzyMatch(item.title, query) : true;

      const matchesCategory = filters.selectedCategory
        ? item.category.toLowerCase() === filters.selectedCategory.toLowerCase()
        : true;

      const matchesDescription = filters.description
        ? fuzzyMatch(item.description, filters.description)
        : true;

      const matchesLocation = filters.location
        ? item.location.toLowerCase() === filters.location.toLowerCase()
        : true;

      return (
        matchesQuery && matchesCategory && matchesDescription && matchesLocation
      );
    });

    setRawResults(filtered);
  };

  const postsToDisplay = (rawResults ?? dummyPosts).filter(
    (post) => post.type === viewType
  );

  return (
    <div className="min-h-screen bg-gray-100 mb-13 font-manrope transition-colors duration-300">
      <MobileNavText title="Home" description="Welcome to home" />

      <div className="pt-4 px-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        {/* SearchBar (grows to fill left side) */}
        <div className="w-full lg:flex-1">
          <SearchBar
            onSearch={handleSearch}
            onClear={() => {
              setRawResults(null);
              setLastDescriptionKeyword("");
              setSearchQuery("");
            }}
            query={searchQuery}
            setQuery={setSearchQuery}
          />
        </div>

        {/* Home Title and Description */}
        <div className="hidden lg:block lg:max-w-sm lg:text-right space-y-1">
          <h1 className="text-sm font-medium">Home</h1>
          <p className="text-xs text-gray-600">
            Find your lost and found items here
          </p>
        </div>
      </div>

      {/* Lost / Found Toggle */}
      <div className="flex gap-3 mx-6">
        <button
          className={`p-2 w-full lg:max-w-[12rem] rounded text-md font-medium transition-colors duration-200 ${
            viewType === "lost"
              ? "bg-brand text-white"
              : "bg-gray-200 text-gray-700 border-gray-300"
          }`}
          onClick={() => setViewType("lost")}
        >
          Lost Items
        </button>
        <button
          className={`p-2 w-full lg:max-w-[12rem] rounded text-md font-medium transition-colors duration-200 ${
            viewType === "found"
              ? "bg-brand text-white"
              : "bg-gray-200 text-gray-700 border-gray-300"
          }`}
          onClick={() => setViewType("found")}
        >
          Found Items
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 mx-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {postsToDisplay.length === 0 ? (
          <div className="col-span-full flex items-center justify-center h-60 text-gray-500">
            No results found.
          </div>
        ) : (
          postsToDisplay.map((item, i) => (
            <div
              key={item.id ?? i}
              className="bg-white rounded-tl rounded-tr rounded-bl rounded-br"
            >
              <div className="bg-gray-300 h-60 mb-3 rounded-tl rounded-tr" />
              <h1 className="text-md font-bold mb-1 mx-3">{item.title}</h1>
              <p
                className="text-xs mb-1 mx-3"
                dangerouslySetInnerHTML={{
                  __html: highlightAndTruncate(
                    item.description,
                    lastDescriptionKeyword,
                    90 // or whatever length you want
                  ),
                }}
              />
              <p className="text-xs text-gray-500 mx-3 mb-4">
                Last seen: {item.location}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
