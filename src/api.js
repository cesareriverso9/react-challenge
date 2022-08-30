// import { BASE_URL } from "./config/environment";
import { RESPONSE_DATA } from "./constants";

export const getCards = async () => {
  try {
    // use if data to fetched from endpoint
    // const data = await fetch(
    //   `${BASE_URL}/assets/qspreviews/qs_interview_data.json`
    // );
    return RESPONSE_DATA;
  } catch (error) {
    throw new Error("Error while fetching data!");
  }
};
