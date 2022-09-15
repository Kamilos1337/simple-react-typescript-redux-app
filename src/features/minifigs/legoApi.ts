import axios from 'axios'

const headers: any = {
  Authorization: process.env.REACT_APP_API_KEY
}
export const fetchLego: () => Promise<any> = async () => {
  return await axios.get(
    'https://rebrickable.com/api/v3/lego/minifigs?page_size=3&search=harry potter',
    {
      headers
    }
  )
}
export const fetchLegoDetails: (elem: string) => Promise<any> = async (
  elem: string
) => {
  return await axios.get(
    `https://rebrickable.com/api/v3/lego/minifigs/${elem}/`,
    {
      headers
    }
  )
}
export const fetchLegoPartsDetails: (elem: string) => Promise<any> = async (
  elem: string
) => {
  return await axios.get(
    `https://rebrickable.com/api/v3/lego/minifigs/${elem}/parts/`,
    {
      headers
    }
  )
}

export const buyLego: (body: {}) => Promise<any> = async (body: {}) => {
  return await axios.post('https://nasa.com/api/buy', body)
}
