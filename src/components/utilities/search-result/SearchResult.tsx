import Image from "next/image";
import bueno from "../../../../public/bueno.png";
import nobueno from "../../../../public/nobueno.png";
import nuthin from "../../../../public/nuthin.png";

export interface ISearchResult {
  cost: number;
  roi: number;
  resultCount: number;
  minPrice: number;
  maxPrice: number;
  avgPrice: number;
  medPrice: number;
}

const SearchResult: React.FC<ISearchResult> = ({ cost, roi, resultCount, minPrice, maxPrice, avgPrice, medPrice }) => {
  const gfd = resultCount === 0 ? nuthin : avgPrice > cost * roi ? bueno : nobueno;
  return (
    // the results from the search query, including the number of results, the minimum price, the maximum price, the average price, and the median price. The results should be displayed in a table with the number of results in the first column, the minimum price in the second column, the average price in the third column, the median price in the fourth column, and the maximum price in the fifth column. The headers should read "Results", "Min", "Avg", "Med", and "Max" respectively. The table should have blue borders and a gray background. The text should be centered in each cell. The table should be centered on the page. The table should have a width of 50% of the page. The table should have a button to the left of each row that says "Save". The button should be a rounded, blue button with white text. The button should have a hover effect that changes the background to blue and the text to white. The button should have a click effect that changes the background to white and the text to blue. The button should have a click effect that changes the text to "Saved". The button should have a click effect that disables the button. The button should have a click effect that changes the background to gray and the text to white. The table should have a next Image to the left of the "Save" button. The image should be a green checkmark with a width of 20px and a height of 20px when the average price is less than the median price. The image should be a red x with a width of 20px and a height of 20px when the average price is greater than the median price. The image should be a yellow exclamation point with a width of 20px and a height of 20px when the average price is equal to the median price. The image should be a gray question mark with a width of 20px and a height of 20px when the result count is 0.
    <div className="flex flex-col justify-center items-center">
      <table className="border-collapse border border-blue-500 bg-gray-300 sm:w-5/6 md:w-4/6 w-1/2">
        <thead>
          <tr>
            <th className="border border-blue-500 text-center">Bueno-meter</th>
            <th className="border border-blue-500 text-center">Results</th>
            <th className="border border-blue-500 text-center">Min</th>
            <th className="border border-blue-500 text-center">Average</th>
            <th className="border border-blue-500 text-center">Median</th>
            <th className="border border-blue-500 text-center">Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-blue-500 text-center align-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Save</button>
              <Image src={gfd} alt="checkmark" width={32} height={32} />
            </td>
            <td className="border border-blue-500 text-center">{resultCount}</td>
            <td className="border border-blue-500 text-center">${minPrice}</td>
            <td className="border border-blue-500 text-center">${avgPrice}</td>
            <td className="border border-blue-500 text-center">${medPrice}</td>
            <td className="border border-blue-500 text-center">${maxPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResult;
