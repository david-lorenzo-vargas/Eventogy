import axios from "axios";

const fetchEvents = async() => {
  if (!process.env.EVENTS_ENDPOINT_FETCH) {
    throw new Error('EVENTS_ENDPOINT_FETCH is not defined in enviroment variables');
  }

  try {
    const res = await axios.get(process.env.EVENTS_ENDPOINT_FETCH);


    return res.data.data;
  } catch(error) {
    throw new Error("Ooops! something went wrong");
  }
};

export default fetchEvents;
