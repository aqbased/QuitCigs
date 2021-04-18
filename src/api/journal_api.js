import axios from 'axios'
import apiUrl from '../apiConfig'

export const mostRecentSmoked = (user) => {
  return axios({
    url: apiUrl + '/most-recent-smoked',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

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
export const journalShow = (id, user) => {
  console.log('made it to journalShow and here are id and user' + id + user)
  return axios({
    url: apiUrl + '/journal/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
export const journalIndex = (user) => {
  return axios({
    url: apiUrl + '/journal',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
export const journalUpdate = (id, journal, user) => {
  return axios({
    url: apiUrl + '/journal/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { journal }
  })
}
export const journalDelete = (id, user) => {
  return axios({
    url: apiUrl + '/journal/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
