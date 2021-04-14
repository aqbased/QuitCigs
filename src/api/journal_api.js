import axios from 'axios'
import apiUrl from '../apiConfig'

export const journalCreate = (journal, user) => {
  console.log(journal)
  return axios({
    url: apiUrl + '/journal',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { journal }
  })
}
