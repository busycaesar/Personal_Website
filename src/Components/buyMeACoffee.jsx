import Image from "next/image";

export default function BuyMeACoffee() {
  return (
    <>
      <a href="https://www.buymeacoffee.com/busycaesar7" target="_blank">
        <Image
          style={{ marginTop: "3em" }}
          src="https://cdn.buymeacoffee.com/buttons/default-black.png"
          alt="Buy Me A Coffee"
          height={41}
          width={174}
        />
      </a>
    </>
  );
}
