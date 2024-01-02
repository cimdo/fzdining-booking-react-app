import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export function starReview(number) {
  let result = [];
  let remainingstars = 5 - number;

  for (let i = 1; i <= number; i++) {
    result.push(
        <FaStar color="orange"/>
    );
  }

  if(remainingstars > 0) {
    for (let i = 1; i <= remainingstars; i++) {
        result.push(
            <CiStar/>
        );
      }
  }
 

  return result;
}
