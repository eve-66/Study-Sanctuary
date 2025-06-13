import StateButtons from "./components/StateButtons";
import Time from "./components/Time";

export default function Home() {
  return (
    <div className="bg-gray-200 my-20">
      <div className="my-20">
        <Time />
      </div>
      <div>
        <StateButtons />
      </div>
    </div>
  );
}
