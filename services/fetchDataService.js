async function fetchData(endpoint, config) {
  try {
    const response = await fetch(config.public.BASE_URL + endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
}

export const getCardDataFunc = (config) => fetchData("/projectsCard", config);
export const getSkillsDataFunc = (config) => fetchData("/skills", config);
export const getBlogCardDataFunc = (config) =>
  fetchData("/blogCardDatas", config);

export const getTestimonialsDataFunc = (config) =>
  fetchData("/Testimonials", config);
export const getOtherProjectCardFunc = (config) =>
  fetchData("/otherProjectCard", config);
