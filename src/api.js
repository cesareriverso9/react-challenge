import { BASE_URL } from "./config/environment";

export const getData = async () => {
  try {
    const data = (
      await fetch(`${BASE_URL}/assets/qspreviews/qs_interview_data.json`)
    ).json();
    return await data;
  } catch (error) {
    throw new Error("Error while fetching data!");
  }
};
