import emojiJson from "./emojiList.json";

export default function Filter(searchText) {
  return emojiJson
    .filter((data) => {
      if (
        data.keywords.toLowerCase().includes(searchText.toLowerCase()) ||
        data.title.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return data;
      }
      if (!searchText) {
        return data;
      }
    })
    .slice(0, 20);
}
