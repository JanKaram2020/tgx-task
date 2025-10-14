import CharacterList from "~/components/character-list";

export function meta() {
  return [
    { title: "Rick and Morty App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Index() {
  return <CharacterList />;
}
