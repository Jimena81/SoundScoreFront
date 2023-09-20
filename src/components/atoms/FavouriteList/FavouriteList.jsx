import like from "../../../assets/images/like.png"
import blur from "../../../assets/images/blur-the-ballad-of-darren-768x768.jpg"

export default function FavouriteList() {
  return (
      <ul className="w-94 ml-5">
          <li className="flex gap-24 w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              <img className="w-10" src={blur} alt="" />
              An item
              <img className="w-6 " src={like} alt="" />
          </li>
          {/* <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              A second item
          </li>
          <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              A third item
          </li>
          <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              A fourth item
          </li>
          <li className="w-full py-4">And a fifth one</li> */}
      </ul>
  );
}